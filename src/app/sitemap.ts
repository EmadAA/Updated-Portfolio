import type { MetadataRoute } from "next";
import { PROJECTS } from "@/data/portfolio";

const BASE = (
  "https://emad-uddin-adil.vercel.app"
).replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, priority: 1 },
    { url: `${BASE}/projects`, lastModified: now, priority: 0.8 },
    ...PROJECTS.map((p) => ({
      url: `${BASE}/projects/${p.id}`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}