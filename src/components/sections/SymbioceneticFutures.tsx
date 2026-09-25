import Image from "next/image";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";

export function SymbioceneticFutures() {
  return (
    <Section id="symbiocenetic-futures" backdrop="/gaia-coded.gif">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            label="Vision Lab"
            title="Symbiocenetic Futures"
            intro={
              <p>
                Ecohyperstition in practice — vividly envisioned futures of
                thriving ecosystems that work to make themselves real through
                collective belief, research, and action. When communities
                embrace compelling blueprints of regenerative futures, they
                mobilize resources, shape policy, and influence cultural values.
              </p>
            }
          />
          <blockquote className="mt-8 border-l-2 border-green pl-5 font-mono text-[15px] leading-[1.7] text-green">
            &ldquo;The future can invent the present — galvanizing global
            communities to enact the Symbiocene in tangible, transformative
            ways.&rdquo;
          </blockquote>
          <Button href="https://futures.gaiaai.xyz" external className="mt-10">
            Explore Symbiocenetic Futures
          </Button>
        </div>

        <figure className="panel panel-ticks overflow-hidden">
          <div className="relative aspect-[4/3]">
            <Image
              src="/gaia-coded.gif"
              alt="Gaia Coded: an AI-generated vision of the Symbiocene"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 p-6">
            <p className="font-mono text-[12px] text-green">futures.gaiaai.xyz</p>
            <p className="mt-1.5 text-[15px] leading-relaxed text-foreground/90">
              AI-generated visions of the world we are building — the
              Symbiocene made visible.
            </p>
          </figcaption>
        </figure>
      </div>
    </Section>
  );
}
