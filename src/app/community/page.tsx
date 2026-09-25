import type { Metadata } from "next";
import { Community } from "@/components/sections/Community";
import { Gaiachads } from "@/components/sections/Gaiachads";
import { JsonLd } from "@/components/JsonLd";
import { webPageSchema, breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Community",
  description: "Join the Gaia AI community: governance, $GAIA token, and Gaiachads NFTs.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "Community | Gaia AI",
    description: "Join the Gaia AI community: governance, $GAIA token, and Gaiachads NFTs.",
    url: "https://gaiaai.xyz/community",
    images: [{ url: "/gaia-coded.gif", width: 1200, height: 1200 }],
  },
};

export default function CommunityPage() {
  return (
    <main>
      <JsonLd
        data={webPageSchema({
          name: "Community",
          description: "Join the Gaia AI community: governance, $GAIA token, and Gaiachads NFTs.",
          url: "/community",
        })}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Community", url: "/community" }])} />
      <div className="pt-24" />
      <Community />
      <Gaiachads />
    </main>
  );
}
