import { Section, SectionHeading } from "../ui/Section";

const DIMENSIONS = [
  { label: "Carbon Sequestered", icon: "C", value: "tCO2e" },
  { label: "Biodiversity Restored", icon: "B", value: "species index" },
  { label: "Water Cycles Healed", icon: "H", value: "watershed health" },
  { label: "Communities Empowered", icon: "S", value: "social resilience" },
  { label: "Soil Regenerated", icon: "R", value: "organic matter %" },
  { label: "Knowledge Commoned", icon: "K", value: "open datasets" },
];

export function PROI() {
  return (
    <Section id="proi" backdrop="/field-regen.jpg">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            label="Core Metric"
            title="Planetary Return on Investment"
            intro={
              <p>
                PROI replaces narrow financial ROI with a multi-dimensional
                metric. Every dollar, every action, measured against its
                ecological impact — carbon sequestered, biodiversity restored,
                water cycles healed, communities empowered.
              </p>
            }
          />
          <blockquote className="mt-10 border-l-2 border-green pl-5 font-mono text-[15px] leading-[1.7] text-green">
            &ldquo;What if every transaction made the planet healthier? PROI is
            the metric that makes this question answerable.&rdquo;
          </blockquote>
        </div>

        <dl className="panel panel-ticks grid grid-cols-2 gap-px overflow-hidden bg-border">
          {DIMENSIONS.map((dim) => (
            <div key={dim.label} className="flex min-h-[132px] flex-col justify-between bg-surface p-6">
              <span aria-hidden className="font-mono text-[28px] font-bold leading-none text-green/80">
                {dim.icon}
              </span>
              <div>
                <dt className="text-[15px] font-semibold leading-snug">{dim.label}</dt>
                <dd className="mt-1 font-mono text-[12px] text-muted">{dim.value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
