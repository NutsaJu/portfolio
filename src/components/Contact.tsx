"use client";

import { useState } from "react";
import { Check, Code2, Copy, Link2, Mail, Phone } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { site } from "@/data/site";
import { trackContactClick, trackContactCopy } from "@/lib/analytics";

function CopyButton({
  value,
  label,
  type,
}: {
  value: string;
  label: string;
  type: "email" | "phone";
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      trackContactCopy(type);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // ignore clipboard errors
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-bg text-ink-muted transition hover:bg-accent hover:text-white"
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
      title={copied ? "Copied" : `Copy ${label}`}
    >
      {copied ? <Check size={15} /> : <Copy size={15} />}
    </button>
  );
}

export function Contact() {
  const phoneHref = site.phone.replace(/\s/g, "");

  return (
    <section id="contact" className="section-pad scroll-mt-24 py-20 sm:py-28">
      <div className="container-shell">
        <FadeIn className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contact</p>
          <h2 className="display mt-3 text-3xl font-bold text-ink sm:text-5xl">
            Let&apos;s build your next product
          </h2>
          <p className="mt-5 text-lg text-ink-muted">
            Tell me about your landing page, store, portal, or mobile app. I work from Figma or create
            the design myself — and I own the frontend through launch.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl bg-bg-elevated/80 p-5">
            <a
              href={`mailto:${site.email}`}
              className="group flex min-w-0 flex-1 items-center gap-4"
              onClick={() => trackContactClick("email")}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                <Mail size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-ink-muted">Email</span>
                <span className="block truncate font-semibold text-ink">{site.email}</span>
              </span>
            </a>
            <CopyButton value={site.email} label="email" type="email" />
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-bg-elevated/80 p-5">
            <a
              href={`tel:${phoneHref}`}
              className="group flex min-w-0 flex-1 items-center gap-4"
              onClick={() => trackContactClick("phone")}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
                <Phone size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm text-ink-muted">Phone</span>
                <span className="block truncate font-semibold text-ink">{site.phone}</span>
              </span>
            </a>
            <CopyButton value={site.phone} label="phone" type="phone" />
          </div>

          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl bg-bg-elevated/80 p-5 transition hover:bg-bg-elevated"
            onClick={() => trackContactClick("linkedin")}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
              <Link2 size={18} />
            </span>
            <span>
              <span className="block text-sm text-ink-muted">LinkedIn</span>
              <span className="font-semibold text-ink">nutsa-julakidze</span>
            </span>
          </a>

          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl bg-bg-elevated/80 p-5 transition hover:bg-bg-elevated"
            onClick={() => trackContactClick("github")}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-white">
              <Code2 size={18} />
            </span>
            <span>
              <span className="block text-sm text-ink-muted">GitHub</span>
              <span className="font-semibold text-ink">NutsaJu</span>
            </span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
