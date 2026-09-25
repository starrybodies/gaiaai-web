import { EARLY_ACCESS_HREF, PARTNER_TYPES } from "@/lib/constants";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";

export function BuildWithGaia() {
  return (
    <Section id="build-with-gaia" backdrop="/hands-plant.jpg">
      <div className="grid items-start gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading
            label="Build With Gaia"
            title="Let's build the regenerative economy together"
            intro={
              <>
                <p>
                  We partner with carbon registries, conservation foundations,
                  MRV providers, and climate funds to deploy AI-powered
                  environmental monitoring and verification at scale.
                </p>
                <p className="text-[15px]">
                  Design partners get the first agents built around their own
                  data. Investors can reach the founders at the same address.
                </p>
              </>
            }
          />
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Button href="mailto:hello@gaiaai.xyz" variant="primary">
              Get in touch
            </Button>
            <Button href={EARLY_ACCESS_HREF} variant="text">
              Request early access
            </Button>
          </div>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {PARTNER_TYPES.map((partner) => (
            <li key={partner.type} className="grid grid-cols-[44px_1fr] gap-x-5 py-6">
              <span aria-hidden className="font-mono text-[15px] font-bold text-green">
                {partner.icon}
              </span>
              <div>
                <h3 className="text-[16px] font-bold">{partner.type}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted">{partner.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
