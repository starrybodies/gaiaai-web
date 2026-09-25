import { ArrowUpRight } from "lucide-react";
import { EARLY_ACCESS_HREF, SOCIAL_LINKS } from "@/lib/constants";
import { Section, SectionHeading } from "../ui/Section";

export function Community() {
  return (
    <Section id="community">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <SectionHeading
          label="Community"
          title="Join the Guild"
          intro={
            <p>
              The guild is the circle of researchers, land stewards, registry
              operators and builders who work alongside the lab. Members hear
              about releases first and test new agents before anyone else.
            </p>
          }
        />

        <a
          href={EARLY_ACCESS_HREF}
          className="group relative block overflow-hidden rounded-[4px] border border-green/30 bg-green/[0.05] p-8 transition-colors hover:border-green/60 hover:bg-green/10"
        >
          <p className="flex items-center gap-2.5 font-mono text-[13px] text-green">
            <span aria-hidden className="h-2 w-2 rounded-full bg-green motion-safe:animate-pulse" />
            Early access
          </p>
          <h3 className="mt-3 text-[clamp(1.4rem,2.6vw,2rem)] font-bold leading-tight">
            Get the first release
          </h3>
          <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-muted">
            The full layer is in private development. Write to us and we will
            let you know when the first agents open to testers.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 font-mono text-[15px] font-bold text-green">
            Request early access
            <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
        {SOCIAL_LINKS.map((link) => (
          <li key={link.label} className="bg-background">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full items-center justify-between gap-2 px-4 py-5 font-mono text-[13px] transition-colors hover:bg-surface hover:text-green"
            >
              {link.label}
              <ArrowUpRight size={14} aria-hidden className="shrink-0 text-muted transition-colors group-hover:text-green" />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-[14px] text-muted">
        Read more on our{" "}
        <a href="https://paragraph.com/@gaiaai" target="_blank" rel="noopener noreferrer" className="text-green underline-offset-4 hover:underline">
          blog
        </a>
        , or explore our{" "}
        <a href="https://manifold.gallery/gaiaai" target="_blank" rel="noopener noreferrer" className="text-green underline-offset-4 hover:underline">
          NFT collection on Manifold
        </a>
        .
      </p>
    </Section>
  );
}
