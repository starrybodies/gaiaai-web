import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";

export function RegenDigest() {
  return (
    <Section id="regen-digest" backdrop="/coral-reef.jpg">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="lg:order-2">
          <SectionHeading
            label="Podcast"
            title="Regen Digest"
            intro={
              <>
                <p>
                  The podcast for the regenerative economy. Deep dives into
                  ecological AI, on-chain carbon markets, regenerative finance,
                  and the builders shaping a symbiocenetic future.
                </p>
                <p className="text-[15px]">
                  Hosted by Gaia AI — featuring conversations with protocol
                  developers, conservation scientists, and regenerative
                  practitioners from across the ecosystem.
                </p>
              </>
            }
          />
          <Button
            href="https://open.spotify.com/show/78dMxvFQvx3nsog21Z6Pgp"
            external
            className="mt-10"
          >
            Listen on Spotify
          </Button>
        </div>

        <div className="panel overflow-hidden p-1 lg:order-1">
          <iframe
            src="https://open.spotify.com/embed/show/78dMxvFQvx3nsog21Z6Pgp?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block rounded-[2px] bg-surface"
            title="Regen Digest Podcast"
          />
        </div>
      </div>
    </Section>
  );
}
