import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gutachten-ai.de";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/funktionen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ablauf`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/ki-gutachten-2025`, lastModified: new Date("2026-03-24"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/din-normen-ki`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/zeitersparnis-bausachverstaendige`, lastModified: new Date("2026-03-15"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/bausachverstaendiger-software-vergleich`, lastModified: new Date("2026-03-31"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/feuchtigkeitsschaeden-gutachten`, lastModified: new Date("2026-03-28"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/jveg-honorar-berechnen`, lastModified: new Date("2026-03-25"), changeFrequency: "monthly", priority: 0.7 },
  ];
}
