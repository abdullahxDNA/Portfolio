# MD Abdullah — Portfolio

A single-page personal portfolio built with **React + Vite + Tailwind**. Showcases
projects, skills, education, and contact details for junior web / software developer roles.

**Live:** https://mdabdullah.dev

## Run locally

```bash
bun install
bun run dev
```

Open the URL Vite prints (default http://localhost:5173).

> If you've edited content through the admin panel, run `git pull` first so your
> local copy has those changes before you start.

## Build for production

```bash
bun run build      # outputs to dist/
bun run preview    # preview the production build locally
```

## Hosting & deploy

Hosted on **GitHub Pages** with a custom domain (`mdabdullah.dev`, DNS via Cloudflare).
Every push to `main` is built and deployed automatically by GitHub Actions
(`.github/workflows/deploy-pages.yml`) — no manual deploy step.

## Editing content

Content lives in JSON files under **`src/content/`**:

| File | Section |
|------|---------|
| `contact.json` | Name, email, phone, links |
| `general.json` | Hero roles + intro pitch |
| `skills.json` | Skill groups |
| `projects.json` | Project cards |
| `certs.json` | Certifications |
| `achievements.json` | Competitions & activities |
| `education.json` | Education entries |

Two ways to edit:

1. **Admin panel (no code):** go to https://mdabdullah.dev/admin, sign in with GitHub,
   edit the forms, and Save. This commits to the repo and the site redeploys in ~1 min.
   (Powered by Sveltia CMS; config in `public/admin/config.yml`.)
2. **By hand:** edit the JSON files directly, then commit and push.

`src/data.js` just re-exports these JSON files to the app, so `App.jsx` stays unchanged.
Colors and layout are in `src/index.css` (`:root` variables at the top).
