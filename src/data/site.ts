/** Canonical site URL for GitHub Pages project site. */
export const siteUrl = "https://nutsaju.github.io/portfolio";

export const site = {
  name: "Nutsa Julakidze",
  role: "Frontend Developer",
  tagline:
    "I build production web and mobile products with React, Next.js, TypeScript, and React Native.",
  summary:
    "Frontend developer with 3+ years of experience shipping multi-language e-commerce sites, portals, admin panels, and mobile apps. Independently built 20+ storefronts, 5+ portals, and 3+ React Native apps — from implementation to App Store and Google Play release.",
  location: "Tbilisi, Georgia",
  email: "julakidzenutsa@gmail.com",
  phone: "+995 599 160 468",
  url: siteUrl,
  social: {
    linkedin: "https://www.linkedin.com/in/nutsa-julakidze-633327264/",
    github: "https://github.com/NutsaJu",
  },
  keywords: [
    "frontend developer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "React Native",
    "e-commerce development",
    "landing page design",
    "Tailwind CSS",
    "SEO-optimized websites",
    "Tbilisi developer",
    "freelance frontend",
    "admin panels",
    "mobile app development",
  ],
} as const;

export const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
] as const;
