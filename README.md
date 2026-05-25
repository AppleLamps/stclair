# The Fracture

A self-contained investigative long-read (`ashley-st-clair-expose.html`) synthesized from archived X posts, federal court OCR filings, and interview/TikTok transcripts in this repository.

## Local preview

```bash
npm run build
npm run dev
```

Open http://localhost:3000

## Deploy on Vercel

1. Import this repository in [Vercel](https://vercel.com/new).
2. Framework preset: **Other** (static site).
3. Build command: `npm run build` (set automatically via `vercel.json`).
4. Output directory: `public` (set automatically via `vercel.json`).
5. Deploy.

The build copies `ashley-st-clair-expose.html` → `public/index.html`. Edit the source file, then redeploy.

Large research assets (`Ashley-posts.jsonl`, `court-cases/`, `transcripts/`) are listed in `.vercelignore` so deploys stay fast; they are not required to serve the article.

## Source of truth

| File | Role |
|------|------|
| `ashley-st-clair-expose.html` | Article source (edit here) |
| `public/index.html` | Generated entry point for Vercel |
| `vercel.json` | Vercel build and routing |
| `scripts/build.mjs` | Copy step |
