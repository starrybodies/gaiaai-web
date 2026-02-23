"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { ArrowRight, BookOpen } from "lucide-react";

const TOPICS = [
  "Regenerative Agriculture",
  "Blue Carbon",
  "Biodiversity Credits",
  "MRV Systems",
  "Ecological AI",
  "Carbon Markets",
  "Rewilding",
  "Symbiocene",
];

export function EOR() {
  return (
    <section id="eor" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Description */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green/40" />
                <span className="text-sm text-muted">Knowledge Base</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                The Encyclopedia of{" "}
                <span className="text-gradient">Regeneration</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-[14px] leading-[1.8] mb-6">
                A living knowledge base mapping the concepts, technologies, and
                practices driving planetary regeneration. From carbon
                methodologies to indigenous land stewardship, the EOR makes the
                regenerative movement legible and interconnected.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap gap-2 mb-8">
                {TOPICS.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs text-muted/70 border border-border rounded-full px-3 py-1"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href="https://eor.gaiaai.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-green/30 px-6 py-3 text-sm text-green transition-all hover:bg-green/10 hover:border-green/50"
              >
                Explore the EOR
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Visual preview */}
          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl border border-border overflow-hidden bg-surface">
              {/* Header */}
              <div className="border-b border-border p-6 text-center">
                <div className="text-xs text-muted/50 mb-2 font-mono tracking-wider uppercase">
                  eor.gaiaai.xyz
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  Encyclopedia of Regeneration
                </h3>
                <div className="mt-2 text-xs text-muted/40">
                  The knowledge layer of the regenerative economy
                </div>
              </div>
              {/* Simulated entries */}
              <div className="divide-y divide-border">
                {[
                  {
                    icon: "MRV",
                    title: "Monitoring, Reporting & Verification",
                    desc: "The backbone of credible ecological claims — how satellite data, AI, and on-ground sensors create verifiable environmental impact.",
                  },
                  {
                    icon: "BCR",
                    title: "Blue Carbon Credits",
                    desc: "Coastal ecosystems — mangroves, seagrasses, salt marshes — sequestering carbon at rates up to 10x terrestrial forests.",
                  },
                  {
                    icon: "RAG",
                    title: "Regenerative Agriculture",
                    desc: "Farming practices that restore soil health, increase biodiversity, and sequester atmospheric carbon into living systems.",
                  },
                ].map((entry) => (
                  <div key={entry.title} className="p-5 flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-green/10 border border-green/20 flex items-center justify-center">
                      <BookOpen size={16} className="text-green/60" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground/90">
                        {entry.title}
                      </p>
                      <p className="text-xs text-muted/60 mt-1 leading-relaxed">
                        {entry.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Fade overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent pointer-events-none" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
