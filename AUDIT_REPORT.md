# Audit Report - SOLAGREEN

Date: 2026-03-02
Scope: UI/UX, visual consistency, accessibility, bugs, frontend security.

## Executive Summary

- Build and runtime baseline are stable.
- Security posture improved with API hardening and response headers.
- Critical UX blockers on forms and desktop menu accessibility were fixed.
- Residual risk is mostly visual QA validation that still needs browser-level screenshot checks in an unrestricted headless environment.

## Findings Matrix (P0/P1/P2)

| Severity | Area | Finding | Status |
|---|---|---|---|
| P0 | Forms | Contact form was non-functional (`type="button"` without submission) | Fixed |
| P0 | Forms | Newsletter block had no submission flow or validation | Fixed |
| P0 | Security | No secured API contract for contact/newsletter | Fixed |
| P1 | Accessibility | Missing label associations and field-level error semantics | Fixed |
| P1 | Accessibility | Desktop "Solutions" dropdown relied on hover only | Fixed |
| P1 | Security | Missing explicit security headers on static assets/pages | Fixed |
| P1 | UX | CEE simulator allowed repeated actions without strong guards | Fixed |
| P2 | Motion | No explicit reduced-motion handling for GSAP flows | Fixed |
| P2 | Content | Solutions timeline chronology was inconsistent | Fixed |
| P2 | Tooling | Global lint failed due to `replace_unsplash.js` regex escaping | Fixed |

## Detailed Findings by Page/Component

| Severity | Page/Component | File | Issue | Status |
|---|---|---|---|---|
| P0 | Contact form | `src/pages/Contact.jsx` | No backend submission flow; button was non-submit | Fixed |
| P0 | Newsletter section | `src/pages/Blog.jsx` | No validation, no consent, no API call | Fixed |
| P1 | Desktop navigation dropdown | `src/components/Navbar.jsx` | Hover-only interaction, no keyboard support | Fixed |
| P1 | Contact form accessibility | `src/pages/Contact.jsx` | Labels not bound to inputs, weak error semantics | Fixed |
| P1 | Global focus visibility | `src/index.css` | Inconsistent/insufficient keyboard focus styling | Fixed |
| P1 | API security boundary | `functions/api/contact.js`, `functions/api/newsletter.js` | Missing validated endpoints and anti-spam controls | Fixed |
| P1 | Header hardening | `public/_headers` | Security headers absent from project | Fixed |
| P2 | Motion accessibility | `src/pages/*` + `src/utils/motion.js` | No explicit reduced-motion handling for GSAP | Fixed |
| P2 | CEE simulator robustness | `src/pages/CEE.jsx` | Repeated action/race risk on transitions/calculate | Fixed |
| P2 | Regulatory timeline order | `src/pages/Solutions.jsx` | Non-chronological sequence in timeline | Fixed |

## Implemented Changes

### 1) Baseline and Tooling

- Fixed lint errors in `replace_unsplash.js`.
- Added checklist file: `QA_CHECKLIST.md`.

### 2) UI/UX + Accessibility

- `src/components/Navbar.jsx`
- Added keyboard-accessible desktop dropdown (`Enter`, `Space`, `ArrowDown`, `Escape`, blur/outside close).
- Added ARIA attributes (`aria-expanded`, `aria-haspopup`, `aria-controls`).
- `src/pages/Contact.jsx`
- Full submit flow with `idle/loading/success/error`.
- Client-side validation and field-level error display.
- Proper labels (`htmlFor` + `id`) and `aria-invalid`/`aria-describedby`.
- Added honeypot field (`website`) and consent handling.
- `src/pages/Blog.jsx`
- Newsletter wired with validation, consent checkbox, honeypot, and UX states.
- `src/index.css`
- Global coherent `:focus-visible` styles.
- Global reduced-motion fallback.

### 3) Motion and Visual Stability

- Added helper: `src/utils/motion.js`.
- Added `prefers-reduced-motion` checks to animated pages:
- `Accueil`, `APropos`, `Solutions`, `Isolation`, `Projets`, `Blog`, `Contact`, `CEE`.
- Removed inline style in footer to keep CSP stricter:
- `src/components/Footer.jsx`.

### 4) Functional Bug Fixes

- `src/pages/CEE.jsx`
- Guarded transitions and calculate action against repeated clicks/state races.
- Added stronger next/previous step guards and disabled states.
- Clarified estimation disclaimer timestamp.
- `src/pages/Solutions.jsx`
- Reordered timeline items chronologically.

### 5) Security Hardening

- Added Cloudflare Pages Functions endpoints:
- `functions/api/contact.js`
- `functions/api/newsletter.js`
- Implemented:
- strict payload validation
- honeypot anti-spam (`website`)
- in-memory rate limiting with `429 + Retry-After`
- strict origin checks (same-origin + `ALLOWED_ORIGINS`)
- optional webhook forwarding (`CONTACT_WEBHOOK_URL`, `NEWSLETTER_WEBHOOK_URL`)
- Added HTTP security headers:
- `public/_headers`
- Includes CSP, HSTS, frame protection, referrer policy, permissions policy, content type protection, robots tag.

## Residual Risks / Follow-up

1. Visual QA automation:
- A full screenshot diff run (mobile/tablet/desktop) should be executed in an environment that permits headless browser capture without OS permission errors.
2. Rate limiting:
- Current limiter is in-memory and best-effort per isolate.
- For strict production guarantees, enforce Cloudflare WAF rate-limit rules at edge level.
3. Form delivery:
- Endpoints support webhook forwarding.
- Production must set `CONTACT_WEBHOOK_URL` and `NEWSLETTER_WEBHOOK_URL` to ensure durable processing.

## Recommended Next Fix Plan (Prioritized)

1. P0: Configure production webhook endpoints and smoke test both APIs end-to-end.
2. P1: Apply Cloudflare dashboard rate-limit rules for `/api/contact` and `/api/newsletter`.
3. P1: Run full responsive screenshot audit matrix and capture regressions.
4. P2: Add automated integration tests for API validation cases and form submission flows.
