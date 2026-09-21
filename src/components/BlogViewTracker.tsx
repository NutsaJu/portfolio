"use client";

import { useEffect } from "react";
import { trackBlogView } from "@/lib/analytics";

export function BlogViewTracker({ slug, title }: { slug: string; title: string }) {
  useEffect(() => {
    trackBlogView(slug, title);
  }, [slug, title]);

  return null;
}
