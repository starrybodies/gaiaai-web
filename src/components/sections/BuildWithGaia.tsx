import { PARTNER_TYPES } from "@/lib/constants";
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
              <p>
                We partner with carbon registries, conservation foundations, MRV
                providers, and climate funds to deploy AI-powered environmental
                monitoring and verification at scale.
              </p>
            }
          />
          <Button href="mailto:hello@gaiaai.xyz" variant="primary" className="mt-10">
            Get in touch
          </Button>
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
