import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-matrix",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaiaai.xyz"),
  title: "Gaia AI — Intelligence in Service of the Living World",
  description:
    "Gaia AI fuses agentic AI with ecological blockchain infrastructure to make environmental data legible, actionable, and economically viable.",
  keywords: [
    "Gaia AI",
    "regenerative economy",
    "ecocredits",
    "Regen Network",
    "satellite monitoring",
    "ecological AI",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Gaia AI — Intelligence in Service of the Living World",
    description:
      "Agentic AI meets ecological blockchain infrastructure for the regenerative economy.",
    type: "website",
    url: "https://gaiaai.xyz",
    images: [{ url: "/gaia-coded.gif", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaia AI — Intelligence in Service of the Living World",
    description:
      "Agentic AI meets ecological blockchain infrastructure for the regenerative economy.",
    images: ["/gaia-coded.gif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration="manual";window.scrollTo(0,0);(function(){try{var t=localStorage.getItem("gaia-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${instrumentSerif.variable} ${jetbrainsMono.variable} ${shareTechMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
