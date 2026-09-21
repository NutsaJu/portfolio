# Nutsa Julakidze — Portfolio

Modern personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

## Sections

- Summary & skills
- Services for clients
- Selected projects
- Experience
- SEO blog
- Contact

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Content

Update copy and listings in `src/data/`:

- `site.ts` — name, summary, contact, SEO keywords
- `services.ts` — client offerings
- `projects.ts` — project case studies
- `experience.ts` — work history & skills
- `blog.ts` — blog posts for SEO

## Deploy

Published to GitHub Pages at [https://nutsaju.github.io/portfolio/](https://nutsaju.github.io/portfolio/).

Static export is configured in `next.config.ts` (`output: "export"`, `basePath: "/portfolio"` in production). Pushing to `main` builds the site and publishes the `out/` folder to the `gh-pages` branch.

In the repo settings, set **Pages → Source** to **Deploy from a branch**, branch **`gh-pages`**, folder **`/` (root)**.
