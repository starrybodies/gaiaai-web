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

        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto"
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
