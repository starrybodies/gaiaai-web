import { SOCIAL_LINKS, GREENPAPER_CONCEPTS, TALKS } from "./constants";

const SITE_URL = "https://gaiaai.xyz";
const SITE_NAME = "Gaia AI";
const SITE_DESCRIPTION =
  "Gaia AI fuses agentic AI with ecological blockchain infrastructure to make environmental data legible, actionable, and economically viable.";

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
  };
}

export function faqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GREENPAPER_CONCEPTS.map((concept) => ({
      "@type": "Question",
      name: `What is ${concept.title}?`,
      acceptedAnswer: {
        "@type": "Answer",
        text: concept.description,
      },
    })),
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

export function videoObjectSchema(talk: (typeof TALKS)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: talk.title,
    description: talk.description,
    thumbnailUrl: `https://img.youtube.com/vi/${talk.videoId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${talk.videoId}`,
    uploadDate: talk.event.includes("2025") ? "2025-01-01" : "2024-01-01",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
