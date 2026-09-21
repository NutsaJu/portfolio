"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { initAnalytics, trackPageview } from "@/lib/analytics";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    const query = searchParams?.toString();
    const url = query ? `${window.location.origin}${pathname}?${query}` : `${window.location.origin}${pathname}`;
    trackPageview(url);
  }, [pathname, searchParams]);

  return children;
}
