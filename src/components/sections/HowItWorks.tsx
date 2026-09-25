import { Brain, Landmark, ShieldCheck } from "lucide-react";
import { HOW_IT_WORKS_LAYERS } from "@/lib/constants";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";

const LAYER_ICONS = [Brain, ShieldCheck, Landmark];
const LAYER_TEXT = ["text-green", "text-cyan", "text-amber"];
const LAYER_BAR = ["bg-green", "bg-cyan", "bg-amber"];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        label="How It Works"
        title="Three layers of planetary trust"
        intro={
          <p>
            From raw satellite data to on-chain settlement, every step is
            transparent, verifiable, and designed to serve ecological truth.
          </p>
        }
      />

      {/* The layers are a pipeline: data flows left to right */}
      <ol className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border lg:grid-cols-3">
        {HOW_IT_WORKS_LAYERS.map((layer, i) => {
          const Icon = LAYER_ICONS[i];
          return (
            <li key={layer.title} className="relative flex flex-col bg-background p-8">
              <span aria-hidden className={`absolute inset-x-0 top-0 h-[2px] ${LAYER_BAR[i]}`} />
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[13px] ${LAYER_TEXT[i]}`}>Layer {i + 1}</span>
                <Icon size={20} aria-hidden className={LAYER_TEXT[i]} />
              </div>
              <h3 className="mt-10 text-[22px] font-bold">{layer.title}</h3>
              <p className="mt-2 font-mono text-[12px] text-muted">{layer.subtitle}</p>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-foreground/80">
                {layer.description}
              </p>
              <ul className="mt-8 space-y-2 border-t border-border pt-5">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-mono text-[13px] text-muted">
                    <span aria-hidden className={`h-1 w-1 ${LAYER_BAR[i]}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>

      <Button href="#greenpaper" variant="text" className="mt-8">
        Learn more in the Greenpaper
      </Button>
    </Section>
  );
}
