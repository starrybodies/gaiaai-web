import Image from "next/image";
import Link from "next/link";
import { KOGUI_PATH } from "@/content/kogui-guide";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";

export function KoguiTransmission() {
  return (
    <Section id="kogui-transmission">
      <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.7fr]">
        <div>
          <SectionHeading
            label="Transmission · Kággaba / Kogui"
            title="An urgent message on artificial intelligence from the Kogui people"
            intro={
              <>
                <p>
                  The Mamos and Sakas of the Kogui, who call themselves the Kággaba, live in Colombia&apos;s Sierra
                  Nevada de Santa Marta. They have sent a message to the people building artificial intelligence.
                </p>
                <blockquote className="border-l-2 border-green pl-5 text-foreground">
                  “The danger is not a conscious machine. The danger is an unconscious people holding great power.”
                </blockquote>
              </>
            }
          />
          <Button href={KOGUI_PATH} variant="primary" className="mt-10">
            Read the full transmission
          </Button>
        </div>
        <Link href={KOGUI_PATH} className="panel panel-ticks group mx-auto block w-full max-w-[360px] overflow-hidden">
          <Image
            src="/transmissions/kogui/slide-01.webp"
            alt="Cover slide: An urgent message on artificial intelligence from the Kogui people"
            width={1080}
            height={1350}
            sizes="(max-width: 1024px) 80vw, 360px"
            className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </Link>
      </div>
    </Section>
  );
}
