export type Project = {
  id: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  highlights: string[];
  url?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "multi-brand-ecommerce",
    title: "Multi-brand e-commerce platform",
    summary:
      "Shared Next.js templates and component libraries powering 20+ branded multi-language storefronts with payments and SEO.",
    role: "Frontend owner — GlobalSoft Georgia",
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Stripe", "Keepz"],
    highlights: [
      "Reusable architecture across multiple branded stores",
      "SSR/SSG, SEO, and image optimization",
      "Stripe & Keepz payment flows",
      "Admin-managed i18n translations",
    ],
    url: "https://globalcell.ge/",
    featured: true,
  },
  {
    id: "fintech-globalpay",
    title: "Fintech payment platform",
    summary:
      "Georgian payment service provider UI — multi-currency accounts, transfers, deposits and withdrawals, with Identomat identity verification.",
    role: "Frontend owner — GlobalSoft Georgia",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Identomat", "REST APIs"],
    highlights: [
      "Multi-currency accounts (GEL, USD, EUR)",
      "Transfer, deposit, and withdraw flows",
      "Identomat integration for personal verification (AML / KYC)",
      "Secure account dashboard and compliance-ready UX",
    ],
    url: "https://globalpay.ge/",
    featured: true,
  },
  {
    id: "fintech-globalvasp",
    title: "Bank ↔ crypto transfer platform",
    summary:
      "Fintech product for managing bank and crypto accounts — exchange between them with Identomat personal verification for compliant transfers.",
    role: "Frontend owner — GlobalSoft Georgia",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Identomat", "REST APIs"],
    highlights: [
      "Bank account and crypto wallet management",
      "Exchange / transfer flows between bank and crypto",
      "GEL, USD, and EUR support",
      "Identomat KYC / personal verification integration",
    ],
    url: "https://globalvasp.ge/",
    featured: true,
  },
  {
    id: "iot-landing",
    title: "IoT SIM informational landing",
    summary:
      "Clean marketing landing page for IoT SIM cards — product overview, use cases, and a contact CTA for device connectivity.",
    role: "Frontend owner — GlobalSoft Georgia",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Informational hero with clear value proposition",
      "Use-case sections for POS, parking, and GPS devices",
      "Contact-focused CTA and responsive layout",
    ],
    url: "https://iotsim.ge/",
    featured: true,
  },
  {
    id: "personal-portal",
    title: "Personal portal",
    summary:
      "User-facing portal for managing eSIMs, balance, and usage securely from anywhere — landing, auth, and account flows.",
    role: "Frontend owner — GlobalSoft Georgia",
    stack: ["React", "TypeScript", "Tailwind CSS", "i18n"],
    highlights: [
      "eSIM, billing, and usage management in one place",
      "Multi-language UI and secure login flows",
      "Marketing landing paired with the private portal",
    ],
    url: "https://globalcell.me/",
    featured: true,
  },
  {
    id: "business-portals",
    title: "Business portal",
    summary:
      "Business-facing portal for teams deploying and managing eSIMs at scale — connectivity control, auth, and WhatsApp-ready support channels.",
    role: "Frontend owner — GlobalSoft Georgia",
    stack: ["React", "Recharts", "WebSockets", "WhatsApp API", "TypeScript"],
    highlights: [
      "Multi-role access with role-specific UI",
      "Centralized eSIM and data management for teams",
      "Login, consent, and support channel integrations",
    ],
    url: "https://globalcell.business/",
    featured: true,
  },
  {
    id: "distributor-portal",
    title: "Distributor portal",
    summary:
      "Partner / distributor portal for white-label eSIM sales — package purchase flows, commissions, and multi-country catalog management.",
    role: "Frontend owner — GlobalSoft Georgia",
    stack: ["React", "TypeScript", "Tailwind CSS", "i18n"],
    highlights: [
      "White-label partner onboarding and sign-up",
      "Package catalog across 100+ countries",
      "Dashboard UI for purchasing and managing inventory",
    ],
    url: "https://globalcell.partners/",
    featured: true,
  },
  {
    id: "dealer-portal",
    title: "Dealer portal",
    summary:
      "B2B dealer workspace for selling eSIMs, managing customer balances, tracking commissions, and generating reports.",
    role: "Frontend owner — GlobalSoft Georgia",
    stack: ["React", "Recharts", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Sales, customers, inventory, and wallet modules",
      "Commission tracking and detailed reporting dashboards",
      "Secure dealer sign-up and sign-in flows",
    ],
    url: "https://globalcell.deals/",
    featured: true,
  },
  {
    id: "cross-platform-mobile",
    title: "Cross-platform mobile app",
    summary:
      "React Native + Expo app built as the sole mobile developer, shipped to the App Store and Google Play with push notifications.",
    role: "Sole mobile developer — GlobalSoft Georgia",
    stack: ["React Native", "Expo", "React Navigation", "Push notifications"],
    highlights: [
      "iOS and Android from one codebase",
      "Native modules and push notifications",
      "App Store Connect & Google Play release",
    ],
    url: "https://globalcell.app/",
    featured: true,
  },
  {
    id: "frani-insurance",
    title: "Frani insurance platform",
    summary:
      "Customer-facing web app and admin panel for an insurance product — new features focused on smooth UX.",
    role: "Front End Developer — Frani",
    stack: ["React", "Redux", "Styled Components"],
    highlights: [
      "Shipped product features end-to-end",
      "Customer app + admin panel contributions",
    ],
    url: "https://frani.com",
  },
  {
    id: "silk-road-gaming",
    title: "Silk Road Gaming interfaces",
    summary:
      "Interactive React interfaces for a gaming product, built in a collaborative Git workflow.",
    role: "React Developer — Silk Road Gaming",
    stack: ["React", "JavaScript", "Git"],
    highlights: ["Interactive UI components", "Team-based feature delivery"],
    url: "https://silk-road-gaming-3g2l.vercel.app/",
  },
  {
    id: "taskify",
    title: "Taskify",
    summary: "Personal productivity web app with a clean task management experience.",
    role: "Personal project",
    stack: ["React", "JavaScript", "CSS"],
    highlights: ["Component-driven UI", "Responsive layout"],
    url: "https://taskify-by-nj.netlify.app/",
  },
  {
    id: "zetta-hotels",
    title: "Zetta Hotels",
    summary: "Hotel marketing site focused on presentation and responsive layout.",
    role: "Personal / client-style project",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Responsive marketing layout", "Visual-first composition"],
    url: "https://nutsaju.github.io/zetta-hotels/",
  },
  {
    id: "fashion-landing",
    title: "Fashion landing page",
    summary: "Styled landing page exploring modern typography and product presentation.",
    role: "Personal project",
    stack: ["HTML", "CSS", "JavaScript"],
    highlights: ["Landing page composition", "Visual hierarchy"],
    url: "https://nutsaju.github.io/Fashion-Landing-Page/",
  },
];
