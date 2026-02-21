import { Ecosystem } from "@/components/sections/Ecosystem";
import { BuildWithGaia } from "@/components/sections/BuildWithGaia";
import { GaiaIRL } from "@/components/sections/GaiaIRL";

export const metadata = {
  title: "Ecosystem — Gaia AI",
  description: "Explore the Gaia AI ecosystem: projects, partners, and how to build with us.",
};

export default function EcosystemPage() {
  return (
    <main>
      <div className="pt-24" />
      <Ecosystem />
      <BuildWithGaia />
      <GaiaIRL />
    </main>
  );
}
