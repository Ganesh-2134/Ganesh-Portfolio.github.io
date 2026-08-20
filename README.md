# Ganesh M — Portfolio

Premium, dark/light-mode personal portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion. Content is sourced entirely from `src/data/resume.ts` — edit that file to update copy, roles, skills, or projects without touching any component.

## Local development

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build

```bash
npm run build      # type-checks with tsc, then builds to dist/
npm run preview    # serve the production build locally
```

## Deploying to GitHub Pages

This is configured as a **user/org page** (`https://github.com/Ganesh-2134/Ganesh-Portfolio.github.io/`), served from the domain root, so `vite.config.ts` sets `base: '/'`. If you ever move this to a project page instead (`username.github.io/repo-name`), change `base` to `'/repo-name/'`.

### One-time repo setup

```bash
git remote -v
# if origin points anywhere other than the repo below, fix it:
git remote set-url origin https://github.com/Ganesh-2134/Ganesh-2134.github.io.git
# if there is no origin yet:
git remote add origin https://github.com/Ganesh-2134/Ganesh-2134.github.io.git
```

### Option A — push source, build with GitHub Actions (recommended)

Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
        id: deployment
```

Then in the repo's **Settings → Pages**, set Source to **GitHub Actions**. Every push to `main` rebuilds and redeploys automatically.

### Option B — build locally, push the compiled site directly

```bash
npm run build
git add .
git commit -m "Build professional portfolio website"
git push -u origin main
```

Then in **Settings → Pages**, set Source to **Deploy from a branch**, branch `main`, folder `/(root)` — but this only works if `dist/` output is what's actually on `main`. Since this repo currently has the *source* on `main`, Option A (Actions) is the cleaner path; use Option B only if you restructure so `main` contains the built `dist/` output directly (e.g. via a `gh-pages` branch and the `gh-pages` npm package).

### Verifying after deploy

- `https://github.com/Ganesh-2134/Ganesh-Portfolio.github.io/` loads the hero section
- `/Ganesh_M_Resume.pdf` downloads correctly
- Theme toggle persists on reload
- `/robots.txt` and `/sitemap.xml` resolve

## Stack

React 19 · TypeScript · Vite 8 · Tailwind CSS v4 · Framer Motion · lucide-react
