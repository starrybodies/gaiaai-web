import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://gaiaai.xyz", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://gaiaai.xyz/ecosystem", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gaiaai.xyz/knowledge", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://gaiaai.xyz/community", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
