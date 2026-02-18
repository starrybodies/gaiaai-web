"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { motion } from "framer-motion";

const DIMENSIONS = [
  { label: "Carbon Sequestered", icon: "C", value: "tCO2e" },
  { label: "Biodiversity Restored", icon: "B", value: "species index" },
  { label: "Water Cycles Healed", icon: "H", value: "watershed health" },
  { label: "Communities Empowered", icon: "S", value: "social resilience" },
  { label: "Soil Regenerated", icon: "R", value: "organic matter %" },
  { label: "Knowledge Commoned", icon: "K", value: "open datasets" },
];

export function PROI() {
  return (
    <section id="proi" className="relative py-32 overflow-hidden">
      {/* Field background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "url(/field-regen.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "slow-pan 50s ease-in-out infinite",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Concept */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green/40" />
                <span className="text-sm text-muted">Core Metric</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Planetary Return
                <br />
                on <span className="text-gradient">Investment</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-[14px] leading-[1.8] mb-6">
                PROI replaces narrow financial ROI with a multi-dimensional
                metric. Every dollar, every action, measured against its
                ecological impact — carbon sequestered, biodiversity restored,
                water cycles healed, communities empowered.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-green/60 text-[13px] leading-[1.8] border-l-2 border-green/20 pl-4">
                &ldquo;What if every transaction made the planet healthier?
                PROI is the metric that makes this question answerable.&rdquo;
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Dimension grid */}
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              {DIMENSIONS.map((dim, i) => (
                <motion.div
                  key={dim.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-border bg-surface/80 backdrop-blur-sm p-4 hover:border-green/20 transition-all group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded bg-green/10 border border-green/20 flex items-center justify-center text-green text-[12px] font-bold font-mono">
                      {dim.icon}
                    </span>
                    <span className="text-[11px] text-muted/50 font-mono uppercase tracking-wider">
                      {dim.value}
                    </span>
                  </div>
                  <span className="text-[13px] font-medium">{dim.label}</span>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
