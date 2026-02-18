"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#" onClick={(e) => smoothScroll(e, "#")} className="flex items-center gap-2.5">
          <Image
            src="/gaia-logo.png"
            alt="Gaia AI"
            width={36}
            height={36}
            className="brightness-90"
          />
          <span className="text-xl font-bold tracking-tight text-green">
            GAIA AI
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#talk-to-gaia"
          onClick={(e) => smoothScroll(e, "#talk-to-gaia")}
          className="hidden md:inline-flex items-center rounded-md border border-green/30 px-5 py-2 text-sm text-green transition-all hover:bg-green/10 hover:border-green/50"
        >
          Talk to Gaia
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-xl z-40">
          <div className="flex flex-col gap-1 p-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { smoothScroll(e, link.href); setMobileOpen(false); }}
                className="text-lg text-muted hover:text-foreground py-3 border-b border-border transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#talk-to-gaia"
              onClick={(e) => { smoothScroll(e, "#talk-to-gaia"); setMobileOpen(false); }}
              className="mt-6 inline-flex items-center justify-center rounded-md border border-green/30 px-5 py-3 text-sm text-green"
            >
              Talk to Gaia
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
