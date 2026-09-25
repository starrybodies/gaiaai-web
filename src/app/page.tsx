import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Overshoot } from "@/components/sections/Overshoot";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TalkToGaia } from "@/components/sections/TalkToGaia";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { PROI } from "@/components/sections/PROI";
import { GaiaIRL } from "@/components/sections/GaiaIRL";
import { Talks } from "@/components/sections/Talks";
import { GaianTimes } from "@/components/sections/GaianTimes";
import { EOR } from "@/components/sections/EOR";
import { RegenDigest } from "@/components/sections/RegenDigest";
import { SymbioceneticFutures } from "@/components/sections/SymbioceneticFutures";
import { Greenpaper } from "@/components/sections/Greenpaper";
import { Gaiachads } from "@/components/sections/Gaiachads";
import { BuildWithGaia } from "@/components/sections/BuildWithGaia";
import { Community } from "@/components/sections/Community";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, webSiteSchema, faqPageSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={faqPageSchema()} />
      <Hero />
      <About />
      <Overshoot />
      <HowItWorks />
      <TalkToGaia />
      <Ecosystem />
      <PROI />
      <GaiaIRL />
      <Talks />
      <GaianTimes />
      <EOR />
      <RegenDigest />
      <SymbioceneticFutures />
      <Greenpaper />
      <Gaiachads />
      <BuildWithGaia />
      <Community />
    </main>
  );
}
