"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { EARLY_ACCESS_HREF, OVERSHOOT_URL } from "@/lib/constants";
import { Button } from "../ui/Button";
import { useTheme } from "../ThemeProvider";
import { GlobePlaceholder } from "../three/GlobePlaceholder";
import type { GlobeColors } from "../three/Globe";

const Globe = dynamic(
  () => import("../three/Globe").then((m) => ({ default: m.Globe })),
  { ssr: false, loading: () => <GlobePlaceholder /> }
);

const EASE = [0.16, 1, 0.3, 1] as const;

const READOUTS = [
  { label: "Status", value: "Private development" },
  { label: "Live now", value: "Overshoot atlas" },
  { label: "Partner", value: "Regen Network" },
  { label: "Presented at", value: "United Nations" },
];

// Mirrors --color-green per theme in globals.css; WebGL can't read CSS variables.
const GLOBE_COLORS: Record<"dark" | "light", GlobeColors> = {
  dark: { land: "#7FD9A8", accent: "#00E87B", core: "#04110B" },
  light: { land: "#2F6B4A", accent: "#007A42", core: "#E4ECE6" },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();

  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Forest canopy, pushed far back behind the instrument */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-60 motion-safe:animate-[slow-pan_40s_ease-in-out_infinite]"
        style={{ backgroundImage: "url(/jungle.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/80 to-background" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,var(--color-green-dim),transparent_55%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1200px] flex-1 items-center gap-8 px-6 pt-28 pb-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="min-w-0">
          <motion.h1
            {...rise(0.1)}
            className="text-glow text-[clamp(1.9rem,4.4vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.02em]"
          >
            Superintelligence for the{" "}
            <span className="text-gradient whitespace-nowrap">living world</span>
          </motion.h1>

          <motion.p
            {...rise(0.3)}
            className="mt-8 max-w-[44ch] text-[19px] leading-[1.6] text-foreground/80"
          >
            Gaia AI is a research lab building the ecological
            superintelligence layer: one system that reads satellite, trade
            and registry data, reasons across it, and shows the evidence
            behind every answer.
          </motion.p>

          <motion.div {...rise(0.45)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href={EARLY_ACCESS_HREF} variant="primary">
              Request early access
            </Button>
            <Button href={OVERSHOOT_URL} external>
              Explore Overshoot
            </Button>
            <Button href="#talk-to-gaia" variant="text">
              Talk to Gaia
              <ArrowDown size={15} aria-hidden className="transition-transform group-hover:translate-y-0.5" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: EASE }}
          className="relative -mx-6 h-[360px] cursor-grab active:cursor-grabbing sm:h-[440px] lg:mx-0 lg:h-[600px]"
        >
          {/* Atmosphere halo, drawn in CSS so it follows the theme */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 aspect-square h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_90px_10px_var(--color-green-glow),inset_0_0_40px_var(--color-green-dim)]"
          />
          <Globe colors={GLOBE_COLORS[theme]} animate={!reduceMotion} />
        </motion.div>
      </div>

      {/* Readout strip */}
      <motion.dl
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 border-t border-border bg-background/60 backdrop-blur-md"
      >
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 md:grid-cols-4">
          {READOUTS.map((r, i) => (
            <div
              key={r.label}
              className={`px-6 py-5 ${i > 0 ? "md:border-l" : ""} ${i % 2 ? "border-l md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} border-border`}
            >
              <dt className="font-mono text-[12px] text-muted">{r.label}</dt>
              <dd className="mt-1 font-mono text-[17px] text-foreground">{r.value}</dd>
            </div>
          ))}
        </div>
      </motion.dl>
    </section>
  );
}
