import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://essaadani.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://essaadani.dev/skills",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://essaadani.dev/projects",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://essaadani.dev/experience",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://essaadani.dev/contact",
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}
