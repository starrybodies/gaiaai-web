import { Community } from "@/components/sections/Community";
import { Gaiachads } from "@/components/sections/Gaiachads";

export const metadata = {
  title: "Community — Gaia AI",
  description: "Join the Gaia AI community: governance, $GAIA token, and Gaiachads NFTs.",
};

export default function CommunityPage() {
  return (
    <main>
      <div className="pt-24" />
      <Community />
      <Gaiachads />
    </main>
  );
}
