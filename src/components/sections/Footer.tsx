import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/gaia-logo.png"
                alt="Gaia AI"
                width={32}
                height={32}
                className="brightness-90"
              />
              <span className="text-xl font-bold text-green">GAIA AI</span>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              Intelligence in service of the living world.
            </p>
            <p className="text-xs text-muted/60">
              &copy; 2025–2026 Gaia AI
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.navigation.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Zora banner */}
        <div className="mt-12 pt-8 border-t border-border">
          <a
            href="https://zora.co/@gaiaai"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 py-3 text-sm text-amber/70 hover:text-amber transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
            Support Gaia — Buy our Creator Token on Zora
            <span className="text-xs">&#8599;</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="mt-4 pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <span>Built for the living world</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green" />
            Partnered with Regen Network
          </span>
        </div>
      </div>
    </footer>
  );
}
