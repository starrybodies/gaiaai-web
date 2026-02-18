"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { ChatWindow } from "../chat/ChatWindow";

export function TalkToGaia() {
  return (
    <section id="talk-to-gaia" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Description */}
          <div className="lg:sticky lg:top-32">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-green/40" />
                <span className="text-sm text-muted">Talk to Gaia</span>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Ask Gaia anything about the{" "}
                <span className="text-gradient">regenerative economy</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted text-lg leading-[1.6] mb-8">
                Gaia is grounded in verified knowledge — the greenpaper, Regen
                Network documentation, and live blockchain data. No hallucinations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-3 text-sm text-muted">
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-md bg-green/10 flex items-center justify-center text-green text-xs">
                    🛰
                  </span>
                  Query satellite monitoring data
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-md bg-cyan/10 flex items-center justify-center text-cyan text-xs">
                    ⛓
                  </span>
                  Check Regen Ledger ecocredit data
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-md bg-amber/10 flex items-center justify-center text-amber text-xs">
                    📊
                  </span>
                  Explore registry review pipeline
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-md bg-green/10 flex items-center justify-center text-green text-xs">
                    🔧
                  </span>
                  Learn about our technology stack
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Chat window */}
          <ScrollReveal delay={0.2} direction="right">
            <ChatWindow />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
