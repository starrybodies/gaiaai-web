"use client";

import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function SymbioceneticFutures() {
  return (
    <section id="symbiocenetic-futures" className="relative py-32 overflow-hidden">
      {/* Gaia coded gif as background */}
      <div className="absolute inset-0 opacity-[0.06]">
        <Image
          src="/gaia-coded.gif"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/92 to-background" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green/40" />
                <span className="text-sm text-muted">Vision Lab</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Symbiocenetic{" "}
                <span className="text-gradient">Futures</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-[14px] leading-[1.8] mb-6">
                Ecohyperstition in practice — vividly envisioned futures of thriving
                ecosystems that work to make themselves real through collective belief,
                research, and action. When communities embrace compelling blueprints
                of regenerative futures, they mobilize resources, shape policy, and
                influence cultural values.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-green/60 text-[13px] leading-[1.8] border-l-2 border-green/20 pl-4 mb-8">
                &ldquo;The future can invent the present — galvanizing global
                communities to enact the Symbiocene in tangible, transformative
                ways.&rdquo;
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <a
                href="https://futures.gaiaai.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded border border-green/30 px-6 py-3 text-[13px] text-green transition-all hover:bg-green/10 hover:border-green/50"
              >
                Explore Symbiocenetic Futures
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Visual */}
          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl border border-green/10 overflow-hidden">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/gaia-coded.gif"
                  alt="Symbiocenetic Futures"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[11px] text-green/40 font-mono uppercase tracking-wider mb-2">
                    futures.gaiaai.xyz
                  </div>
                  <div className="text-[14px] text-foreground/80 leading-relaxed">
                    AI-generated visions of the world we are building —
                    the Symbiocene made visible.
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
