import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030806",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gaiaai.xyz"),
  title: {
    default: "Gaia AI — The Ecological Superintelligence Layer",
    template: "%s | Gaia AI",
  },
  description:
    "Gaia AI is a research lab building the ecological superintelligence layer: agents that reason across Earth observation, material flows and ecological registries, with the evidence attached.",
  keywords: [
    "Gaia AI",
    "ecological superintelligence",
    "Overshoot",
    "material flows",
    "regenerative economy",
    "ecocredits",
    "Regen Network",
    "satellite monitoring",
    "ecological AI",
    "Symbiocene",
    "PROI",
    "Planetary Return on Investment",
    "ecohyperstition",
    "green carbon credits",
    "blue carbon credits",
    "regenerative AI",
    "ecological blockchain",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Gaia AI — The Ecological Superintelligence Layer",
    description:
      "A research lab building the ecological superintelligence layer. Overshoot, its planetary atlas of material flows, is live now.",
    type: "website",
    siteName: "Gaia AI",
    url: "https://gaiaai.xyz",
    images: [{ url: "/gaia-coded.gif", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GaiaAIxyz",
    creator: "@GaiaAIxyz",
    title: "Gaia AI — The Ecological Superintelligence Layer",
    description:
      "A research lab building the ecological superintelligence layer. Overshoot, its planetary atlas of material flows, is live now.",
    images: ["/gaia-coded.gif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${jetbrainsMono.variable} ${plexSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        <style dangerouslySetInnerHTML={{ __html: `html{scroll-behavior:auto}` }} />
        <script
          dangerouslySetInnerHTML={{
            __html: [
              `if(history.scrollRestoration)history.scrollRestoration="manual";`,
              `window.scrollTo(0,0);`,
              `document.documentElement.style.overflow="hidden";`,
              `window.addEventListener("load",function(){`,
              `  window.scrollTo(0,0);`,
              `  document.documentElement.style.overflow="";`,
              `});`,
              `(function(){try{var t=localStorage.getItem("gaia-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`,
            ].join(""),
          }}
        />
      </head>
      <body className="antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
