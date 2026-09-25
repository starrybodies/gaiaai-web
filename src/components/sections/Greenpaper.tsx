import Image from "next/image";
import { GREENPAPER_CONCEPTS } from "@/lib/constants";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";

const COLOR_TEXT: Record<string, string> = {
  green: "text-green",
  cyan: "text-cyan",
  amber: "text-amber",
};

const COLOR_BORDER: Record<string, string> = {
  green: "border-green",
  cyan: "border-cyan",
  amber: "border-amber",
};

export function Greenpaper() {
  return (
    <Section id="greenpaper" backdrop="/permaculture.jpg">
      <SectionHeading label="The Greenpaper" title="A vision for planetary intelligence" />

      <ul className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-border bg-border md:grid-cols-3">
        {GREENPAPER_CONCEPTS.map((concept) => (
          <li key={concept.title} className="flex flex-col bg-background p-8">
            <span aria-hidden className={`font-mono text-[13px] font-bold ${COLOR_TEXT[concept.color]}`}>
              {concept.icon}
            </span>
            <h3 className="mt-6 text-[20px] font-bold">{concept.title}</h3>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">{concept.description}</p>
            <blockquote
              className={`mt-8 border-l-2 pl-4 text-[14px] italic leading-relaxed ${COLOR_BORDER[concept.color]} ${COLOR_TEXT[concept.color]}`}
            >
              &ldquo;{concept.quote}&rdquo;
            </blockquote>
          </li>
        ))}
      </ul>

      <figure className="mt-24 grid items-center gap-10 md:grid-cols-[auto_1fr]">
        <Image
          src="/gaia-coded.gif"
          alt=""
          width={160}
          height={160}
          className="h-28 w-28 rounded-full object-cover opacity-80 ring-1 ring-green/30 md:h-40 md:w-40"
          unoptimized
        />
        <div>
          <blockquote className="max-w-[36ch] font-mono text-[clamp(1.4rem,3vw,2.25rem)] font-medium leading-[1.3] text-foreground">
            &ldquo;The time has come to weave together the threads of human
            wisdom traditions, scientific knowledge, and artificial intelligence
            into a new planetary nervous system.&rdquo;
          </blockquote>
          <figcaption className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-4">
            <span className="font-mono text-[13px] text-muted">— Gaia AI Greenpaper</span>
            <Button href="https://github.com/gaiaaiagent/greenpaper" external>
              Read the Full Greenpaper
            </Button>
          </figcaption>
        </div>
      </figure>
    </Section>
  );
}
