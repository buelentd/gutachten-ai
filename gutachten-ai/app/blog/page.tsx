import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/Icon";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog — KI im Bauwesen und Gutachtenwesen",
  description: "Fachwissen für Bausachverständige: KI-Technologie, DIN-Normen, JVEG-Abrechnung und digitale Transformation im Gutachtenwesen.",
  alternates: { canonical: "https://gutachten-ai.de/blog" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://gutachten-ai.de/blog",
    siteName: "gutachten-ai.de",
    title: "Blog — KI im Bauwesen und Gutachtenwesen",
    description: "Fachwissen für Bausachverständige: KI-Technologie, DIN-Normen, JVEG-Abrechnung und digitale Transformation im Gutachtenwesen.",
  },
};

async function getAllPosts() {
  return await client.fetch(groq`*[_type == "post"] | order(publishedAt desc) { title, "slug": slug.current, category, publishedAt, excerpt }`);
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
}

export default async function Blog() {
  const posts = await getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Blog", href: "/blog" }]} />
      <div className="mb-20">
        <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-on-surface mb-6 max-w-3xl">Expertise im digitalen Zeitalter.</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Aktuelle Einblicke in KI-gestützte Gutachtenerstellung, rechtliche Rahmenbedingungen und digitale Transformation im Bauwesen.</p>
      </div>
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="block group mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-2xl border-[0.5px] border-slate-600 hover:border-primary/40 transition-colors bg-surface-container-low">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 mb-4">
                {featured.category && <span className="text-primary text-xs font-medium tracking-widest uppercase">{featured.category}</span>}
                <span className="text-on-surface-variant/40 text-xs">•</span>
                <time className="text-on-surface-variant text-xs">{formatDate(featured.publishedAt)}</time>
              </div>
              <h2 className="text-3xl font-medium text-on-surface mb-4 group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6 max-w-2xl">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                <span>Weiterlesen</span>
                <Icon name="arrow_forward" size={16} className="icon-orange" />
              </span>
            </div>
          </div>
        </Link>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rest.map((post: { slug: string; title: string; excerpt: string; category: string; publishedAt: string }) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="h-full p-6 rounded-xl border-[0.5px] border-slate-600 hover:border-primary/40 transition-colors bg-surface-container-low">
              {post.category && <span className="text-primary text-xs font-medium tracking-widest uppercase mb-4 block">{post.category}</span>}
              <time className="text-on-surface-variant text-xs mb-3 block">{formatDate(post.publishedAt)}</time>
              <h3 className="text-lg font-medium text-on-surface mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <span className="text-primary text-sm font-medium inline-flex items-center gap-1 group-hover:gap-3 transition-all">
                Weiterlesen <Icon name="arrow_forward" size={14} className="icon-orange" />
              </span>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
