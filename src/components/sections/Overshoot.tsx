import Image from "next/image";
import { OVERSHOOT_URL } from "@/lib/constants";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";

// The atlas follows a material through these stages in order
const STAGES = [
  {
    title: "Extract or grow",
    body: "National accounts measure mass, while mapped mines, wells and fields locate the activity.",
  },
  {
    title: "Make and refine",
    body: "Facilities and production series show where material changes form.",
  },
  {
    title: "Move across borders",
    body: "Customs reports give product weight and the trading partners on each side.",
  },
  {
    title: "Remain in use",
    body: "Stocks show how much material is built into homes, roads and products.",
  },
  {
    title: "Leave or return",
    body: "Collection, recovery, disposal and leakage each have their own measure.",
  },
];

export function Overshoot() {
  return (
    <Section id="overshoot">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading
            label="Live now"
            title="Overshoot"
            intro={
              <>
                <p>
                  Overshoot is a planetary atlas of material flows and the
                  lab&apos;s first public instrument. It traces the oil, ores,
                  crops and manufactured materials behind everyday life: where
                  they are extracted, how they move, what stays in use and what
                  becomes waste.
                </p>
                <p className="text-[15px]">
                  Every answer carries its source, and links the evidence cannot
                  support stay marked as unknown. Researchers and agents can
                  query the same data through open downloads and an MCP server.
                </p>
              </>
            }
          />
          <Button href={OVERSHOOT_URL} variant="primary" external className="mt-10">
            Explore Overshoot
          </Button>
        </div>

        <a
          href={OVERSHOOT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group panel panel-ticks block overflow-hidden"
        >
          <div className="relative aspect-[1600/956]">
            <Image
              src="/overshoot.jpg"
              alt="Overshoot showing reported copper trade from Chile to the United States on a globe"
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
          <p className="border-t border-border px-5 py-3 font-mono text-[12px] text-green">
            overshoot.gaiaai.xyz
          </p>
        </a>
      </div>

      <ol className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {STAGES.map((stage, i) => (
          <li key={stage.title} className="bg-background p-6">
            <span className="font-mono text-[13px] text-green">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-[15px] font-bold">{stage.title}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">{stage.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
