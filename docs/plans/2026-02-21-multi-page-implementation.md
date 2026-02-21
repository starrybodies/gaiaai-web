# Multi-Page Architecture Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add dedicated routes for Ecosystem, Knowledge, and Community pages while keeping the homepage intact with all sections.

**Architecture:** Next.js App Router pages that compose existing section components. A shared layout provides Navigation, Footer, ThemeProvider, and Framer Motion slide transitions. Navigation links update to use Next.js Link for client-side routing.

**Tech Stack:** Next.js 16 App Router, React 19, Framer Motion, TypeScript

---

### Task 1: Create PageTransition wrapper component

**Files:**
- Create: `src/components/PageTransition.tsx`

**Step 1: Create the transition wrapper**

```tsx
"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 60 },
  enter: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -60 },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/PageTransition.tsx
git commit -m "feat: add PageTransition component for slide animations"
```

---

### Task 2: Move shared providers into layout, update home page

Currently `page.tsx` wraps everything in ThemeProvider + Navigation + CursorTrail + Footer. These need to move to the root layout so all pages share them.

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Update layout.tsx to include shared providers**

Add `"use client"` imports won't work in the root layout (it exports metadata). Instead, create a client layout wrapper.

Create `src/components/ClientLayout.tsx`:

```tsx
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
```

**Step 2: Update layout.tsx to use ClientLayout**

In `src/app/layout.tsx`, wrap `{children}` with the ClientLayout:

```tsx
import { ClientLayout } from "@/components/ClientLayout";

// ... keep existing metadata export unchanged ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* keep existing head content */}
      </head>
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
```

**Step 3: Simplify page.tsx**

Remove ThemeProvider, CursorTrail, Navigation, and Footer from page.tsx since they're now in the layout:

```tsx
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

export default function Home() {
  return (
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
  );
}
```

**Step 4: Verify the dev server runs and homepage still works**

```bash
cd /Users/samu/gaiaai-web && npm run dev
```

Open `http://localhost:3000` — all sections should render with slide-in animation on load.

**Step 5: Commit**

```bash
git add src/components/ClientLayout.tsx src/app/layout.tsx src/app/page.tsx
git commit -m "refactor: move shared providers to ClientLayout wrapper"
```

---

### Task 3: Create Ecosystem page

**Files:**
- Create: `src/app/ecosystem/page.tsx`

**Step 1: Create the ecosystem page**

```tsx
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
```

Note: `pt-24` adds top padding to account for the fixed navigation header.

**Step 2: Verify at `http://localhost:3000/ecosystem`**

All three sections should render with the slide-in animation.

**Step 3: Commit**

```bash
git add src/app/ecosystem/page.tsx
git commit -m "feat: add /ecosystem page"
```

---

### Task 4: Create Knowledge page

**Files:**
- Create: `src/app/knowledge/page.tsx`

**Step 1: Create the knowledge page**

```tsx
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
```

**Step 2: Verify at `http://localhost:3000/knowledge`**

**Step 3: Commit**

```bash
git add src/app/knowledge/page.tsx
git commit -m "feat: add /knowledge page"
```

---

### Task 5: Create Community page

**Files:**
- Create: `src/app/community/page.tsx`

**Step 1: Create the community page**

```tsx
import { Community } from "@/components/sections/Community";
import { Gaiachads } from "@/components/sections/Gaiachads";

export const metadata = {
  title: "Community — Gaia AI",
  description: "Join the Gaia AI community: governance, $GAIA token, and Gaiachads NFTs.",
};

export default function CommunityPage() {
  return (
    <main>
      <div className="pt-24" />
      <Community />
      <Gaiachads />
    </main>
  );
}
```

**Step 2: Verify at `http://localhost:3000/community`**

**Step 3: Commit**

```bash
git add src/app/community/page.tsx
git commit -m "feat: add /community page"
```

---

### Task 6: Update navigation to use Next.js Link for routes

**Files:**
- Modify: `src/lib/constants.ts`
- Modify: `src/components/Navigation.tsx`

**Step 1: Update NAV_LINKS in constants.ts**

```ts
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Talk to Gaia", href: "#talk-to-gaia" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Community", href: "/community" },
] as const;
```

Also update `FOOTER_LINKS.navigation`:

```ts
navigation: [
  { label: "About", href: "#about" },
  { label: "Talk to Gaia", href: "#talk-to-gaia" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "PROI", href: "/knowledge#proi" },
  { label: "Greenpaper", href: "/knowledge#greenpaper" },
  { label: "Community", href: "/community" },
],
```

**Step 2: Update Navigation.tsx to handle both anchors and routes**

Import Next.js `Link` and update the navigation to use `<Link>` for route links and `<a>` with smooth scroll for anchor links:

```tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

function isAnchorLink(href: string) {
  return href.startsWith("#");
}

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  if (href === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Use NavLink component that renders <a> for anchors, <Link> for routes
function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  if (isAnchorLink(href)) {
    return (
      <a
        href={href}
        onClick={(e) => {
          smoothScroll(e, href);
          onClick?.();
        }}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}
```

Then replace all nav link `<a>` tags with `<NavLink>` in both desktop and mobile menus.

**Step 3: Update logo link to use Link**

The logo `<a href="#">` should become `<Link href="/">` so it navigates home from any page.

**Step 4: Verify navigation works**

- From homepage: anchor links scroll, route links navigate to new pages
- From sub-pages: logo goes home, links work correctly
- Mobile menu works on all pages

**Step 5: Commit**

```bash
git add src/lib/constants.ts src/components/Navigation.tsx
git commit -m "feat: update navigation for multi-page routing"
```

---

### Task 7: Update Footer for multi-page routing

**Files:**
- Modify: `src/components/sections/Footer.tsx`

**Step 1: Update Footer to use Link for route hrefs**

Similar to Navigation — use `<Link>` for route paths, `<a>` for anchors and external URLs. Import the constants update from Task 6.

**Step 2: Commit**

```bash
git add src/components/sections/Footer.tsx
git commit -m "feat: update footer links for multi-page routing"
```

---

### Task 8: Final verification and cleanup

**Step 1: Test all routes**

- `http://localhost:3000` — all 16 sections, anchor scroll works
- `http://localhost:3000/ecosystem` — 3 sections with slide-in
- `http://localhost:3000/knowledge` — 6 sections with slide-in
- `http://localhost:3000/community` — 2 sections with slide-in

**Step 2: Test navigation flow**

- Click nav links from home → sub-pages (slide transition)
- Click logo from sub-pages → home (slide transition)
- Mobile menu works on all pages
- Theme toggle persists across pages
- Browser back/forward works

**Step 3: Test responsive**

- All pages render correctly on mobile
- Mobile menu updated with new routes

**Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete multi-page architecture with slide transitions"
```
