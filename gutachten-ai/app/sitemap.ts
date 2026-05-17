import { MetadataRoute } from "next";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";

export const dynamic = "force-dynamic";

async function getPosts(): Promise<{ slug: string; publishedAt: string }[]> {
  try {
    return await client.fetch(
      groq`*[_type == "post"]{ "slug": slug.current, publishedAt }`,
    );
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://gutachten-ai.de";
  const now = new Date();
  const posts = await getPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.publishedAt ? new Date(p.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/funktionen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/ablauf`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...postEntries,
  ];
}
