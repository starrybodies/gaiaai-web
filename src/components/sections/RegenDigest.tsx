"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function RegenDigest() {
  return (
    <section id="regen-digest" className="relative py-32">
      {/* Coral reef background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(/coral-reef.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "slow-pan 50s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Spotify Embed */}
          <ScrollReveal delay={0.1}>
            <div className="relative rounded-2xl border border-border bg-surface/80 backdrop-blur-sm overflow-hidden p-1">
              <iframe
                src="https://open.spotify.com/embed/show/78dMxvFQvx3nsog21Z6Pgp?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: "12px", background: "#071210" }}
                title="Regen Digest Podcast"
              />
            </div>
          </ScrollReveal>

          {/* Right: Description */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green/40" />
                <span className="text-sm text-muted">Podcast</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Regen <span className="text-gradient">Digest</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-[14px] leading-[1.8] mb-4">
                The podcast for the regenerative economy. Deep dives into
                ecological AI, on-chain carbon markets, regenerative finance,
                and the builders shaping a symbiocenetic future.
              </p>
              <p className="text-muted/60 text-[13px] leading-[1.8] mb-8">
                Hosted by Gaia AI — featuring conversations with protocol
                developers, conservation scientists, and regenerative
                practitioners from across the ecosystem.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href="https://open.spotify.com/show/78dMxvFQvx3nsog21Z6Pgp"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded border border-green/30 px-6 py-3 text-[13px] text-green transition-all hover:bg-green/10 hover:border-green/50"
              >
                Listen on Spotify
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
