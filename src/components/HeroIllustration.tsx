"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroIllustration() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[480px] lg:max-w-[520px]">
      <svg
        viewBox="0 0 560 480"
        className="h-auto w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="heroPanel" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#f7fafc" />
            <stop offset="1" stopColor="#e8eef4" />
          </linearGradient>
          <linearGradient id="heroAccent" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#14b8a6" />
            <stop offset="1" stopColor="#0f766e" />
          </linearGradient>
          <linearGradient id="heroSand" x1="0" y1="1" x2="1" y2="0">
            <stop stopColor="#d6c4a8" stopOpacity="0.55" />
            <stop offset="1" stopColor="#d6c4a8" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Backdrop shapes */}
        <motion.circle
          cx="420"
          cy="90"
          r="78"
          fill="url(#heroSand)"
          initial={reduce ? false : { scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.rect
          x="28"
          y="310"
          width="120"
          height="120"
          rx="28"
          fill="#0f766e"
          opacity="0.12"
          initial={reduce ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 0.12 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        />

        {/* Browser window */}
        <motion.g
          initial={reduce ? false : { y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect x="48" y="64" width="340" height="250" rx="18" fill="url(#heroPanel)" />
          <rect x="48" y="64" width="340" height="38" rx="18" fill="#0b1220" fillOpacity="0.04" />
          <circle cx="72" cy="83" r="5" fill="#0f766e" opacity="0.7" />
          <circle cx="90" cy="83" r="5" fill="#d6c4a8" />
          <circle cx="108" cy="83" r="5" fill="#0b1220" opacity="0.2" />
          <rect x="140" y="76" width="160" height="14" rx="7" fill="#0b1220" fillOpacity="0.06" />

          <rect x="72" y="128" width="120" height="14" rx="7" fill="#0b1220" fillOpacity="0.7" />
          <rect x="72" y="154" width="200" height="8" rx="4" fill="#0b1220" fillOpacity="0.18" />
          <rect x="72" y="172" width="168" height="8" rx="4" fill="#0b1220" fillOpacity="0.12" />
          <rect x="72" y="204" width="88" height="32" rx="16" fill="url(#heroAccent)" />
          <rect x="172" y="204" width="72" height="32" rx="16" fill="#0f766e" fillOpacity="0.12" />

          <rect x="72" y="260" width="70" height="28" rx="8" fill="#0f766e" fillOpacity="0.12" />
          <rect x="152" y="260" width="70" height="28" rx="8" fill="#0f766e" fillOpacity="0.12" />
          <rect x="232" y="260" width="70" height="28" rx="8" fill="#0f766e" fillOpacity="0.12" />
        </motion.g>

        {/* Phone */}
        <motion.g
          initial={reduce ? false : { y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <rect x="360" y="150" width="140" height="260" rx="28" fill="#0b1220" />
          <rect x="368" y="166" width="124" height="228" rx="20" fill="#f7fafc" />
          <rect x="404" y="174" width="52" height="6" rx="3" fill="#0b1220" fillOpacity="0.15" />
          <rect x="384" y="198" width="92" height="10" rx="5" fill="#0b1220" fillOpacity="0.55" />
          <rect x="384" y="218" width="70" height="6" rx="3" fill="#0b1220" fillOpacity="0.2" />
          <rect x="384" y="246" width="92" height="48" rx="12" fill="url(#heroAccent)" opacity="0.9" />
          <rect x="384" y="308" width="92" height="24" rx="8" fill="#0f766e" fillOpacity="0.12" />
          <rect x="384" y="340" width="92" height="24" rx="8" fill="#0f766e" fillOpacity="0.12" />
        </motion.g>

        {/* Floating code chip */}
        <motion.g
          initial={reduce ? false : { scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <rect x="300" y="48" width="150" height="56" rx="14" fill="#0b1220" />
          <text x="320" y="72" fill="#14b8a6" fontSize="13" fontFamily="ui-monospace, monospace">
            {"<Next.js />"}
          </text>
          <text x="320" y="90" fill="#f7fafc" fontSize="11" fontFamily="ui-monospace, monospace" opacity="0.7">
            React · TypeScript
          </text>
        </motion.g>

        {/* Orbit dots */}
        <motion.circle
          cx="120"
          cy="56"
          r="8"
          fill="#14b8a6"
          animate={reduce ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="500"
          cy="250"
          r="6"
          fill="#d6c4a8"
          animate={reduce ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </svg>
    </div>
  );
}
