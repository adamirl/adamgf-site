# adamgf.com

Personal site for Adam Glynn-Finnegan. Static React app built with Vite — no backend, deploys as plain HTML/CSS/JS to GitHub Pages.

## Develop

```
npm install
npm run dev
```

## Build

```
npm run build
```

Outputs a fully static site to `dist/`.

## Content

Everything visible on the page — bio, timeline, featured projects, writing, awards, contact links — lives in `src/content.js`. Edit that file and rebuild; no other code changes needed for text/content updates.

Visual tuning (accent palette, fonts, cursor effect defaults) lives in `src/constants.js`.

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys automatically on every push to `main`, via GitHub's official Pages Actions (`upload-pages-artifact` + `deploy-pages`).

One-time repo setup:
1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to "GitHub Actions".
3. In **Settings → Pages → Custom domain**, enter your domain (this repo ships `public/CNAME` set to `www.adamgf.com` — edit that file if you want a different host).
4. At your DNS provider, point the domain at GitHub Pages:
   - `www` (or whichever host is in `CNAME`) → `CNAME` record to `<username>.github.io`
   - Apex domain (`adamgf.com`) → `A` records to GitHub Pages' IPs (see [GitHub's docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)), if you also want the bare domain to resolve.
5. Push to `main` — the workflow builds and deploys within a minute or two.

If this `site/` folder isn't the root of the GitHub repo, update the `working-directory` and artifact `path` entries in the workflow to match.

## What's here vs. the original design prototype

This is a production port of a design prototype built in Claude Design (see `../project`, `../chats` at the repo root for that history). Notable differences from the prototype:

- No runtime Babel/CDN — everything is precompiled by Vite.
- Removed the Claude-Design-only "Tweaks" panel and its `postMessage` edit-mode plumbing (only ever active inside the design tool's iframe; dead code in a standalone deploy).
- Removed the visitor-facing "Cursor Effects" (✦) panel that let anyone reconfigure the cursor animation — kept the underlying effect itself (brand-reactive mesh) active at the values it was last tuned to, since exposing that control publicly didn't feel right for a professional portfolio. Easy to re-add if you want it back — it's still in the prototype's `app.jsx`.
- Fixed a real bug: the cursor follower's animation loop was clearing its own opacity every frame (`el.style.opacity = ""`), which fought with the intended per-theme opacity (0.38 light / 0.95 dark) and left it stuck fully opaque after the first mouse move. Removed the redundant opacity toggle — the off-screen starting position already prevents any flash before the first move.
- Fixed a gap where the brand-reactive cursor mesh (color shifts to each company's brand color on hover) didn't fire on the default "View" layout's synopsis links, because they were missing the `data-brand` attribute that the "Readable" layout's links already had.
