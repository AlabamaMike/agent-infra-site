# Agent Infrastructure Layer — Microsite

Interactive research microsite covering the eight-layer agent infrastructure stack, with sector maps for 85+ companies.

## Quick Start (Local)

```bash
npm install
npm run dev
```

## Deploy to Vercel (Easiest)

1. Push this folder to a new GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo — Vercel auto-detects Vite
4. Click **Deploy**
5. Share the URL (e.g. `your-project.vercel.app`)

## Deploy to Netlify (Alternative)

1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. "Add new site" → "Import from Git"
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy**

## Build for Static Hosting

```bash
npm run build
```

Output goes to `dist/` — upload anywhere (S3, GitHub Pages, etc).
