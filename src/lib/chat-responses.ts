interface ResponseRule {
  keywords: string[];
  response: string;
  toolUse?: { tool: string; duration: number; result: string };
}

const KNOWLEDGE_BASE: ResponseRule[] = [
  {
    keywords: ["what", "gaia", "who", "about"],
    response:
      "Gaia AI is a decentralized intelligence network that fuses agentic AI with ecological blockchain infrastructure. Born from a partnership with Regen Network, we operate at the intersection of environmental monitoring, verified ecological credit systems, and community-governed regenerative finance.\n\nWe presented at the United Nations in September 2025. We're building the intelligence layer for Earth's regenerative economy.",
  },
  {
    keywords: ["how", "work", "technical", "architecture", "layer"],
    response:
      "Gaia operates across three interconnected layers:\n\n**1. Intelligence Layer** — AI agents powered by Claude and ElizaOS analyze satellite imagery, synthesize environmental data, and search the KOI knowledge network to produce actionable ecological intelligence.\n\n**2. Verification Layer** — Every ecological claim passes through Regen Network's seven-stage registry review, from project registration through methodology review, monitoring, and verification.\n\n**3. Settlement Layer** — Verified ecological outcomes are issued as on-chain ecocredits on Regen Ledger (Cosmos SDK). Credits can be traded or retired to claim environmental impact.",
  },
  {
    keywords: ["regen", "ledger", "blockchain", "chain", "ecocredit", "registry"],
    response:
      "Regen Network is a blockchain platform built on Cosmos SDK for ecological assets and data. Regen Ledger enables creation, trading, and retirement of ecocredits.\n\nThe Regen Registry provides a 7-stage review pipeline for credit class and project approval: project registration → methodology review → monitoring plan → credit issuance → verification → trading → retirement.\n\nGaia AI serves as the intelligence layer, using AI to accelerate review without replacing human oversight.",
    toolUse: {
      tool: "Querying Regen Ledger",
      duration: 2500,
      result: "Active credit classes: 14 | Registered projects: 847 | Total ecocredits issued: 2.4M | Network validators: 142",
    },
  },
  {
    keywords: ["carbon", "credit", "ecocredit", "offset", "class"],
    response:
      "Ecocredits on Regen Ledger include carbon, biodiversity, and ecosystem service credits. Each credit passes through the 7-stage registry review pipeline backed by Regen Ledger on Cosmos SDK.\n\nGaia AI uses satellite analysis and multi-modal data synthesis to verify ecological claims, accelerating the MRV (Monitoring, Reporting, Verification) process while maintaining human oversight at every stage.",
    toolUse: {
      tool: "Querying Regen Registry",
      duration: 2000,
      result: "Active ecocredit classes: Carbon (C01-C08), Biodiversity (B01-B03), Ecosystem Services (E01-E03) | 847 projects across 43 countries",
    },
  },
  {
    keywords: ["symbiocene", "era", "anthropocene"],
    response:
      "The Symbiocene is the era after the Anthropocene — where biological and digital intelligence collaborate for planetary healing. It's not a utopia, but a conscious redirection of exponential technology toward regenerative ends.\n\nAs we describe in our Greenpaper: \"The time has come to weave together the threads of human wisdom traditions, scientific knowledge, and artificial intelligence into a new planetary nervous system.\"",
  },
  {
    keywords: ["proi", "planetary", "return", "investment", "metric"],
    response:
      "Planetary Return on Investment (PROI) replaces narrow financial ROI with a multi-dimensional metric: carbon sequestered, biodiversity restored, water cycles healed, communities empowered.\n\nEvery dollar is measured against ecological impact. We use PROI to assess grant applications (like our Regen IRL $888 micro-grants) and to help climate funds make data-driven regenerative investment decisions.",
  },
  {
    keywords: ["ecohyperstition", "hyperstition", "narrative"],
    response:
      "Ecohyperstition is a self-fulfilling prophecy where collective belief in ecological renewal — amplified by agentic intelligence — creates the material conditions for it. Fiction that makes itself real through coordinated action.\n\nIt's the thesis that exponential technology should be redirected toward regenerative ends — what we call regenerative accelerationism (r/acc).",
  },
  {
    keywords: ["greenpaper", "paper", "vision"],
    response:
      "The Gaia Greenpaper introduces three foundational concepts:\n\n1. **The Symbiocene** — The era after the Anthropocene where biological and digital intelligence collaborate for planetary healing.\n2. **PROI (Planetary Return on Investment)** — A multi-dimensional metric measuring ecological impact per dollar across carbon, biodiversity, water, and social dimensions.\n3. **Ecohyperstition** — A self-fulfilling prophecy where collective belief in ecological renewal creates the material conditions for it.\n\nThese ideas form the philosophical and technical foundation for Gaia AI's mission.",
  },
  {
    keywords: ["batis", "colombia", "mangrove", "blue carbon"],
    response:
      "Fundacion Batis is our blue carbon credit platform for Colombian mangrove restoration. It's powered by satellite analysis and MRV (Monitoring, Reporting, and Verification).\n\nThe project is currently in development, using Gaia's Intelligence Layer to analyze satellite imagery of mangrove ecosystems and verify restoration claims through the Regen Registry pipeline.",
    toolUse: {
      tool: "Querying Fundacion Batis Data",
      duration: 1800,
      result: "Project status: In Development | Location: Colombian Caribbean coast | Focus: Blue carbon / Mangrove restoration | Verification: Regen Registry",
    },
  },
  {
    keywords: ["token", "gaia", "$gaia", "governance"],
    response:
      "The $GAIA governance token was launched via Virtuals Protocol on Base L2 in January 2025. Token holders participate in community governance, directing resources toward maximally regenerative projects.\n\nThe token governs the intelligence layer — helping decide which ecological data sources to prioritize, which projects receive support, and how the network evolves.\n\nI can't provide financial advice or speculation about token value — please do your own research.",
  },
  {
    keywords: ["satellite", "imagery", "monitor", "ndvi"],
    response:
      "Our Intelligence Layer processes satellite imagery using AI-powered analysis pipelines. We analyze multi-spectral data including NDVI (vegetation health), land cover change, and carbon stock estimation.\n\nThis data feeds into the Verification Layer, where it's cross-referenced with ground-truth data and community observations to validate ecological claims through the Regen Registry.",
  },
  {
    keywords: ["koi", "knowledge", "search", "blockscience"],
    response:
      "KOI (Knowledge Organization Infrastructure) is a federated semantic search system across regenerative ecology data, built in collaboration with BlockScience.\n\nIt powers Gaia's ability to search and synthesize information from across the regenerative ecology knowledge base — academic papers, project documentation, registry data, and community contributions.",
  },
  {
    keywords: ["build", "develop", "api", "partner", "collaborate"],
    response:
      "We partner with carbon registries, conservation foundations, MRV providers, and climate funds to deploy AI-powered environmental monitoring and verification at scale.\n\nOur technology stack includes three custom MCP servers (regen-koi for knowledge search, regen-python-mcp for on-chain data, Registry Review for document verification), built on ElizaOS multi-agent architecture.\n\nReach out at hello@gaiaai.xyz or join our Discord to start the conversation.",
  },
  {
    keywords: ["un", "united nations", "presentation"],
    response:
      "Gaia AI presented at the United Nations in September 2025, demonstrating how AI can make environmental data legible, actionable, and economically viable.\n\nThe presentation showcased our three-layer architecture and the partnership with Regen Network for blockchain-verified ecological credits.",
  },
  {
    keywords: ["grant", "irl", "888", "micro"],
    response:
      "Regen IRL Grants provide $888 micro-grants for maximally regenerative on-the-ground projects. Round 1 is complete.\n\nApplications are assessed by AI agents using our Planetary Return on Investment (PROI) framework, measuring ecological impact across carbon, biodiversity, water, and social dimensions.",
  },
  {
    keywords: ["founder", "team", "samu", "who built"],
    response:
      "Gaia AI was founded by Samu, who previously scaled Worldcoin communities and holds a Columbia MPA in Environmental Science and Policy.\n\nThe project is built at the intersection of AI, ecology, and blockchain — with the partnership with Regen Network formalized in August 2025 and the UN presentation delivered in September 2025.",
  },
  {
    keywords: ["elizaos", "agent", "mcp", "server"],
    response:
      "Gaia is built on ElizaOS multi-agent architecture with three custom MCP (Model Context Protocol) servers:\n\n1. **regen-koi** — Knowledge search across the regenerative ecology knowledge base\n2. **regen-python-mcp** — On-chain data queries from Regen Ledger\n3. **Registry Review** — Document verification for the Regen Registry pipeline\n\nAI reasoning is powered by Claude (Anthropic), with custom satellite analysis pipelines for environmental monitoring.",
  },
];

const FALLBACK_RESPONSE =
  "I don't have detailed information on that yet. I can tell you about Gaia AI's mission, our partnership with Regen Network, the Greenpaper concepts (Symbiocene, PROI, Ecohyperstition), our ecosystem projects, or how our three-layer architecture works.\n\nYou can also reach our team at hello@gaiaai.xyz or join our Discord for more.";

export function generateResponse(message: string): {
  response: string;
  toolUse?: { tool: string; duration: number; result: string };
} {
  const lower = message.toLowerCase();

  let bestMatch: ResponseRule | null = null;
  let bestScore = 0;

  for (const rule of KNOWLEDGE_BASE) {
    const score = rule.keywords.reduce(
      (acc, kw) => acc + (lower.includes(kw) ? 1 : 0),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      bestMatch = rule;
    }
  }

  if (bestMatch && bestScore > 0) {
    return {
      response: bestMatch.response,
      toolUse: bestMatch.toolUse,
    };
  }

  return { response: FALLBACK_RESPONSE };
}

export const SUGGESTED_PROMPTS = [
  "What is Gaia AI and how does it work?",
  "Show me active ecocredit classes on Regen",
  "How does the Regen Registry review process work?",
  "What is the Symbiocene?",
  "Tell me about the Fundacion Batis project",
  "What is Planetary Return on Investment (PROI)?",
];
