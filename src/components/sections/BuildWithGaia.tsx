"use client";

import { PARTNER_TYPES } from "@/lib/constants";
import { ScrollReveal } from "../ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";
import { ArrowRight } from "lucide-react";

export function BuildWithGaia() {
  return (
    <section id="build-with-gaia" className="relative py-32">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "url(/hands-plant.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "slow-pan 45s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green/40" />
                <span className="text-sm text-muted">Build With Gaia</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Let&apos;s build the{" "}
                <span className="text-gradient">regenerative economy</span>{" "}
                together
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-[14px] leading-[1.8] mb-8">
                We partner with carbon registries, conservation foundations, MRV
                providers, and climate funds to deploy AI-powered environmental
                monitoring and verification at scale.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href="mailto:hello@gaiaai.xyz"
                className="group inline-flex items-center gap-2 rounded-md border border-green/30 px-6 py-3 text-sm text-green transition-all hover:bg-green/10 hover:border-green/50"
              >
                Get in touch
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Partner types */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            {PARTNER_TYPES.map((partner) => (
              <StaggerItem key={partner.type}>
                <div className="group flex items-center gap-5 rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-5 transition-all hover:border-green/20 hover:bg-surface-light">
                  <span className="w-10 h-10 shrink-0 rounded bg-green/10 border border-green/20 flex items-center justify-center text-green text-[11px] font-mono font-bold group-hover:bg-green/20 transition-colors">{partner.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold mb-1">
                      {partner.type}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
