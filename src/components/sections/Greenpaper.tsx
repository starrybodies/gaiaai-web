"use client";

import Image from "next/image";
import { GREENPAPER_CONCEPTS } from "@/lib/constants";
import { ScrollReveal } from "../ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";
import { ArrowRight } from "lucide-react";

const COLOR_BORDERS: Record<string, string> = {
  green: "border-green/20",
  cyan: "border-cyan/20",
  amber: "border-amber/20",
};

const COLOR_QUOTE: Record<string, string> = {
  green: "border-green/40",
  cyan: "border-cyan/40",
  amber: "border-amber/40",
};

const COLOR_TEXT: Record<string, string> = {
  green: "text-green/80",
  cyan: "text-cyan/80",
  amber: "text-amber/80",
};

export function Greenpaper() {
  return (
    <section id="greenpaper" className="relative py-32 overflow-hidden">
      {/* Permaculture background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url(/permaculture.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "slow-pan 55s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green/40" />
              <span className="text-sm text-muted">The Greenpaper</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              A vision for{" "}
              <span className="text-gradient">planetary intelligence</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Concept cards */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          staggerDelay={0.15}
        >
          {GREENPAPER_CONCEPTS.map((concept) => (
            <StaggerItem key={concept.title}>
              <div className={`rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-8 h-full flex flex-col transition-all hover:${COLOR_BORDERS[concept.color]}`}>
                <span className="w-10 h-10 rounded bg-green/10 border border-green/20 flex items-center justify-center text-green text-[11px] font-mono font-bold mb-4">{concept.icon}</span>
                <h3 className="text-[15px] font-bold mb-3">{concept.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  {concept.description}
                </p>
                <blockquote className={`border-l-2 ${COLOR_QUOTE[concept.color]} pl-4 text-sm italic ${COLOR_TEXT[concept.color]}`}>
                  &ldquo;{concept.quote}&rdquo;
                </blockquote>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pull quote with visual */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 relative">
            {/* Decorative background image */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-10 pointer-events-none">
              <Image
                src="/gaia-coded.gif"
                alt=""
                width={256}
                height={256}
                className="rounded-full object-cover"
                unoptimized
              />
            </div>
            <div className="relative text-center">
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                &ldquo;The time has come to weave together the threads of human
                wisdom traditions, scientific knowledge, and artificial
                intelligence into a new planetary nervous system.&rdquo;
              </blockquote>
              <div className="mt-4 text-sm text-muted">— Gaia AI Greenpaper</div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.4}>
          <div className="mt-10 text-center">
            <a
              href="https://github.com/gaiaaiagent/greenpaper"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-green/30 px-6 py-3 text-sm text-green transition-all hover:bg-green/10 hover:border-green/50"
            >
              Read the Full Greenpaper
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
