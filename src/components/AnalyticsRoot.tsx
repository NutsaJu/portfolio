"use client";

import { Suspense, useEffect, useRef } from "react";
import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { trackSectionView } from "@/lib/analytics";

const HOME_SECTIONS = [
  "about",
  "services",
  "projects",
  "experience",
  "blog",
  "contact",
] as const;

function SectionObserver() {
  const seen = useRef(new Set<string>());

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const section of HOME_SECTIONS) {
      const el = document.getElementById(section);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting || seen.current.has(section)) return;
          seen.current.add(section);
          trackSectionView(section);
          observer.disconnect();
        },
        { threshold: 0.35 },
      );

      observer.observe(el);
      observers.push(observer);
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return null;
}

export function AnalyticsRoot({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <AnalyticsProvider>
        {children}
        <SectionObserver />
      </AnalyticsProvider>
    </Suspense>
  );
}
