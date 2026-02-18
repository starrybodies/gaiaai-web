"use client";

import { SOCIAL_LINKS } from "@/lib/constants";
import { ScrollReveal } from "../ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";
import { ExternalLink } from "lucide-react";

const ICON_MAP: Record<string, string> = {
  twitter: "X",
  linkedin: "in",
  youtube: "YT",
  facebook: "fb",
  manifold: "MF",
  github: "GH",
  zora: "Z",
};

export function Community() {
  return (
    <section id="community" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green/40" />
              <span className="text-sm text-muted">Community</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Join the <span className="text-gradient">Guild</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted text-[14px] max-w-2xl mx-auto leading-[1.8] mb-4">
              Gaia AI is community-governed through the $GAIA token on Base L2.
              Join the conversation, contribute to proposals, and help direct
              intelligence toward regeneration.
            </p>
          </ScrollReveal>
        </div>

        {/* Zora CTA Banner */}
        <ScrollReveal delay={0.25}>
          <a
            href="https://zora.co/@gaiaai"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl border border-amber/20 bg-gradient-to-r from-amber/[0.06] via-green/[0.04] to-amber/[0.06] p-8 mb-12 max-w-2xl mx-auto text-center transition-all hover:border-amber/40 hover:shadow-[0_0_40px_rgba(240,168,48,0.1)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="text-[10px] text-amber/60 uppercase tracking-[0.3em] font-mono font-bold mb-3">
                Support the Mission
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground/90 mb-2">
                Buy the Gaia Creator Token
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Fuel planetary regeneration. Every token supports Gaia&apos;s mission to make
                environmental intelligence accessible to all.
              </p>
              <span className="inline-flex items-center gap-2 rounded-md bg-amber/15 border border-amber/30 px-5 py-2.5 text-sm font-bold text-amber group-hover:bg-amber/25 group-hover:border-amber/50 transition-all">
                zora.co/@gaiaai
                <span className="text-[13px]">&#8599;</span>
              </span>
            </div>
          </a>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 max-w-5xl mx-auto"
          staggerDelay={0.08}
        >
          {SOCIAL_LINKS.map((link) => (
            <StaggerItem key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:border-green/30 hover:bg-surface-light"
              >
                <span className="w-10 h-10 rounded bg-green/10 border border-green/20 flex items-center justify-center text-green text-[11px] font-mono font-bold group-hover:bg-green/20 transition-colors">
                  {ICON_MAP[link.icon]}
                </span>
                <span className="text-[12px] font-medium">{link.label}</span>
                <ExternalLink
                  size={10}
                  className="text-muted/30 group-hover:text-green/60 transition-colors"
                />
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-[12px] text-muted/60">
              Read more on our{" "}
              <a
                href="https://paragraph.com/@gaiaai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green/60 hover:text-green transition-colors"
              >
                blog
              </a>
              {" · "}
              Explore our{" "}
              <a
                href="https://manifold.gallery/gaiaai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green/60 hover:text-green transition-colors"
              >
                NFT collection on Manifold
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
