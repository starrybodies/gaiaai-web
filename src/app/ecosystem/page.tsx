import type { Metadata } from "next";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { BuildWithGaia } from "@/components/sections/BuildWithGaia";
import { GaiaIRL } from "@/components/sections/GaiaIRL";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Ecosystem",
  description: "Explore the Gaia AI ecosystem: projects, partners, and how to build with us.",
  alternates: { canonical: "/ecosystem" },
  openGraph: {
    title: "Ecosystem | Gaia AI",
    description: "Explore the Gaia AI ecosystem: projects, partners, and how to build with us.",
    url: "https://gaiaai.xyz/ecosystem",
    images: [{ url: "/gaia-coded.gif", width: 1200, height: 1200 }],
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
      <JsonLd data={breadcrumbSchema([{ name: "Ecosystem", url: "/ecosystem" }])} />
      <div className="pt-24" />
      <Ecosystem />
      <BuildWithGaia />
      <GaiaIRL />
    </main>
  );
}
