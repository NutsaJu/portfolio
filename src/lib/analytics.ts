import posthog from "posthog-js";

export const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
export const POSTHOG_HOST =
  process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://eu.i.posthog.com";

let initialized = false;

export function isAnalyticsEnabled() {
  return Boolean(POSTHOG_KEY);
}

export function initAnalytics() {
  if (!POSTHOG_KEY || typeof window === "undefined" || initialized) return;

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    person_profiles: "identified_only",
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    persistence: "localStorage+cookie",
  });
  initialized = true;
}

export function trackPageview(url?: string) {
  if (!isAnalyticsEnabled()) return;
  posthog.capture("$pageview", url ? { $current_url: url } : undefined);
}

export function track(event: string, properties?: Record<string, string | number | boolean | undefined>) {
  if (!isAnalyticsEnabled()) return;
  posthog.capture(event, properties);
}

export function trackContactCopy(type: "email" | "phone") {
  track("contact_copy", { type });
}

export function trackContactClick(type: "email" | "phone" | "linkedin" | "github") {
  track("contact_click", { type });
}

export function trackOutbound(url: string, label: string) {
  track("outbound_click", { url, label });
}

export function trackNav(label: string, href: string) {
  track("nav_click", { label, href });
}

export function trackCta(id: string) {
  track("cta_click", { id });
}

export function trackSectionView(section: string) {
  track("section_view", { section });
}

export function trackBlogOpen(slug: string, title: string) {
  track("blog_open", { slug, title });
}

export function trackBlogView(slug: string, title: string) {
  track("blog_view", { slug, title });
}
