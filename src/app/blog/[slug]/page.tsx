import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { blogPosts, getPost } from "@/data/blog";
import { site } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [site.name],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: site.name,
      url: "https://nutsajulakidze.dev",
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="relative z-10 flex-1 pt-24">
        <article className="section-pad pb-20 pt-10 sm:pb-28 sm:pt-16">
          <div className="container-shell max-w-3xl">
            <FadeIn>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink"
              >
                <ArrowLeft size={14} /> All articles
              </Link>
              <p className="mt-8 text-xs font-medium uppercase tracking-wider text-ink-muted">
                {post.date} · {post.readingTime}
              </p>
              <h1 className="display mt-3 text-4xl font-bold leading-tight text-ink sm:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg text-ink-muted">{post.description}</p>
            </FadeIn>

            <FadeIn delay={0.08} className="mt-10 space-y-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </FadeIn>

            <FadeIn delay={0.12} className="mt-12 pt-8">
              <p className="text-sm text-ink-muted">Topics</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-md bg-bg-elevated px-2.5 py-1 text-xs font-medium text-ink-muted"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-ink-muted">
                Need help shipping something similar?{" "}
                <a href="/#contact" className="font-semibold text-accent link-underline">
                  Get in touch
                </a>
                .
              </p>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
