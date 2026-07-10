# MD Abdullah — Portfolio

A single-page personal portfolio built with **React + Vite**. Showcases projects,
skills, education, and contact details for junior web / software developer roles.

## Run locally

```bash
bun install
bun run dev
```

Open the URL Vite prints (default http://localhost:5173).

## Build for production

```bash
bun run build      # outputs to dist/
bun run preview    # preview the production build locally
```

## Deploy (free)

### Option A — Vercel (easiest)
1. Push this folder to a GitHub repo.
2. Go to vercel.com, "Add New Project", import the repo.
3. Framework preset: **Vite**. Click Deploy. Done — you get a live URL.

### Option B — Netlify
1. Push to GitHub.
2. netlify.com → "Add new site" → import repo.
3. Build command: `bun run build`, Publish directory: `dist`.

### Option C — GitHub Pages
1. `bun run build`
2. Deploy the `dist/` folder to a `gh-pages` branch (e.g. with the `gh-pages` npm package).
   `base: './'` in `vite.config.js` already makes asset paths relative for Pages.

## Editing your content

All content lives in `src/App.jsx` at the top:
- `CONTACT` — name, email, phone, links
- `SKILLS` — skill groups
- `PROJECTS` — project cards (add your real GitHub repo links here!)
- `CERTS` — certifications

Colors and layout are in `src/index.css` (`:root` variables at the top).
