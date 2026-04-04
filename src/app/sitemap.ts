import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: "2026-04-04",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/mentions-legales`,
      lastModified: "2026-04-04",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/confidentialite`,
      lastModified: "2026-04-04",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteConfig.url}/cgu`,
      lastModified: "2026-04-04",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
