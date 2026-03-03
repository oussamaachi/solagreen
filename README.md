# SOLAGREEN Website

React + Vite frontend with Cloudflare Pages deployment and secure form endpoints.

## Local Commands

- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm audit`

## Cloudflare Pages Functions

Implemented endpoints:

- `POST /api/contact`
- `POST /api/newsletter`

Both endpoints include:

- strict payload validation
- honeypot anti-spam (`website`)
- per-IP rate limiting (best-effort runtime memory)
- strict origin checks (same-origin + optional allowlist)

## Optional Environment Variables (Pages Functions)

- `ALLOWED_ORIGINS`
  - Comma-separated allowed origins for cross-origin API access.
  - Same-origin is always allowed.
- `CONTACT_WEBHOOK_URL`
  - If set, validated contact submissions are forwarded to this webhook.
- `NEWSLETTER_WEBHOOK_URL`
  - If set, validated newsletter submissions are forwarded to this webhook.

## Security Headers

Security headers are defined in `public/_headers` and include:

- Content Security Policy
- HSTS
- X-Frame-Options
- Referrer-Policy
- Permissions-Policy
- X-Content-Type-Options

## QA Deliverables

- Audit report: `AUDIT_REPORT.md`
- Validation checklist: `QA_CHECKLIST.md`
