import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rawaha.online",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: "https://rawaha.online/services",
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: "https://rawaha.online/contact",
      lastModified: new Date(),
      priority: 0.6
    }
  ];
}
