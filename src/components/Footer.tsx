import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-pad bg-bg-elevated/40 py-8">
      <div className="container-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-muted">
          © {year} {site.name}. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex gap-5 text-sm font-medium text-ink-muted">
          <Link href="/blog" className="hover:text-ink">
            Blog
          </Link>
          <a href={site.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-ink">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
