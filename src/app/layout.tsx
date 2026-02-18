import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gaiaai.xyz"),
  title: "Gaia AI — Artificial Intelligence in Service to the Living World",
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
    title: "Gaia AI — Artificial Intelligence in Service to the Living World",
    description:
      "Agentic AI meets ecological blockchain infrastructure for the regenerative economy.",
    type: "website",
    url: "https://gaiaai.xyz",
    images: [{ url: "/gaia-coded.gif", width: 1200, height: 1200 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaia AI — Artificial Intelligence in Service to the Living World",
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
      <body className={`${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
