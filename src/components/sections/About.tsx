"use client";

import { Satellite, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";

const CAPABILITIES = [
  {
    icon: Satellite,
    title: "AI-Powered Environmental Monitoring",
    description:
      "Satellite analysis, NLP-driven document review, and multi-modal data synthesis for ecological assessment.",
    color: "text-green",
  },
  {
    icon: ShieldCheck,
    title: "Blockchain-Verified Credit Systems",
    description:
      "Seven-stage registry review pipeline backed by Regen Ledger on Cosmos SDK for transparent ecocredit issuance.",
    color: "text-cyan",
  },
  {
    icon: Users,
    title: "Community-Governed Regenerative Finance",
    description:
      "Open governance through the $GAIA token, directing resources to maximally regenerative projects.",
    color: "text-amber",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Ocean background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url(/ocean.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "slow-pan 50s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green/40" />
                <span className="text-sm text-muted">What is Gaia AI?</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                The intelligence layer for{" "}
                <span className="text-gradient">Earth&apos;s regenerative economy</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-[14px] leading-[1.8] mb-6">
                Gaia AI is a decentralized intelligence network that fuses
                agentic AI with ecological blockchain infrastructure. Born from
                a partnership with Regen Network, we operate at the intersection
                of environmental monitoring, verified ecological credit systems,
                and community-governed regenerative finance.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-muted/70 text-[13px] leading-[1.8]">
                We work with international institutions and grassroots communities alike
                — building the intelligence layer that makes planetary healing
                economically viable.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Capability cards */}
          <StaggerContainer className="space-y-4" staggerDelay={0.15}>
            {CAPABILITIES.map((cap) => (
              <StaggerItem key={cap.title}>
                <div className="group rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-6 transition-all hover:border-green/20 hover:bg-surface-light/80">
                  <cap.icon
                    size={24}
                    className={`${cap.color} mb-3 transition-transform group-hover:scale-110`}
                  />
                  <h3 className="text-[14px] font-semibold mb-2">{cap.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Decorative satellite visual */}
        <ScrollReveal delay={0.4}>
          <div className="mt-20 relative rounded-2xl border border-green/10 bg-surface/80 backdrop-blur-sm overflow-hidden h-56">
            <div className="absolute inset-0 opacity-15">
              <Image
                src="/gaia-coded.gif"
                alt=""
                fill
                className="object-cover"
                style={{ filter: "hue-rotate(-10deg)" }}
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/40" />
            <div className="absolute inset-0 flex items-center px-8">
              <div className="flex items-center gap-6 w-full">
                <Image
                  src="/gaia-logo.png"
                  alt="Gaia AI"
                  width={64}
                  height={64}
                  className="brightness-90 opacity-60"
                />
                <div>
                  <div className="font-mono text-xs text-green mb-1">
                    SATELLITE ANALYSIS ACTIVE
                  </div>
                  <div className="font-mono text-[10px] text-muted mb-3">
                    NDVI: 0.82 | COVERAGE: 94.2% | CONFIDENCE: HIGH
                  </div>
                  <div className="flex gap-4 font-mono text-[10px] text-muted/60">
                    <span>BAND: NIR+RED</span>
                    <span>RES: 10m</span>
                    <span>SOURCE: SENTINEL-2</span>
                    <span>UPDATED: 2h ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="absolute left-0 right-0 h-px bg-green/40"
              style={{ animation: "scan-line 3s linear infinite" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
