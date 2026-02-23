import type { Metadata } from "next";
import { Greenpaper } from "@/components/sections/Greenpaper";
import { PROI } from "@/components/sections/PROI";
import { SymbioceneticFutures } from "@/components/sections/SymbioceneticFutures";
import { GaianTimes } from "@/components/sections/GaianTimes";
import { RegenDigest } from "@/components/sections/RegenDigest";
import { Talks } from "@/components/sections/Talks";
import { EOR } from "@/components/sections/EOR";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema, faqPageSchema, videoObjectSchema } from "@/lib/structured-data";
import { TALKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Knowledge & Media",
  description: "Greenpaper, PROI framework, Symbiocenetic Futures, Gaian Times, Regen Digest, and talks.",
  alternates: { canonical: "/knowledge" },
  openGraph: {
    title: "Knowledge & Media | Gaia AI",
    description: "Greenpaper, PROI framework, Symbiocenetic Futures, Gaian Times, Regen Digest, and talks.",
    url: "https://gaiaai.xyz/knowledge",
  },
};

export default function KnowledgePage() {
  return (
    <main>
      <JsonLd
        data={webPageSchema({
          name: "Knowledge & Media",
          description: "Greenpaper, PROI framework, Symbiocenetic Futures, Gaian Times, Regen Digest, and talks.",
          url: "/knowledge",
        })}
      />
      <JsonLd data={faqPageSchema()} />
      {TALKS.map((talk) => (
        <JsonLd key={talk.videoId} data={videoObjectSchema(talk)} />
      ))}
      <div className="pt-24" />
      <Greenpaper />
      <PROI />
      <SymbioceneticFutures />
      <GaianTimes />
      <RegenDigest />
      <Talks />
      <EOR />
    </main>
  );
}
