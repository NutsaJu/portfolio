export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "globalsoft",
    company: "GlobalSoft Georgia",
    role: "Front End Developer",
    period: "Jan 2025 – Present",
    bullets: [
      "Independently built the frontend of 20+ multi-language e-commerce websites and landing pages with React, Next.js (App Router, SSR/SSG), TypeScript, Redux Toolkit, TanStack Query, and Tailwind CSS.",
      "Created shared templates and component libraries so one codebase powers multiple branded stores.",
      "Delivered 5+ portals and admin panels with Recharts dashboards, real-time WebSockets, and WhatsApp Business API support workflows.",
      "Built authentication and complex multi-role permissions with role-specific UI across projects.",
      "Integrated Stripe, Keepz, Google Analytics, Meta Pixel, Firebase, and multi-language i18n.",
      "Shipped 3+ React Native (Expo) apps to the App Store and Google Play as the sole mobile developer.",
    ],
  },
  {
    id: "frani",
    company: "Frani",
    role: "Front End Developer",
    period: "Nov 2023 – Sep 2024",
    bullets: [
      "Contributed to the customer-facing web app and admin panel of an insurance platform using React, Redux, and Styled Components.",
      "Shipped new products and features with a focus on smooth, efficient user experience.",
    ],
  },
  {
    id: "silk-road",
    company: "Silk Road Gaming",
    role: "React Developer",
    period: "Jun 2023 – Sep 2023",
    bullets: [
      "Built interactive React interfaces in a collaborative Git-based team workflow.",
    ],
  },
  {
    id: "zero-gravity",
    company: "Zero Gravity",
    role: "JavaScript Developer (Intern)",
    period: "Nov 2022 – Jan 2023",
    bullets: [
      "Built client websites with HTML, CSS, JavaScript, and Bootstrap.",
    ],
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Redux / RTK",
    "TanStack Query",
    "Framer Motion",
    "shadcn/ui",
  ],
  mobile: ["React Native", "Expo", "Push notifications", "App Store / Play"],
  backend: ["Node.js", "MongoDB", "Firebase", "REST APIs", "WebSockets"],
  seo: ["SSR / SSG", "SEO", "GA", "Meta Pixel", "Image optimization"],
};
