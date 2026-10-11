# DeepTech Cloud — website

Marketing site for **DeepTech Cloud**, an early-stage AI troubleshooting assistant (https://deeptechcloud.online).
Next.js 15 (static export) · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide.

## Run locally
```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
```
Other scripts: `npm run lint`, `npm run typecheck`, `npm run build` (writes static site to `out/`), `npm start` (serves `out/`).

## Run on GitHub (CI + Pages)
1. Create a GitHub repo and push this folder to `main`.
2. **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` runs `CI` (lint, typecheck, build) and `Deploy to GitHub Pages`.
   The site appears at `https://<user>.github.io/<repo>/` — the base path is set automatically.
4. **Custom domain** (deeptechcloud.online): add it under Settings → Pages, create the DNS records GitHub shows,
   then set the repository variable `CUSTOM_DOMAIN` = `true` (Settings → Variables → Actions) so the site builds at `/`.
5. Optional repo variable: `SITE_URL`.

Vercel also works: import the repo, no config needed (leave `NEXT_PUBLIC_BASE_PATH` empty).

## Contact
There is no form and no backend: the Contact section links to `mailto:admin@deeptechcloud.online`.

## Custom domain
See [docs/CLOUDFLARE-DNS.md](docs/CLOUDFLARE-DNS.md). Startup application notes: [docs/STARTUP-APPLICATION.md](docs/STARTUP-APPLICATION.md).

## AI analysis
Not implemented. The interactive preview uses pre-written sample data and makes no network calls. A live version must call a
model API from a server (never the browser), validate and rate-limit input, and get user consent before accepting logs.
GitHub Pages is static, so that needs Vercel or a separate backend.

## Structure
```
src/app          layout, page, privacy, terms, icon, OG image
src/components   Nav, Hero, Sections, Demo, Contact, Footer
src/lib          site config, sample data
.github/workflows ci.yml, pages.yml
```

## Implemented vs planned
| Item | Status |
|---|---|
| Responsive homepage, nav + mobile menu, contact section | Implemented |
| Interactive dashboard prototype (sample data only) | Implemented (mock) |
| SEO, Open Graph image, favicon, skip link, focus states | Implemented |
| CI + GitHub Pages deploy | Implemented |
| Log analysis, RCA generation, documentation retrieval | Planned |
| Accounts, storage, integrations | Planned |
| Security certifications / compliance | None claimed |
| Privacy Policy / Terms | Draft; have a professional review before launch |
