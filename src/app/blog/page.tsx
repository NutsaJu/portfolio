import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { blogPosts } from "@/data/blog";
import { ogImage } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog — Next.js, SEO & frontend shipping",
  description:
    "Articles by Nutsa Julakidze on Next.js SEO, Figma-to-code, e-commerce architecture, and React Native releases.",
  keywords: [
    "Next.js blog",
    "frontend SEO",
    "React developer articles",
    "e-commerce architecture",
    "React Native Expo",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Nutsa Julakidze",
    description:
      "Practical notes on Next.js, SEO, design-to-code, and shipping production frontend products.",
    url: "/blog",
    images: [{ ...ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage.url],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 flex-1 pt-24">
        <section className="section-pad pb-20 pt-10 sm:pb-28 sm:pt-16">
          <div className="container-shell">
            <FadeIn className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Blog</p>
              <h1 className="display mt-3 text-4xl font-bold text-ink sm:text-5xl">
                Writing for builders & clients
              </h1>
              <p className="mt-4 text-lg text-ink-muted">
                SEO-minded notes on Next.js, product architecture, and shipping polished interfaces.
              </p>
            </FadeIn>

            <div className="mt-14 space-y-4">
              {blogPosts.map((post, index) => (
                <FadeIn key={post.slug} delay={index * 0.04}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-3 rounded-2xl bg-bg-elevated/60 p-6 transition hover:bg-bg-elevated sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div className="max-w-2xl">
                      <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                        {post.date} · {post.readingTime}
                      </p>
                      <h2 className="display mt-2 text-2xl font-bold text-ink group-hover:text-accent-deep">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-ink-muted">{post.description}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
                      Read <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
