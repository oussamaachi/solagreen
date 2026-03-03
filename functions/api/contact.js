const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 6;
const BODY_SIZE_LIMIT = 10_000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\s.-]{6,32}$/;
const rateStore = new Map();

function getClientIp(request) {
  const cfIp = request.headers.get('cf-connecting-ip');
  if (cfIp) return cfIp;
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return 'unknown';
}

function getAllowedOrigins(request, env) {
  const allowed = new Set([new URL(request.url).origin]);
  const fromEnv = env?.ALLOWED_ORIGINS;
  if (typeof fromEnv === 'string' && fromEnv.trim()) {
    fromEnv.split(',').map((origin) => origin.trim()).filter(Boolean).forEach((origin) => {
      allowed.add(origin);
    });
  }
  return allowed;
}

function getCorsHeaders(request, env) {
  const origin = request.headers.get('Origin');
  if (!origin) return {};

  const allowedOrigins = getAllowedOrigins(request, env);
  if (!allowedOrigins.has(origin)) return null;

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin',
  };
}

function jsonResponse(request, env, status, body, extraHeaders = {}) {
  const corsHeaders = getCorsHeaders(request, env);
  if (corsHeaders === null) {
    return new Response(
      JSON.stringify({ ok: false, code: 'ORIGIN_NOT_ALLOWED' }),
      { status: 403, headers: { ...JSON_HEADERS } },
    );
  }

  return new Response(
    JSON.stringify(body),
    { status, headers: { ...JSON_HEADERS, ...corsHeaders, ...extraHeaders } },
  );
}

function checkRateLimit(request) {
  const now = Date.now();
  if (rateStore.size > 5000) {
    for (const [key, value] of rateStore) {
      if (value.resetAt <= now) rateStore.delete(key);
    }
  }

  const ip = getClientIp(request);
  const key = `contact:${ip}`;
  const current = rateStore.get(key);

  if (!current || current.resetAt <= now) {
    const next = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateStore.set(key, next);
    return { limited: false, retryAfter: Math.ceil((next.resetAt - now) / 1000) };
  }

  current.count += 1;
  rateStore.set(key, current);

  return {
    limited: current.count > RATE_LIMIT_MAX,
    retryAfter: Math.ceil((current.resetAt - now) / 1000),
  };
}

function validatePayload(payload) {
  const errors = {};
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { fieldErrors: { form: 'Payload invalide.' }, spam: false, normalized: null };
  }

  const fullName = String(payload.fullName || '').trim();
  const email = String(payload.email || '').trim();
  const phone = String(payload.phone || '').trim();
  const organization = String(payload.organization || '').trim();
  const sector = String(payload.sector || '').trim();
  const need = String(payload.need || '').trim();
  const message = String(payload.message || '').trim();
  const website = String(payload.website || '').trim();
  const consent = payload.consent === true;

  const surface = payload.surface === null || payload.surface === '' || typeof payload.surface === 'undefined'
    ? null
    : Number(payload.surface);
  const energyBill = payload.energyBill === null || payload.energyBill === '' || typeof payload.energyBill === 'undefined'
    ? null
    : Number(payload.energyBill);

  if (fullName.length < 2 || fullName.length > 120) {
    errors.fullName = 'Nom complet invalide.';
  }
  if (!EMAIL_RE.test(email)) {
    errors.email = 'Adresse email invalide.';
  }
  if (phone && !PHONE_RE.test(phone)) {
    errors.phone = 'Téléphone invalide.';
  }
  if (organization.length > 120) {
    errors.organization = 'Organisation invalide.';
  }
  if (!sector || sector.length > 80) {
    errors.sector = 'Secteur invalide.';
  }
  if (!need || need.length > 120) {
    errors.need = 'Besoin principal invalide.';
  }
  if (surface !== null && (!Number.isFinite(surface) || surface < 0 || surface > 1000000)) {
    errors.surface = 'Surface invalide.';
  }
  if (energyBill !== null && (!Number.isFinite(energyBill) || energyBill < 0 || energyBill > 1000000000)) {
    errors.energyBill = 'Facture énergie invalide.';
  }
  if (message.length > 2000) {
    errors.message = 'Description trop longue.';
  }
  if (!consent) {
    errors.consent = 'Consentement obligatoire.';
  }

  return {
    fieldErrors: errors,
    spam: website.length > 0,
    normalized: {
      fullName,
      email,
      phone,
      organization,
      sector,
      need,
      surface,
      energyBill,
      message,
      consent,
      website,
    },
  };
}

async function forwardContact(env, data, requestId) {
  const webhookUrl = env?.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      requestId,
      receivedAt: new Date().toISOString(),
      source: 'solagreen-pages-contact',
      data,
    }),
  });
}

export function onRequestOptions(context) {
  const corsHeaders = getCorsHeaders(context.request, context.env);
  if (corsHeaders === null) {
    return new Response(null, { status: 403, headers: { ...JSON_HEADERS } });
  }
  return new Response(null, { status: 204, headers: corsHeaders });
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const contentLength = Number(request.headers.get('content-length') || '0');
  if (contentLength > BODY_SIZE_LIMIT) {
    return jsonResponse(request, env, 413, { ok: false, code: 'PAYLOAD_TOO_LARGE' });
  }

  const contentType = request.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    return jsonResponse(request, env, 400, { ok: false, code: 'INVALID_CONTENT_TYPE' });
  }

  const rate = checkRateLimit(request);
  if (rate.limited) {
    return jsonResponse(
      request,
      env,
      429,
      { ok: false, code: 'RATE_LIMITED' },
      { 'Retry-After': String(rate.retryAfter) },
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse(request, env, 400, { ok: false, code: 'INVALID_JSON' });
  }

  const { fieldErrors, spam, normalized } = validatePayload(payload);
  if (Object.keys(fieldErrors).length > 0) {
    return jsonResponse(request, env, 400, { ok: false, fieldErrors });
  }

  const requestId = crypto.randomUUID();

  if (spam) {
    return jsonResponse(request, env, 202, { ok: true, requestId });
  }

  try {
    await forwardContact(env, normalized, requestId);
  } catch {
    return jsonResponse(request, env, 502, { ok: false, code: 'DELIVERY_FAILED' });
  }

  return jsonResponse(request, env, 202, { ok: true, requestId });
}
