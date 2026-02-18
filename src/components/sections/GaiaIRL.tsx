"use client";

import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";
import { ArrowRight } from "lucide-react";

const GRANTS = [
  {
    title: "AYOWECCA Uganda — Regenerative Agriculture",
    amount: "$777",
    round: "GAIA IRL II",
    date: "Feb 2025",
    image: "/field-regen.jpg",
    description:
      "Selected from 14 proposals by Gaia's agentic board. AYOWECCA runs a Two Million Tree Planting Program, restoring wetlands, planting fruit trees in 64 schools and 40 health centers, and raising 50,000 seedlings. Direct land remediation with cascading community impact.",
    link: "https://paragraph.com/@gaiaai/gaiairlii",
  },
  {
    title: "Regen IRL — Global Grants Competition",
    amount: "$888",
    round: "Regen IRL",
    date: "Aug 2025",
    image: "/hands-plant.jpg",
    description:
      "Joint initiative with Regen Network awarding $888 in $REGEN to the project with the highest Planetary Return on Investment. Winners receive AI toolkit support: remote sensing analysis, best-practice insights, and an outcomes reporting assistant.",
    link: "https://paragraph.com/@gaiaai/regenai",
  },
  {
    title: "GAIA IRL I — First Micro-Grant",
    amount: "$777",
    round: "GAIA IRL I",
    date: "Jan 2025",
    image: "/ocean.jpg",
    description:
      "The inaugural Gaia IRL grant — $777 distributed to the community member assessed as driving the highest Planetary Return on Investment. Kickstarted the on-the-ground regenerative grants program.",
    link: "https://paragraph.com/@gaiaai",
  },
];

export function GaiaIRL() {
  return (
    <section id="gaia-irl" className="relative py-32 overflow-hidden">
      {/* Hands-plant background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(/hands-plant.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green/40" />
              <span className="text-sm text-muted">Gaia IRL</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Micro-grants for{" "}
              <span className="text-gradient">maximum PROI</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted text-[14px] max-w-2xl mx-auto leading-[1.8]">
              Gaia IRL distributes micro-grants to on-the-ground regenerative
              projects. Each proposal is assessed by Gaia&apos;s agentic board for
              Planetary Return on Investment — directing resources to where they
              create the most ecological impact per dollar.
            </p>
          </ScrollReveal>
        </div>

        {/* Grant cards with images */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {GRANTS.map((grant) => (
            <StaggerItem key={grant.title}>
              <a
                href={grant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-border bg-surface/80 backdrop-blur-sm overflow-hidden h-full flex flex-col transition-all hover:border-green/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={grant.image}
                    alt={grant.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
                  {/* Amount badge */}
                  <div className="absolute bottom-3 left-3 bg-green/10 border border-green/30 rounded px-2 py-1">
                    <span className="text-green text-[13px] font-mono font-bold">
                      {grant.amount}
                    </span>
                  </div>
                  {/* Round badge */}
                  <div className="absolute bottom-3 right-3 bg-surface/80 border border-border rounded px-2 py-1">
                    <span className="text-muted text-[11px] font-mono">
                      {grant.round}
                    </span>
                  </div>
                </div>
                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-[11px] text-green/50 font-mono tracking-wider uppercase mb-2">
                    {grant.date}
                  </span>
                  <h3 className="text-[14px] font-semibold mb-2">
                    {grant.title}
                  </h3>
                  <p className="text-[12px] text-muted leading-relaxed flex-1">
                    {grant.description}
                  </p>
                  <span className="mt-3 text-[11px] text-green/40 group-hover:text-green/70 transition-colors flex items-center gap-1">
                    Read on Paragraph <ArrowRight size={10} />
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats bar */}
        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { label: "Grant Rounds", value: "3" },
              { label: "Total Funded", value: "$2,442" },
              { label: "Proposals Assessed", value: "14+" },
              { label: "PROI Metric", value: "Active" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-green text-xl font-mono font-bold">
                  {stat.value}
                </div>
                <div className="text-[11px] text-muted/50 mt-1 font-mono uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-8 text-center">
            <a
              href="https://x.com/gaiaaiagent"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[13px] text-green/60 hover:text-green transition-colors"
            >
              Follow @gaiaaiagent for grant announcements
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
