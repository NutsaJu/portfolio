"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import { HeroIllustration } from "@/components/HeroIllustration";
import { site } from "@/data/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-20">
      <div className="section-pad container-shell relative z-10 grid min-h-[calc(100svh-5rem)] items-center gap-8 py-12 lg:grid-cols-2 lg:gap-12 lg:py-16">
        <div className="max-w-xl">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-medium text-accent"
          >
            {site.name}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.04 }}
            className="mb-5 inline-flex items-center gap-2 text-sm text-ink-muted"
          >
            <MapPin size={14} className="text-accent" />
            {site.location} · Available for freelance &amp; contract
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[clamp(2.1rem,4.8vw,3.4rem)] font-bold leading-[1.1] text-ink"
          >
            Frontend for web &amp; mobile products that ship
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-5 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Building landings, e-commerce, portals, and React Native apps with Next.js, TypeScript,
            and Tailwind.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-deep"
            >
              View projects
              <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-bg-elevated/70 px-5 py-3 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent-deep"
            >
              Contact me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="w-full justify-self-center lg:justify-self-end"
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
