import { BookOpen } from "lucide-react";
import { Section, SectionHeading, Tag } from "../ui/Section";
import { Button } from "../ui/Button";

const TOPICS = [
  "Regenerative Agriculture",
  "Blue Carbon",
  "Biodiversity Credits",
  "MRV Systems",
  "Ecological AI",
  "Carbon Markets",
  "Rewilding",
  "Symbiocene",
];

const ENTRIES = [
  {
    title: "Monitoring, Reporting & Verification",
    desc: "The backbone of credible ecological claims — how satellite data, AI, and on-ground sensors create verifiable environmental impact.",
  },
  {
    title: "Blue Carbon Credits",
    desc: "Coastal ecosystems — mangroves, seagrasses, salt marshes — sequestering carbon at rates up to 10x terrestrial forests.",
  },
  {
    title: "Regenerative Agriculture",
    desc: "Farming practices that restore soil health, increase biodiversity, and sequester atmospheric carbon into living systems.",
  },
];

export function EOR() {
  return (
    <Section id="eor">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            label="Knowledge Base"
            title="The Encyclopedia of Regeneration"
            intro={
              <p>
                A living knowledge base mapping the concepts, technologies, and
                practices driving planetary regeneration. From carbon
                methodologies to indigenous land stewardship, the EOR makes the
                regenerative movement legible and interconnected.
              </p>
            }
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <Tag key={topic}>{topic}</Tag>
            ))}
          </div>
          <Button href="https://eor.gaiaai.xyz" external className="mt-10">
            Explore the EOR
          </Button>
        </div>

        <figure className="panel panel-ticks overflow-hidden" aria-label="Encyclopedia of Regeneration preview">
          <header className="border-b border-border px-8 pb-6 pt-7">
            <p className="font-mono text-[12px] text-green">eor.gaiaai.xyz</p>
            <p className="mt-3 font-mono text-[24px] font-bold uppercase leading-tight">
              Encyclopedia of Regeneration
            </p>
            <p className="mt-2 text-[14px] text-muted">The knowledge layer of the regenerative economy</p>
          </header>
          <ul className="divide-y divide-border">
            {ENTRIES.map((entry) => (
              <li key={entry.title} className="grid grid-cols-[20px_1fr] gap-4 px-8 py-5">
                <BookOpen size={16} aria-hidden className="mt-1 text-green" />
                <div>
                  <p className="text-[15px] font-semibold">{entry.title}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted">{entry.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </Section>
  );
}
