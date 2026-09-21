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

## Analytics (PostHog)

Free product analytics: pageviews, clicks, section views, email/phone copy, outbound links, blog opens, and session replay.

1. Create a free EU account at [https://eu.posthog.com/signup](https://eu.posthog.com/signup)
2. Create a project → copy the **Project API Key**
3. Locally: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_POSTHOG_KEY`
4. GitHub: **NutsaJu/portfolio → Settings → Secrets and variables → Actions**
   - Add secret `NEXT_PUBLIC_POSTHOG_KEY` = your project API key
5. In PostHog project settings, enable **Session replay**
6. Add authorized URL: `https://nutsaju.github.io`

Useful events in the dashboard: `$pageview`, `section_view`, `nav_click`, `cta_click`, `contact_copy`, `contact_click`, `outbound_click`, `blog_open`, `blog_view`.
