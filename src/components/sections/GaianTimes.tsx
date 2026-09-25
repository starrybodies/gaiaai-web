import { Section, SectionHeading, Tag } from "../ui/Section";
import { Button } from "../ui/Button";

const CATEGORIES = [
  "Rewilding",
  "Ocean Conservation",
  "Regenerative Agriculture",
  "Clean Energy",
  "Climate Action",
  "Indigenous Perspectives",
  "Solarpunk",
  "Regenerative Economics",
];

const HEADLINES = [
  {
    cat: "Rewilding",
    headline:
      "Wolf reintroduction reshapes Yellowstone river systems for the first time in decades",
  },
  {
    cat: "Clean Energy",
    headline:
      "Perovskite solar cells reach 33% efficiency in new Stanford breakthrough",
  },
  {
    cat: "Ocean",
    headline:
      "Kelp forest restoration off Tasmania shows 400% biomass increase in 18 months",
  },
];

export function GaianTimes() {
  return (
    <Section id="gaian-times">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            label="The Gaian Times"
            title="The record of a regenerating world"
            intro={
              <p>
                AI-curated environmental journalism drawn from 90+ sources. The
                Gaian Times surfaces the stories that matter — rewilding
                breakthroughs, policy shifts, indigenous wisdom, and the quiet
                victories of ecological restoration happening every day.
              </p>
            }
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Tag key={cat}>{cat}</Tag>
            ))}
          </div>
          <Button href="https://times.gaiaai.xyz" external className="mt-10">
            Read The Gaian Times
          </Button>
        </div>

        {/* Front page preview — the one place a newspaper voice belongs */}
        <figure className="panel panel-ticks overflow-hidden" aria-label="The Gaian Times front page preview">
          <header className="border-b border-border px-8 pb-6 pt-7 text-center">
            <p className="font-mono text-[11px] text-muted">Curated by AI, powered by open data</p>
            <p className="mt-3 font-mono text-[30px] font-bold uppercase leading-none tracking-[0.02em]">
              The Gaian Times
            </p>
            <p className="mt-3 text-[13px] italic text-muted">The Record of a Regenerating World</p>
          </header>
          <ul className="divide-y divide-border">
            {HEADLINES.map((item) => (
              <li key={item.headline} className="px-8 py-5">
                <span className="font-mono text-[11px] text-green">{item.cat}</span>
                <p className="mt-1.5 text-[16px] font-medium leading-snug">{item.headline}</p>
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </Section>
  );
}
