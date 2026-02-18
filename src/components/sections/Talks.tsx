"use client";

import { useState } from "react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";
import { Play } from "lucide-react";

const TALKS = [
  {
    title: "GAIA LIVE 001: ETHDenver Main Regen Stage",
    event: "ETHDenver, Feb 27 2025",
    description:
      "Presenting the architecture of agentic intelligence for ecological verification — from satellite imagery to on-chain ecocredits.",
    videoId: "7KmiDvHXcQA",
  },
  {
    title: "GAIA LIVE 002: GAIA AI @ the UN Biodiversity Council",
    event: "United Nations, May 5 2025",
    description:
      "How intelligent systems can make environmental data legible, actionable, and economically viable at planetary scale.",
    videoId: "l39u1BIqnN4",
  },
  {
    title: "GAIA LIVE 003: GAIA CEO Samu @ the UN GLOCHA Summit",
    event: "UN Emerging Technologies Summit, Sep 18 2025",
    description:
      "The convergence of AI and ecological blockchain infrastructure for the regenerative economy.",
    videoId: "etqUCny5tCk",
  },
  {
    title: "GAIA POD 001: Interview with Ayowecca Uganda",
    event: "GAIA POD, 2025",
    description:
      "Exploring regenerative practices and community-led conservation in East Africa.",
    videoId: "b7Ikyq6a1os",
  },
];

function VideoEmbed({ talk }: { talk: (typeof TALKS)[number] }) {
  const [loaded, setLoaded] = useState(false);
  const thumbUrl = `https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`;

  if (!loaded) {
    return (
      <button
        onClick={() => setLoaded(true)}
        className="relative aspect-video bg-background w-full group/play cursor-pointer"
        aria-label={`Play ${talk.title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={thumbUrl}
          alt={talk.title}
          className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover/play:opacity-90 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-green/90 flex items-center justify-center group-hover/play:bg-green group-hover/play:scale-110 transition-all shadow-[0_0_30px_rgba(0,232,123,0.3)]">
            <Play size={22} className="text-background ml-1" fill="currentColor" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="relative aspect-video bg-background">
      <iframe
        src={`https://www.youtube.com/embed/${talk.videoId}?autoplay=1`}
        title={talk.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

export function Talks() {
  return (
    <section id="talks" className="relative py-32">
      {/* Forest canopy background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(/forest-canopy.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "slow-pan 45s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green/40" />
              <span className="text-sm text-muted">Talks & Media</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Sharing the <span className="text-gradient">vision</span>
            </h2>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid md:grid-cols-2 gap-6"
          staggerDelay={0.15}
        >
          {TALKS.map((talk) => (
            <StaggerItem key={talk.videoId}>
              <div className="rounded-2xl border border-border bg-surface/80 backdrop-blur-sm overflow-hidden h-full flex flex-col">
                <VideoEmbed talk={talk} />
                {/* Info */}
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-[11px] text-green/50 font-mono tracking-wider uppercase">
                    {talk.event}
                  </span>
                  <h3 className="text-[14px] font-semibold mt-2 mb-2">
                    {talk.title}
                  </h3>
                  <p className="text-[12px] text-muted leading-relaxed flex-1">
                    {talk.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
