"use client";

import Link from "next/link";
import { trackBlogOpen } from "@/lib/analytics";

type Props = {
  href: string;
  slug: string;
  title: string;
  className?: string;
  children: React.ReactNode;
};

export function TrackedBlogLink({ href, slug, title, className, children }: Props) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackBlogOpen(slug, title)}
    >
      {children}
    </Link>
  );
}
