export const OVERSHOOT_URL = "https://overshoot.gaiaai.xyz";
export const EARLY_ACCESS_HREF =
  "mailto:hello@gaiaai.xyz?subject=Early%20access%20to%20Gaia%20AI";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Talk to Gaia", href: "#talk-to-gaia" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Knowledge", href: "/knowledge" },
  { label: "Overshoot", href: "https://overshoot.gaiaai.xyz" },
  { label: "Community", href: "/community" },
] as const;

export const ECOSYSTEM_PROJECTS = [
  {
    name: "Overshoot",
    description: "A planetary atlas of material flows. It traces extraction, trade, use and waste by place and material, with the source behind each figure.",
    status: "Live" as const,
    icon: "O>",
  },
  {
    name: "Regen AI",
    description: "Joint venture with Regen Network — AI-powered environmental analysis and blockchain ecocredit infrastructure.",
    status: "Active" as const,
    icon: "R>",
  },
  {
    name: "Fundacion Batis",
    description: "Blue carbon credit platform for Colombian mangrove restoration, powered by satellite analysis and MRV.",
    status: "In Development" as const,
    icon: "~>",
  },
  {
    name: "KOI Knowledge Network",
    description: "Knowledge Organization Infrastructure — federated semantic search across regenerative ecology data. Built with BlockScience.",
    status: "Active" as const,
    icon: "?>",
  },
  {
    name: "Regen IRL Grants",
    description: "$888 micro-grants for maximally regenerative on-the-ground projects, assessed by AI agents for Planetary Return on Investment.",
    status: "Complete" as const,
    icon: "$$",
  },
  {
    name: "The Gaian Times",
    description: "AI-curated news platform drawing from 90+ sources — rewilding, clean energy, indigenous wisdom, and the emerging Symbiocene.",
    status: "Active" as const,
    icon: ">>",
  },
  {
    name: "Policy & Advocacy",
    description: "Sharing the regenerative AI vision with international institutions, demonstrating how intelligent systems can serve planetary health.",
    status: "Active" as const,
    icon: "//",
  },
] as const;

export const PARTNERS = [
  { name: "Regen Network", href: "https://regen.network", logo: "/logos/regen.svg" },
  { name: "BlockScience", href: "https://block.science", logo: "/logos/blockscience.svg" },
] as const;

export const HOW_IT_WORKS_LAYERS = [
  {
    title: "Intelligence Layer",
    subtitle: "AI Agents · KOI Search · Satellite Analysis · Material Flows",
    description: "AI agents powered by Claude and ElizaOS analyze satellite imagery, trace material flows through Overshoot, and search the KOI knowledge network to produce ecological intelligence with its sources attached.",
    items: ["Claude reasoning", "ElizaOS agents", "Satellite imagery", "Material flows", "KOI semantic search"],
    color: "green" as const,
  },
  {
    title: "Verification Layer",
    subtitle: "Regen Registry · MRV · 7-Stage Pipeline",
    description: "Every ecological claim passes through Regen Network's seven-stage registry review — from project registration through methodology review, monitoring, and verification. AI accelerates review without replacing human oversight.",
    items: ["Project registration", "Methodology review", "MRV monitoring", "Human verification"],
    color: "cyan" as const,
  },
  {
    title: "Settlement Layer",
    subtitle: "Regen Ledger · Ecocredits · Marketplace",
    description: "Verified ecological outcomes are issued as on-chain ecocredits on Regen Ledger (Cosmos SDK). Credits can be traded on the marketplace or retired to claim environmental impact.",
    items: ["Ecocredit issuance", "Marketplace trading", "Credit retirement"],
    color: "amber" as const,
  },
] as const;

export const GREENPAPER_CONCEPTS = [
  {
    title: "The Symbiocene",
    icon: "SYM",
    description: "An evolutionary era representing humanity's transition from accidental planetary disruptors to intentional cultivators of life's flourishing. This paradigm weaves together artificial intelligence, human wisdom, and nature's regenerative capacity.",
    quote: "The time has come to weave together the threads of human wisdom traditions, scientific knowledge and artificial intelligence into a new planetary nervous system that can sense, respond to, and direct resources to regenerate the biosphere.",
    color: "green" as const,
  },
  {
    title: "PROI",
    icon: "ROI",
    description: "Planetary Return on Investment replaces narrow financial ROI with a multi-dimensional metric: carbon sequestered, biodiversity restored, water cycles healed, communities empowered. Every dollar measured against ecological impact.",
    quote: "What if every transaction made the planet healthier?",
    color: "cyan" as const,
  },
  {
    title: "Ecohyperstition",
    icon: "ECO",
    description: "Ideas or narratives that work to make themselves real. By vividly envisioning a flourishing biosphere, societies can help bring these visions to fruition through collective belief, research, and action.",
    quote: "When communities embrace compelling blueprints of regenerative futures, they mobilize resources, shape policy, and influence cultural values.",
    color: "amber" as const,
  },
] as const;

export const PARTNER_TYPES = [
  {
    type: "Carbon Registries",
    icon: "CR",
    description: "Accelerate credit issuance with AI-powered MRV and satellite analysis.",
  },
  {
    type: "Conservation Foundations",
    icon: "CF",
    description: "Build blue and green carbon platforms for your restoration projects.",
  },
  {
    type: "Climate Funds & Investors",
    icon: "FI",
    description: "Data-driven PROI analysis for regenerative investment decisions.",
  },
  {
    type: "MRV Providers",
    icon: "MV",
    description: "Integrate AI verification into your monitoring, reporting, and verification workflows.",
  },
  {
    type: "Early-Stage Investors",
    icon: "VC",
    description: "Follow the lab from research preview to the first full release of the layer.",
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "Twitter / X", href: "https://x.com/GaiaAIxyz", icon: "twitter" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/gaiaaiagent/", icon: "linkedin" },
  { label: "YouTube", href: "https://youtube.com/@gaiaaiagent", icon: "youtube" },
  { label: "Facebook", href: "https://facebook.com/gaiaai", icon: "facebook" },
  { label: "Manifold NFTs", href: "https://manifold.gallery/gaiaai", icon: "manifold" },
  { label: "GitHub", href: "https://github.com/gaiaaiagent", icon: "github" },
] as const;

export const TALKS = [
  {
    title: "GAIA LIVE 001: ETHDenver Main Regen Stage",
    event: "ETHDenver, Feb 27 2025",
    description:
      "Presenting the architecture of agentic intelligence for ecological verification — from satellite imagery to on-chain ecocredits.",
    videoId: "7KmiDvHXcQA",
    uploadDate: "2025-02-27",
  },
  {
    title: "GAIA LIVE 002: GAIA AI @ the UN Biodiversity Council",
    event: "United Nations, May 5 2025",
    description:
      "How intelligent systems can make environmental data legible, actionable, and economically viable at planetary scale.",
    videoId: "l39u1BIqnN4",
    uploadDate: "2025-05-05",
  },
  {
    title: "GAIA LIVE 003: GAIA CEO Samu @ the UN GLOCHA Summit",
    event: "UN Emerging Technologies Summit, Sep 18 2025",
    description:
      "The convergence of AI and ecological blockchain infrastructure for the regenerative economy.",
    videoId: "etqUCny5tCk",
    uploadDate: "2025-09-18",
  },
  {
    title: "GAIA POD 001: Interview with Ayowecca Uganda",
    event: "GAIA POD, 2025",
    description:
      "Exploring regenerative practices and community-led conservation in East Africa.",
    videoId: "b7Ikyq6a1os",
    uploadDate: "2025-01-15",
  },
] as const;

export const FOOTER_LINKS = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Talk to Gaia", href: "#talk-to-gaia" },
    { label: "Ecosystem", href: "/ecosystem" },
    { label: "PROI", href: "/knowledge#proi" },
    { label: "Greenpaper", href: "/knowledge#greenpaper" },
    { label: "Community", href: "/community" },
  ],
  resources: [
    { label: "Overshoot", href: "https://overshoot.gaiaai.xyz" },
    { label: "Encyclopedia of Regeneration", href: "https://eor.gaiaai.xyz" },
    { label: "Greenpaper", href: "https://github.com/gaiaaiagent/greenpaper" },
    { label: "The Gaian Times", href: "https://times.gaiaai.xyz" },
    { label: "Regen Digest", href: "https://digest.gaiaai.xyz" },
    { label: "Symbiocenetic Futures", href: "https://futures.gaiaai.xyz" },
    { label: "Blog", href: "https://paragraph.com/@gaiaai" },
  ],
  connect: [
    { label: "Twitter", href: "https://x.com/GaiaAIxyz" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/gaiaaiagent/" },
    { label: "YouTube", href: "https://youtube.com/@gaiaaiagent" },
    { label: "Facebook", href: "https://facebook.com/gaiaai" },
    { label: "Manifold NFTs", href: "https://manifold.gallery/gaiaai" },
    { label: "GitHub", href: "https://github.com/gaiaaiagent" },
    { label: "hello@gaiaai.xyz", href: "mailto:hello@gaiaai.xyz" },
  ],
} as const;
