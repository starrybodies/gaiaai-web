import { SOCIAL_LINKS, GREENPAPER_CONCEPTS, TALKS } from "./constants";

const SITE_URL = "https://gaiaai.xyz";
const SITE_NAME = "Gaia AI";
const SITE_DESCRIPTION =
  "Gaia AI is a research lab building the ecological superintelligence layer: agents that reason across Earth observation, material flows and ecological registries, with the evidence attached.";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/gaia-coded.gif`,
    description: SITE_DESCRIPTION,
    foundingDate: "2024",
    sameAs: SOCIAL_LINKS.map((link) => link.href),
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@gaiaai.xyz",
      contactType: "general",
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/#talk-to-gaia?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

const EXTRA_FAQ_ENTRIES = [
  {
    question: "What is Gaia AI?",
    answer:
      "Gaia AI is a research lab building the ecological superintelligence layer: agents that reason across satellite imagery, material flow accounts and ecological registries, and show the evidence behind each answer. Its first public instrument is Overshoot, a planetary atlas of material flows at overshoot.gaiaai.xyz. The full layer is in private development.",
  },
  {
    question: "What is Overshoot?",
    answer:
      "Overshoot is a planetary atlas of material flows built by Gaia AI. It traces the oil, ores, crops and manufactured materials behind everyday life through extraction, production, trade, use and waste, with the source behind each figure. Data is available as open downloads and through an MCP server at overshoot.gaiaai.xyz.",
  },
  {
    question: "What are ecocredits?",
    answer:
      "Ecocredits are on-chain tokens issued on Regen Ledger (Cosmos SDK) that represent verified ecological outcomes such as carbon sequestration, biodiversity restoration, or water cycle improvement. They pass through a seven-stage registry review before issuance and can be traded on the marketplace or retired to claim environmental impact.",
  },
  {
    question: "What is the Gaian Times?",
    answer:
      "The Gaian Times is an AI-curated news platform by Gaia AI that draws from over 90 sources covering rewilding, clean energy, indigenous wisdom, and the emerging Symbiocene. It is available at times.gaiaai.xyz.",
  },
  {
    question: "What is the Encyclopedia of Regeneration?",
    answer:
      "The Encyclopedia of Regeneration (EOR) is a comprehensive knowledge base built by Gaia AI that catalogs regenerative practices, ecological concepts, and restoration methodologies. It is available at eor.gaiaai.xyz.",
  },
];

export function faqPageSchema() {
  const greenpaper = GREENPAPER_CONCEPTS.map((concept) => ({
    "@type": "Question" as const,
    name: `What is ${concept.title}?`,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: concept.description,
    },
  }));

  const extra = EXTRA_FAQ_ENTRIES.map((entry) => ({
    "@type": "Question" as const,
    name: entry.question,
    acceptedAnswer: {
      "@type": "Answer" as const,
      text: entry.answer,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...extra, ...greenpaper],
  };
}

export function webPageSchema(params: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.url}`,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.url}`,
      })),
    ],
  };
}

export function videoObjectSchema(talk: (typeof TALKS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: talk.title,
    description: talk.description,
    thumbnailUrl: `https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${talk.videoId}`,
    uploadDate: talk.uploadDate,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
