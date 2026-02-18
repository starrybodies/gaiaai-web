"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GlobePlaceholder } from "../three/GlobePlaceholder";

const Globe = dynamic(
  () => import("../three/Globe").then((m) => ({ default: m.Globe })),
  { ssr: false, loading: () => <GlobePlaceholder /> }
);

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Nature background — jungle canopy */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/jungle.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "slow-pan 40s ease-in-out infinite",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      {/* Green glow accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-green/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-20 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Image
                src="/gaia-logo.png"
                alt="Gaia AI"
                width={56}
                height={56}
                className="opacity-80 drop-shadow-[0_0_20px_rgba(0,232,123,0.3)]"
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.08] tracking-[-0.02em] mb-6 text-glow"
            >
              Artificial Intelligence
              <br />
              in service to the{" "}
              <span className="text-gradient">living world</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14px] text-muted max-w-md mb-10 leading-[1.8]"
            >
              We build AI systems that make environmental data legible,
              actionable, and economically viable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <a
                href="#talk-to-gaia"
                className="group inline-flex items-center gap-2.5 rounded-md bg-green/90 px-7 py-3.5 text-[14px] font-semibold text-background transition-all hover:bg-green hover:shadow-[0_0_30px_rgba(0,232,123,0.3)]"
              >
                Talk to Gaia
                <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href="https://zora.co/@gaiaai"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-md border border-amber/30 bg-amber/10 px-7 py-3.5 text-[14px] font-semibold text-amber transition-all hover:bg-amber/20 hover:border-amber/50 hover:shadow-[0_0_25px_rgba(240,168,48,0.2)]"
              >
                Support on Zora
                <span className="text-[11px] opacity-70">&#9670;</span>
              </a>
              <a
                href="#greenpaper"
                className="group inline-flex items-center gap-2.5 rounded-md border border-green/20 px-7 py-3.5 text-[14px] font-medium text-green/70 transition-all hover:text-green hover:border-green/40"
              >
                Read the Greenpaper
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>

            {/* Trust line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-[12px] text-green/30 tracking-wider font-mono"
            >
              REGEN NETWORK PARTNER &nbsp;·&nbsp; BASE L2 &nbsp;·&nbsp; 1,500+ COMMUNITY
            </motion.div>
          </div>

          {/* Right: Globe */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] lg:h-[520px]"
          >
            <div className="relative z-10 h-full">
              {isMobile ? <GlobePlaceholder /> : <Globe />}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
