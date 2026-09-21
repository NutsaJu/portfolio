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

Designed for Vercel. Update `metadataBase` in `src/app/layout.tsx` and URLs in `sitemap.ts` / `robots.ts` to match your domain.
