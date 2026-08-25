import { MetadataRoute } from "next";
import { projects } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://www.essaadani.dev/${project.slug}/overview`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.essaadani.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectPages,
  ];
}
