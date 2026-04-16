import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://gutachten-ai.de";
  const now = new Date();

  return [
    { url: base, lastModified: now },
    { url: `${base}/funktionen`, lastModified: now },
    { url: `${base}/ablauf`, lastModified: now },
    { url: `${base}/blog`, lastModified: now },
    { url: `${base}/kontakt`, lastModified: now },
    { url: `${base}/impressum`, lastModified: now },
    { url: `${base}/datenschutz`, lastModified: now },
    { url: `${base}/blog/ki-gutachten-2025`, lastModified: new Date("2026-03-24") },
    { url: `${base}/blog/din-normen-ki`, lastModified: new Date("2026-03-20") },
    { url: `${base}/blog/zeitersparnis-bausachverstaendige`, lastModified: new Date("2026-03-15") },
    { url: `${base}/blog/bausachverstaendiger-software-vergleich`, lastModified: new Date("2026-03-31") },
    { url: `${base}/blog/feuchtigkeitsschaeden-gutachten`, lastModified: new Date("2026-03-28") },
    { url: `${base}/blog/jveg-honorar-berechnen`, lastModified: new Date("2026-03-25") },
    { url: `${base}/blog/digitale-akte-sachverstaendige`, lastModified: new Date("2026-04-03") },
    { url: `${base}/blog/beweisbeschluss-ki-auswertung`, lastModified: new Date("2026-04-08") },
    { url: `${base}/blog/eu-ai-act-gutachtenwesen`, lastModified: new Date("2026-04-14") },
  ];
}
