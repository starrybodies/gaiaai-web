import { ArrowUpRight } from "lucide-react";
import { ECOSYSTEM_PROJECTS, PARTNERS } from "@/lib/constants";
import { Section, SectionHeading } from "../ui/Section";
import { Badge } from "../ui/Badge";

export function Ecosystem() {
  return (
    <Section id="ecosystem">
      <SectionHeading
        label="Ecosystem"
        title="A network of regenerative projects"
        intro={
          <p>
            Six interconnected projects powered by Gaia&apos;s intelligence
            layer, each addressing a critical dimension of planetary health.
          </p>
        }
      />

      <ul className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {ECOSYSTEM_PROJECTS.map((project) => (
          <li
            key={project.name}
            className="flex flex-col bg-background p-6 transition-colors hover:bg-surface md:p-8"
          >
            <div className="flex items-center justify-between">
              <span aria-hidden className="font-mono text-[15px] font-bold text-green">
                {project.icon}
              </span>
              <Badge status={project.status} />
            </div>
            <h3 className="mt-8 text-[17px] font-bold">{project.name}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">{project.description}</p>
          </li>
        ))}
      </ul>

      <div className="mt-16 grid gap-6 md:grid-cols-[200px_1fr] md:items-center">
        <p className="font-mono text-[13px] text-muted">Partners & Collaborators</p>
        <ul className="flex flex-wrap gap-x-12 gap-y-4">
          {PARTNERS.map((partner) => (
            <li key={partner.name}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-mono text-[clamp(1.25rem,2.4vw,1.75rem)] font-bold text-foreground/85 transition-colors hover:text-green"
              >
                {partner.name}
                <ArrowUpRight
                  size={18}
                  aria-hidden
                  className="text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-green"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
