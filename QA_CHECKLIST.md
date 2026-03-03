# SOLAGREEN QA Checklist

## Core Quality Gate

1. `npm run lint`
2. `npm run build`
3. `npm audit`

## Routing and Assets Gate

1. Verify all `Link to="/..."` targets exist in `src/App.jsx` routes.
2. Verify all image assets referenced from `src/` exist in `public/`.

## UI/UX Gate (Mobile + Desktop)

1. Validate pages:
- `/`
- `/a-propos`
- `/solutions`
- `/isolation`
- `/cee`
- `/projets`
- `/blog`
- `/contact`
- `/blog/article-1` to `/blog/article-10`
2. Validate:
- readable hierarchy (`h1`, `h2`, body)
- CTA visibility and clickability
- navbar/footer consistency
- no horizontal overflow
- focus-visible styles on interactive elements
- keyboard navigation for desktop dropdowns

## Accessibility Gate

1. One `h1` per page.
2. Labels associated with fields (`htmlFor` + `id`).
3. Form error messages visible and tied to fields.
4. `prefers-reduced-motion` respected.

## Security Gate

1. `public/_headers` deployed and active:
- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-Frame-Options`
- `Permissions-Policy`
- `Referrer-Policy`
- `X-Content-Type-Options`
2. API endpoints:
- `POST /api/contact`
- `POST /api/newsletter`
3. API controls:
- strict payload validation
- honeypot filtering (`website`)
- rate limiting (`429`)
- strict origin handling
