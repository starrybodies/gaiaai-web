import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
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
              Gaia AI is community-governed through the $GAIA token on Base L2.
              Join the conversation, contribute to proposals, and help direct
              intelligence toward regeneration.
            </p>
          }
        />

        <a
          href="https://zora.co/@gaiaai"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block overflow-hidden rounded-[4px] border border-amber/30 bg-amber/[0.06] p-8 transition-colors hover:border-amber/60 hover:bg-amber/10"
        >
          <p className="font-mono text-[13px] text-amber">Support the Mission</p>
          <h3 className="mt-3 text-[clamp(1.4rem,2.6vw,2rem)] font-bold leading-tight">
            Buy the Gaia Creator Token
          </h3>
          <p className="mt-3 max-w-[46ch] text-[15px] leading-relaxed text-muted">
            Fuel planetary regeneration. Every token supports Gaia&apos;s
            mission to make environmental intelligence accessible to all.
          </p>
          <span className="mt-6 inline-flex items-center gap-2 font-mono text-[15px] font-bold text-amber">
            zora.co/@gaiaai
            <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </a>
      </div>

      <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-border bg-border sm:grid-cols-4 lg:grid-cols-7">
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
