"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  "Rewilding",
  "Ocean Conservation",
  "Regenerative Agriculture",
  "Clean Energy",
  "Climate Action",
  "Indigenous Perspectives",
  "Solarpunk",
  "Regenerative Economics",
];

export function GaianTimes() {
  return (
    <section id="gaian-times" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Description */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green/40" />
                <span className="text-sm text-muted">The Gaian Times</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                The record of a{" "}
                <span className="text-gradient">regenerating world</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-[14px] leading-[1.8] mb-6">
                AI-curated environmental journalism drawn from 90+ sources.
                The Gaian Times surfaces the stories that matter — rewilding
                breakthroughs, policy shifts, indigenous wisdom, and the quiet
                victories of ecological restoration happening every day.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.25}>
              <div className="flex flex-wrap gap-2 mb-8">
                {CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    className="text-xs text-muted/70 border border-border rounded-full px-3 py-1"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href="https://times.gaiaai.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-green/30 px-6 py-3 text-sm text-green transition-all hover:bg-green/10 hover:border-green/50"
              >
                Read The Gaian Times
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </ScrollReveal>
          </div>

          {/* Right: Preview embed */}
          <ScrollReveal delay={0.2}>
            <div className="relative rounded-2xl border border-border overflow-hidden bg-surface">
              {/* Newspaper-style header */}
              <div className="border-b border-border p-6 text-center">
                <div className="text-xs text-muted/50 mb-2 font-mono tracking-wider uppercase">
                  Curated by AI · Powered by open data
                </div>
                <h3 className="text-2xl font-bold tracking-tight">
                  The Gaian Times
                </h3>
                <div className="mt-2 text-xs text-muted/40">
                  The Record of a Regenerating World
                </div>
              </div>
              {/* Simulated content rows */}
              <div className="divide-y divide-border">
                {[
                  {
                    cat: "Rewilding",
                    headline:
                      "Wolf reintroduction reshapes Yellowstone river systems for the first time in decades",
                  },
                  {
                    cat: "Clean Energy",
                    headline:
                      "Perovskite solar cells reach 33% efficiency in new Stanford breakthrough",
                  },
                  {
                    cat: "Ocean",
                    headline:
                      "Kelp forest restoration off Tasmania shows 400% biomass increase in 18 months",
                  },
                ].map((item) => (
                  <div key={item.headline} className="p-5">
                    <span className="text-[10px] text-green/60 uppercase tracking-wider font-mono">
                      {item.cat}
                    </span>
                    <p className="text-sm text-foreground/80 mt-1 leading-relaxed">
                      {item.headline}
                    </p>
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
