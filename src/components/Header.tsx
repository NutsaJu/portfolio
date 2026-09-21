"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { trackNav } from "@/lib/analytics";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Scroll to hash after navigating from another route (e.g. /blog → /#contact)
  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, [pathname]);

  const close = () => setOpen(false);

  function handleSectionClick(href: string, label: string) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      trackNav(label, href);
      close();
      if (!href.startsWith("/#")) return;
      const id = href.slice(2);
      if (pathname === "/") {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", href);
      }
    };
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled || open ? "bg-bg-elevated/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="section-pad container-shell flex h-16 items-center justify-between">
        <Link
          href="/"
          className="display text-lg font-bold tracking-tight text-ink sm:text-xl"
          onClick={() => {
            trackNav("Home", "/");
            close();
          }}
        >
          {site.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <a
                key={link.href}
                href={link.href}
                onClick={handleSectionClick(link.href, link.label)}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => trackNav(link.label, link.href)}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-bg-elevated/80 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`overflow-hidden border-t border-transparent md:hidden ${
          open ? "max-h-[28rem] border-line/40" : "max-h-0"
        }`}
        style={{ transition: "max-height 200ms ease-out" }}
      >
        <nav className="bg-bg-elevated px-5 py-5">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) =>
              link.href.startsWith("/#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleSectionClick(link.href, link.label)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-bg"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-bg"
                  onClick={() => {
                    trackNav(link.label, link.href);
                    close();
                  }}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
