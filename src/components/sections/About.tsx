import Image from "next/image";
import { Satellite, ShieldCheck, Users } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";

const CAPABILITIES = [
  {
    icon: Satellite,
    title: "AI-Powered Environmental Monitoring",
    description:
      "Satellite analysis, NLP-driven document review, and multi-modal data synthesis for ecological assessment.",
    color: "text-green",
  },
  {
    icon: ShieldCheck,
    title: "Blockchain-Verified Credit Systems",
    description:
      "Seven-stage registry review pipeline backed by Regen Ledger on Cosmos SDK for transparent ecocredit issuance.",
    color: "text-cyan",
  },
  {
    icon: Users,
    title: "Community-Governed Regenerative Finance",
    description:
      "Open governance through the $GAIA token, directing resources to maximally regenerative projects.",
    color: "text-amber",
  },
];

const TELEMETRY = [
  ["Band", "NIR+RED"],
  ["Res", "10m"],
  ["Source", "Sentinel-2"],
  ["Updated", "2h ago"],
];

export function About() {
  return (
    <Section id="about" backdrop="/ocean.jpg">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
        <SectionHeading
          label="What is Gaia AI?"
          title="The intelligence layer for Earth's regenerative economy"
          intro={
            <>
              <p>
                Gaia AI is a decentralized intelligence network that fuses
                agentic AI with ecological blockchain infrastructure. Born from
                a partnership with Regen Network, we operate at the intersection
                of environmental monitoring, verified ecological credit systems,
                and community-governed regenerative finance.
              </p>
              <p className="text-[15px]">
                We work with international institutions and grassroots
                communities alike — building the intelligence layer that makes
                planetary healing economically viable.
              </p>
            </>
          }
        />

        <ul className="divide-y divide-border border-y border-border self-end">
          {CAPABILITIES.map((cap) => (
            <li key={cap.title} className="grid grid-cols-[28px_1fr] gap-x-4 py-6">
              <cap.icon size={20} aria-hidden className={`${cap.color} mt-0.5`} />
              <div>
                <h3 className="text-[15px] font-semibold leading-snug">{cap.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{cap.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Live instrument readout */}
      <div className="panel panel-ticks mt-20 overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-20">
          <Image src="/gaia-coded.gif" alt="" fill className="object-cover" unoptimized />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/30" />
        </div>
        <div className="relative grid gap-8 p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
          <Image src="/gaia-logo.png" alt="" width={56} height={56} className="opacity-70" />
          <div>
            <p className="flex items-center gap-2.5 font-mono text-[13px] text-green">
              <span aria-hidden className="h-2 w-2 rounded-full bg-green motion-safe:animate-pulse" />
              Satellite analysis active
            </p>
            <p className="mt-3 font-mono text-[clamp(1.25rem,2.4vw,1.75rem)] leading-tight">
              NDVI 0.82 <span className="text-muted">/</span> Coverage 94.2%{" "}
              <span className="text-muted">/</span> Confidence high
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-[12px]">
            {TELEMETRY.map(([k, v]) => (
              <div key={k} className="flex gap-3">
                <dt className="text-muted">{k}</dt>
                <dd className="whitespace-nowrap">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          aria-hidden
          className="absolute left-0 right-0 h-px bg-green/40 motion-safe:animate-[scan-line_3s_linear_infinite]"
        />
      </div>
    </Section>
  );
}
