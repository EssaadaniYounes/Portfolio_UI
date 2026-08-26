import { MetadataRoute } from "next";
import { projects } from "@/lib/constants";
import { expertisePages } from "@/lib/expertise";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `https://www.essaadani.dev/${project.slug}/overview`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));
  const expertiseRoutes: MetadataRoute.Sitemap = expertisePages.map((item) => ({
    url: `https://www.essaadani.dev/expertise/${item.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: "https://www.essaadani.dev",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...projectPages,
    ...expertiseRoutes,
  ];
}
