import { Database, Link2, Satellite, Workflow } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { ChatWindow } from "../chat/ChatWindow";

const ABILITIES = [
  { icon: Satellite, label: "Query satellite monitoring data", color: "text-green" },
  { icon: Link2, label: "Check Regen Ledger ecocredit data", color: "text-cyan" },
  { icon: Workflow, label: "Explore registry review pipeline", color: "text-amber" },
  { icon: Database, label: "Learn about our technology stack", color: "text-green" },
];

export function TalkToGaia() {
  return (
    <Section id="talk-to-gaia">
      <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            label="Talk to Gaia"
            title="Ask Gaia anything about the regenerative economy"
            intro={
              <p>
                Gaia is grounded in verified knowledge — the greenpaper, Regen
                Network documentation, and live blockchain data. No
                hallucinations.
              </p>
            }
          />
          <ul className="mt-10 space-y-3.5">
            {ABILITIES.map((a) => (
              <li key={a.label} className="flex items-center gap-3.5 text-[15px] text-foreground/85">
                <a.icon size={17} aria-hidden className={a.color} />
                {a.label}
              </li>
            ))}
          </ul>
        </div>

        <ChatWindow />
      </div>
    </Section>
  );
}
