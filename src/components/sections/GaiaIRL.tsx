import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";

const GRANTS = [
  {
    title: "AYOWECCA Uganda — Regenerative Agriculture",
    amount: "$777",
    round: "GAIA IRL II",
    date: "Feb 2025",
    image: "/field-regen.jpg",
    description:
      "Selected from 14 proposals by Gaia's agentic board. AYOWECCA runs a Two Million Tree Planting Program, restoring wetlands, planting fruit trees in 64 schools and 40 health centers, and raising 50,000 seedlings. Direct land remediation with cascading community impact.",
    link: "https://paragraph.com/@gaiaai/gaiairlii",
  },
  {
    title: "Regen IRL — Global Grants Competition",
    amount: "$888",
    round: "Regen IRL",
    date: "Aug 2025",
    image: "/hands-plant.jpg",
    description:
      "Joint initiative with Regen Network awarding $888 in $REGEN to the project with the highest Planetary Return on Investment. Winners receive AI toolkit support: remote sensing analysis, best-practice insights, and an outcomes reporting assistant.",
    link: "https://paragraph.com/@gaiaai/regenai",
  },
  {
    title: "GAIA IRL I — First Micro-Grant",
    amount: "$777",
    round: "GAIA IRL I",
    date: "Jan 2025",
    image: "/ocean.jpg",
    description:
      "The inaugural Gaia IRL grant — $777 distributed to the community member assessed as driving the highest Planetary Return on Investment. Kickstarted the on-the-ground regenerative grants program.",
    link: "https://paragraph.com/@gaiaai",
  },
];

const STATS = [
  { label: "Grant Rounds", value: "3" },
  { label: "Total Funded", value: "$2,442" },
  { label: "Proposals Assessed", value: "14+" },
  { label: "PROI Metric", value: "Active" },
];

export function GaiaIRL() {
  return (
    <Section id="gaia-irl">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <SectionHeading
          label="Gaia IRL"
          title="Micro-grants for maximum PROI"
          intro={
            <p>
              Gaia IRL distributes micro-grants to on-the-ground regenerative
              projects. Each proposal is assessed by Gaia&apos;s agentic board
              for Planetary Return on Investment — directing resources to where
              they create the most ecological impact per dollar.
            </p>
          }
        />
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-border bg-border">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-background px-5 py-4">
              <dt className="font-mono text-[12px] text-muted">{stat.label}</dt>
              <dd className="mt-1 font-mono text-[26px] font-bold leading-tight text-green">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <ul className="mt-16 grid gap-6 md:grid-cols-3">
        {GRANTS.map((grant) => (
          <li key={grant.title}>
            <a
              href={grant.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group panel flex h-full flex-col overflow-hidden transition-colors hover:border-green/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={grant.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/10 to-transparent" />
                <span className="absolute bottom-4 left-5 font-mono text-[34px] font-bold leading-none text-green drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
                  {grant.amount}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex justify-between font-mono text-[12px] text-muted">
                  <span>{grant.round}</span>
                  <span>{grant.date}</span>
                </p>
                <h3 className="mt-4 text-[16px] font-bold leading-snug">{grant.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted">{grant.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-[13px] text-green">
                  Read on Paragraph
                  <ArrowUpRight size={14} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>

      <Button href="https://x.com/gaiaaiagent" variant="text" external className="mt-10">
        Follow @gaiaaiagent for grant announcements
      </Button>
    </Section>
  );
}
