"use client";

import { Brain, ShieldCheck, Landmark } from "lucide-react";
import { HOW_IT_WORKS_LAYERS } from "@/lib/constants";
import { ScrollReveal } from "../ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const LAYER_ICONS = [Brain, ShieldCheck, Landmark];
const LAYER_COLORS = ["text-green", "text-cyan", "text-amber"];
const LAYER_BORDER_COLORS = ["border-green/20", "border-cyan/20", "border-amber/20"];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green/40" />
              <span className="text-sm text-muted">How It Works</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Three layers of{" "}
              <span className="text-gradient">planetary trust</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-[1.6]">
              From raw satellite data to on-chain settlement, every step is
              transparent, verifiable, and designed to serve ecological truth.
            </p>
          </ScrollReveal>
        </div>

        {/* Layers stack */}
        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-green via-cyan to-amber hidden md:block" />

          <div className="space-y-8">
            {HOW_IT_WORKS_LAYERS.map((layer, i) => {
              const Icon = LAYER_ICONS[i];
              return (
                <ScrollReveal key={layer.title} delay={i * 0.15}>
                  <div className="relative flex gap-6 md:gap-8">
                    {/* Dot on the line */}
                    <div className="hidden md:flex flex-col items-center">
                      <div className={`relative z-10 h-4 w-4 rounded-full bg-background border-2 ${LAYER_BORDER_COLORS[i]} mt-6`} />
                    </div>

                    {/* Card */}
                    <div className={`flex-1 rounded-2xl border border-border bg-surface p-6 md:p-8 transition-all hover:${LAYER_BORDER_COLORS[i]}`}>
                      <div className="flex items-center gap-3 mb-3">
                        <Icon size={20} className={LAYER_COLORS[i]} />
                        <span className="text-xs text-muted">
                          {layer.subtitle}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">
                        {layer.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {layer.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {layer.items.map((item) => (
                          <span
                            key={item}
                            className="inline-flex items-center rounded-full border border-border bg-surface-light px-3 py-1 text-xs text-muted"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* CTA below layers */}
          <ScrollReveal delay={0.5}>
            <div className="mt-8 ml-0 md:ml-14">
              <a
                href="#greenpaper"
                className="inline-flex items-center gap-2 text-sm text-green hover:underline"
              >
                Learn more in the Greenpaper <ArrowRight size={14} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
