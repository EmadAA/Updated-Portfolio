import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/portfolio";

const BASE = "https://emad-uddin-adil.vercel.app/";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date(), priority: 1 },
    { url: `${BASE}/projects`, lastModified: new Date(), priority: 0.8 },
    ...PROJECTS.map((p) => ({
      url: `${BASE}/projects/${p.id}`,
      lastModified: new Date(),
      priority: 0.6,
    })),
  ];
}