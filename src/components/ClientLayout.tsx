"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { CursorTrail } from "@/components/ui/CursorTrail";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/sections/Footer";
import { PageTransition } from "@/components/PageTransition";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CursorTrail />
      <Navigation />
      <PageTransition>
        {children}
      </PageTransition>
      <Footer />
    </ThemeProvider>
  );
}
