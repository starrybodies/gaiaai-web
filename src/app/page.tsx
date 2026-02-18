import { Navigation } from "@/components/Navigation";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorTrail } from "@/components/ui/CursorTrail";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TalkToGaia } from "@/components/sections/TalkToGaia";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PROI } from "@/components/sections/PROI";
import { GaiaIRL } from "@/components/sections/GaiaIRL";
import { GaianTimes } from "@/components/sections/GaianTimes";
import { RegenDigest } from "@/components/sections/RegenDigest";
import { Talks } from "@/components/sections/Talks";
import { SymbioceneticFutures } from "@/components/sections/SymbioceneticFutures";
import { Gaiachads } from "@/components/sections/Gaiachads";
import { Greenpaper } from "@/components/sections/Greenpaper";
import { BuildWithGaia } from "@/components/sections/BuildWithGaia";
import { Community } from "@/components/sections/Community";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <ThemeProvider>
      <CursorTrail />
      <Navigation />
      <main>
        <Hero />
        <About />
        <TalkToGaia />
        <Ecosystem />
        <HowItWorks />
        <PROI />
        <GaiaIRL />
        <GaianTimes />
        <RegenDigest />
        <Talks />
        <SymbioceneticFutures />
        <Gaiachads />
        <Greenpaper />
        <BuildWithGaia />
        <Community />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
