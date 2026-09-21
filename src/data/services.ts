export type Service = {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: "layout" | "store" | "panels" | "smartphone" | "search";
};

export const services: Service[] = [
  {
    id: "landing",
    title: "Landing websites",
    description:
      "Fast, conversion-focused marketing sites with strong SEO — built from my own design or a Figma file you provide.",
    deliverables: [
      "Custom or Figma-to-code UI",
      "Responsive layout & animations",
      "SEO structure & metadata",
      "Contact forms & analytics",
    ],
    icon: "layout",
  },
  {
    id: "ecommerce",
    title: "E-commerce & product sites",
    description:
      "Multi-language storefronts with cart, checkout, payments, and reusable component architecture for multiple brands.",
    deliverables: [
      "Next.js storefronts (SSR/SSG)",
      "Stripe / Keepz payments",
      "i18n & product catalogs",
      "SEO & image optimization",
    ],
    icon: "store",
  },
  {
    id: "portals",
    title: "Portals & admin panels",
    description:
      "Business, distributor, dealer, and support portals with role-based access, dashboards, and real-time updates.",
    deliverables: [
      "Multi-role authentication",
      "Recharts dashboards",
      "WebSocket live data",
      "API integrations",
    ],
    icon: "panels",
  },
  {
    id: "mobile",
    title: "React Native mobile apps",
    description:
      "Cross-platform iOS and Android apps with Expo — including push notifications and store release support.",
    deliverables: [
      "Expo / React Native apps",
      "Push notifications",
      "App Store & Google Play",
      "Native module integration",
    ],
    icon: "smartphone",
  },
  {
    id: "seo",
    title: "SEO & performance",
    description:
      "Technical SEO, Core Web Vitals, structured content, and analytics so your product can be found and trusted.",
    deliverables: [
      "Meta, sitemap, robots",
      "SSR / SSG strategy",
      "Image & font optimization",
      "GA & Meta Pixel setup",
    ],
    icon: "search",
  },
];
