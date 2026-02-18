"use client";

import { ECOSYSTEM_PROJECTS, PARTNERS } from "@/lib/constants";
import { ScrollReveal } from "../ui/ScrollReveal";
import { StaggerContainer, StaggerItem } from "../ui/StaggerContainer";
import { Badge } from "../ui/Badge";

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-green/40" />
              <span className="text-sm text-muted">Ecosystem</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              A network of{" "}
              <span className="text-gradient">regenerative projects</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted text-[14px] max-w-2xl mx-auto leading-[1.8]">
              Six interconnected projects powered by Gaia&apos;s intelligence layer,
              each addressing a critical dimension of planetary health.
            </p>
          </ScrollReveal>
        </div>

        {/* Project grid */}
        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          staggerDelay={0.1}
        >
          {ECOSYSTEM_PROJECTS.map((project) => (
            <StaggerItem key={project.name}>
              <div className="group rounded-2xl border border-border bg-surface/80 backdrop-blur-sm p-6 transition-all hover:border-green/20 hover:bg-surface-light h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="w-10 h-10 rounded bg-green/10 border border-green/20 flex items-center justify-center text-green text-[12px] font-mono font-bold">
                    {project.icon}
                  </span>
                  <Badge status={project.status} />
                </div>
                <h3 className="text-[14px] font-semibold mb-2">{project.name}</h3>
                <p className="text-[12px] text-muted leading-relaxed">
                  {project.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Partner logos */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 border-t border-green/20 pt-12">
            <p className="text-[11px] text-green/50 text-center mb-10 uppercase tracking-[0.25em] font-mono font-bold">
              Partners & Collaborators
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {PARTNERS.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 py-3 rounded-xl border border-green/20 bg-green/[0.04] hover:border-green/50 hover:bg-green/10 hover:shadow-[0_0_20px_rgba(0,232,123,0.15)] transition-all"
                >
                  <span className="w-11 h-11 rounded-lg bg-green/15 border border-green/30 flex items-center justify-center text-green text-[14px] font-mono font-bold group-hover:bg-green/25 group-hover:border-green/50 group-hover:shadow-[0_0_12px_rgba(0,232,123,0.3)] transition-all">
                    {partner.name.charAt(0)}
                  </span>
                  <span className="text-[15px] font-bold text-foreground/80 group-hover:text-green transition-colors">
                    {partner.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
