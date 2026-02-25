import { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.domain;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/comunidade`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/mentoria`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/boxify`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/granjatexas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projetos`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
