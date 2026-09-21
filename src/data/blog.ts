export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  keywords: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-with-cursor-and-claude-in-production",
    title: "Building with Cursor and Claude in production",
    description:
      "How I use Cursor and Claude to ship Next.js, React Native, and e-commerce work faster — while still reviewing and owning every line that goes live.",
    date: "2026-04-08",
    readingTime: "6 min",
    keywords: [
      "Cursor IDE",
      "Claude AI",
      "AI-assisted development",
      "Next.js",
      "frontend workflow",
    ],
    content: [
      "Since late 2025 I have built every website and app in Cursor with Claude in the loop. The speed gain is real — scaffolding routes, Tailwind layouts, form validation, and test stubs can happen in minutes instead of hours.",
      "The rule that keeps quality high: AI drafts, I decide. I still review architecture, naming, accessibility, error states, and edge cases before anything ships. Clients get production code I can explain and maintain, not a black box.",
      "Cursor works best when the repo already has clear patterns — shared components, consistent folder structure, and typed APIs. Claude then extends what already exists instead of inventing a second style.",
      "For e-commerce and portals, I use AI for repetitive UI and wiring, then hand-check payments, roles, i18n, and SEO. That mix is how I keep shipping multi-brand stores and mobile apps without lowering the bar.",
    ],
  },
  {
    slug: "ai-assisted-frontend-workflow-with-claude",
    title: "An AI-assisted frontend workflow with Claude",
    description:
      "A practical loop for prompting Claude on React and Next.js tasks: context, constraints, review, and when to write the code yourself.",
    date: "2026-03-28",
    readingTime: "5 min",
    keywords: ["Claude", "Cursor", "React", "prompting", "code review"],
    content: [
      "Good prompts start with context: stack, file paths, design constraints, and what “done” looks like. Vague asks produce vague UI. Specific asks — “App Router, Tailwind tokens, mobile-first, match existing Button” — produce usable diffs.",
      "I keep Claude inside the project’s conventions. If the design is from Figma, I describe spacing and typography. If I own the design, I set brand rules up front so the output does not drift into generic AI layouts.",
      "Review is non-negotiable. I scan for wrong assumptions, security gaps, bloated components, and missing loading or empty states. Anything that touches auth, payments, or store releases gets extra human attention.",
      "AI does not replace frontend judgment. It compresses the boring middle of implementation so more time goes to product decisions, polish, and shipping.",
    ],
  },
  {
    slug: "nextjs-seo-checklist-for-production-sites",
    title: "Next.js SEO checklist for production sites",
    description:
      "A practical checklist for metadata, sitemaps, SSR/SSG choices, and Core Web Vitals when shipping Next.js App Router projects.",
    date: "2026-03-12",
    readingTime: "6 min",
    keywords: ["Next.js SEO", "App Router", "metadata", "sitemap", "Core Web Vitals"],
    content: [
      "Shipping a Next.js site is only half the job — search engines still need clear signals about what the page is, who it is for, and why it should rank.",
      "Start with the App Router metadata API: unique titles, descriptions, Open Graph tags, and canonical URLs on every important route. Add a sitemap.ts and robots.ts so crawlers can discover your pages without guessing.",
      "Choose rendering carefully. Marketing pages and blogs often win with static generation. Product catalogs and dashboards may need SSR or client fetching with solid loading states. Image optimization with next/image and modern font loading are free wins for Core Web Vitals.",
      "Finally, structure content with semantic headings, internal links, and keyword-aware copy that still reads like a human wrote it. Analytics (GA / Meta Pixel) help you verify that traffic and conversions actually follow.",
    ],
  },
  {
    slug: "figma-to-nextjs-without-losing-the-design",
    title: "From Figma to Next.js without losing the design",
    description:
      "How I turn Figma designs into responsive React components with Tailwind — preserving spacing, typography, and interaction intent.",
    date: "2026-02-04",
    readingTime: "5 min",
    keywords: ["Figma to code", "Tailwind CSS", "React", "design systems"],
    content: [
      "A good Figma handoff is a system, not a screenshot. Before writing components, I map typography scales, color tokens, spacing, and recurring patterns into CSS variables or Tailwind theme tokens.",
      "I build the layout shell first — navigation, hero, sections — then extract repeated UI into reusable components. Responsive behavior is designed intentionally: what collapses, what stacks, and what stays sticky.",
      "Motion should reinforce hierarchy. Entrance fades, hover states, and scroll reveals work best when they are sparse and purposeful. The goal is a site that feels crafted, not decorated.",
      "Whether the design is mine or a designer’s Figma file, the shipped UI should match the intent: clear brand presence, readable type, and interactions that feel native to the product.",
    ],
  },
  {
    slug: "reusable-ecommerce-architecture-in-nextjs",
    title: "Reusable e-commerce architecture in Next.js",
    description:
      "Lessons from powering multiple branded stores with shared templates, i18n, payments, and SEO-minded page structure.",
    date: "2026-01-18",
    readingTime: "7 min",
    keywords: ["e-commerce", "Next.js", "multi-brand", "i18n", "payments"],
    content: [
      "When you maintain many storefronts, copy-pasting pages becomes expensive. Shared templates, theme tokens, and a component library let one codebase serve multiple brands while content and styling stay flexible.",
      "Data fetching with TanStack Query (or server components + fetch) keeps catalogs and carts predictable. Redux Toolkit still helps when complex client state spans checkout, auth, and role-based UI.",
      "Payments, analytics, and i18n should be treated as first-class modules — not afterthoughts. Stripe or Keepz adapters, GA / Meta Pixel hooks, and admin-managed translations scale better when isolated behind clean interfaces.",
      "SEO remains non-negotiable for storefronts: product metadata, clean URLs, optimized images, and crawlable category pages are part of the architecture, not a launch-week patch.",
    ],
  },
  {
    slug: "react-native-expo-store-release-basics",
    title: "React Native + Expo: store release basics",
    description:
      "What to plan for when taking an Expo app from development to App Store and Google Play — including push notifications.",
    date: "2026-01-05",
    readingTime: "5 min",
    keywords: ["React Native", "Expo", "App Store", "Google Play", "push notifications"],
    content: [
      "Shipping mobile is a product process, not only a build command. Navigation, auth, offline-friendly states, and push notification permissions all need to be designed before store review.",
      "Expo shortens the path to iOS and Android, but you still own App Store Connect and Google Play Console: certificates, screenshots, privacy labels, and release tracks.",
      "Push notifications require careful permission UX and backend coordination. Native modules should be introduced only when Expo’s managed APIs are not enough.",
      "As the sole mobile developer on several apps, I learned to treat release checklists as part of the feature — not a surprise at the end of the sprint.",
    ],
  },
];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
