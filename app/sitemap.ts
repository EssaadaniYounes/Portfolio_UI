import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.essaadani.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.essaadani.dev/skills",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.essaadani.dev/projects",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://www.essaadani.dev/experience",
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: "https://www.essaadani.dev/contact",
      lastModified: new Date(),
      priority: 0.6,
    },
  ];
}
