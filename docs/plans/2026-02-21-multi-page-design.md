# Multi-Page Architecture Design

## Summary

Convert the Gaia AI single-page website into a multi-page site with 4 routes, while keeping the homepage intact with all 16 sections.

## Page Structure

| Route | Page | Sections |
|-------|------|----------|
| `/` | Home | All 16 sections (unchanged) |
| `/ecosystem` | Ecosystem | Ecosystem, BuildWithGaia, GaiaIRL |
| `/knowledge` | Knowledge & Media | Greenpaper, PROI, SymbioceneticFutures, GaianTimes, RegenDigest, Talks |
| `/community` | Community | Community, Gaiachads |

## Architecture

- Next.js App Router: each route gets a `page.tsx` composing existing section components
- No component duplication: sections imported into both homepage and dedicated pages
- Shared layout with Navigation + Footer wrapping all pages
- Framer Motion `AnimatePresence` in layout for slide transitions between routes
- Each page slides in from right on enter, slides left on exit

## Navigation Updates

- Desktop nav links point to routes: `/ecosystem`, `/knowledge`, `/community`
- Homepage retains anchor scroll for in-page navigation
- Each sub-page has anchor-based section navigation for its sections
- Mobile hamburger menu updated with new routes

## What Stays the Same

- All existing section components unchanged, just re-imported
- Homepage keeps all 16 sections as-is
- Theme system, 3D globe, chat, scroll animations preserved
- API routes unchanged

## Transitions

Framer Motion slide transitions:
- Enter: slide in from right with opacity fade
- Exit: slide out to left with opacity fade
- Duration: ~300ms
