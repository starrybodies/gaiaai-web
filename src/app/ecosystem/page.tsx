import type { Metadata } from "next";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { BuildWithGaia } from "@/components/sections/BuildWithGaia";
import { GaiaIRL } from "@/components/sections/GaiaIRL";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Explore the Gaia AI ecosystem: projects, partners, and how to build with us.",
  alternates: { canonical: "/ecosystem" },
  openGraph: {
    title: "Ecosystem | Gaia AI",
    description: "Explore the Gaia AI ecosystem: projects, partners, and how to build with us.",
    url: "https://gaiaai.xyz/ecosystem",
  },
};

export default function EcosystemPage() {
  return (
    <main>
      <JsonLd
        data={webPageSchema({
          name: "Ecosystem",
          description: "Explore the Gaia AI ecosystem: projects, partners, and how to build with us.",
          url: "/ecosystem",
        })}
      />
      <div className="pt-24" />
      <Ecosystem />
      <BuildWithGaia />
      <GaiaIRL />
    </main>
  );
}
