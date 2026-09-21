"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { TrackedBlogLink } from "@/components/TrackedBlogLink";
import { blogPosts } from "@/data/blog";
import { trackNav } from "@/lib/analytics";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="section-pad scroll-mt-24 py-20 sm:py-28">
      <div className="container-shell">
        <FadeIn className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Blog</p>
            <h2 className="display mt-3 text-3xl font-bold text-ink sm:text-4xl">
              Notes on Next.js, SEO & shipping
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Practical articles to help clients and fellow developers ship better frontend products.
            </p>
          </div>
          <Link
            href="/blog"
            onClick={() => trackNav("All articles", "/blog")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent link-underline"
          >
            All articles <ArrowUpRight size={14} />
          </Link>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.06}>
              <TrackedBlogLink
                href={`/blog/${post.slug}`}
                slug={post.slug}
                title={post.title}
                className="group flex h-full flex-col rounded-2xl bg-bg-elevated/70 p-6 transition hover:bg-bg-elevated"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                  {post.date} · {post.readingTime}
                </p>
                <h3 className="display mt-3 text-xl font-bold text-ink transition group-hover:text-accent-deep">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                  {post.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                  Read{" "}
                  <ArrowUpRight
                    size={14}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </TrackedBlogLink>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
