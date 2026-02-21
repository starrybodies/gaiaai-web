import { Greenpaper } from "@/components/sections/Greenpaper";
import { PROI } from "@/components/sections/PROI";
import { SymbioceneticFutures } from "@/components/sections/SymbioceneticFutures";
import { GaianTimes } from "@/components/sections/GaianTimes";
import { RegenDigest } from "@/components/sections/RegenDigest";
import { Talks } from "@/components/sections/Talks";

export const metadata = {
  title: "Knowledge & Media — Gaia AI",
  description: "Greenpaper, PROI framework, Symbiocenetic Futures, Gaian Times, Regen Digest, and talks.",
};

export default function KnowledgePage() {
  return (
    <main>
      <div className="pt-24" />
      <Greenpaper />
      <PROI />
      <SymbioceneticFutures />
      <GaianTimes />
      <RegenDigest />
      <Talks />
    </main>
  );
}
