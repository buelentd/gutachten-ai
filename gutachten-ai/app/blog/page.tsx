import Link from "next/link";
import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";

export const metadata: Metadata = {
  title: "Blog — KI im Bauwesen und Gutachtenwesen",
  description: "Fachwissen für Bausachverständige: KI-Technologie, DIN-Normen, JVEG-Abrechnung und digitale Transformation im Gutachtenwesen.",
  alternates: { canonical: "https://gutachten-ai.de/blog" },
};

async function getAllPosts() {
  try {
    return await client.fetch(
      groq`*[_type == "post"] | order(publishedAt desc) { title, "slug": slug.current, category, publishedAt, excerpt, "image": mainImage.asset->url }`
    );
  } catch { return []; }
}

// Fallback falls Sanity leer oder nicht erreichbar
const fallbackPosts = [
  { slug: "bausachverstaendiger-software-vergleich", title: "Bausachverständiger Software Vergleich 2026", excerpt: "Welche Software nutzen Bausachverständige 2026? Wir vergleichen die wichtigsten Tools.", category: "Vergleich", publishedAt: "2026-03-31" },
  { slug: "feuchtigkeitsschaeden-gutachten", title: "Feuchtigkeitsschäden im Baugutachten: Ursachen, Normen und Dokumentation", excerpt: "Wie Bausachverständige Feuchtigkeitsschäden fachgerecht dokumentieren und bewerten.", category: "Fachthema", publishedAt: "2026-03-28" },
  { slug: "jveg-honorar-berechnen", title: "JVEG Honorar berechnen: So rechnen Sachverständige korrekt ab", excerpt: "Stundensätze, Nebenkosten, Fahrtkosten — ein vollständiger Leitfaden zur JVEG-Abrechnung.", category: "Abrechnung", publishedAt: "2026-03-25" },
  { slug: "ki-gutachten-2025", title: "KI in der Gutachtenerstellung 2025: Was Bausachverständige jetzt wissen müssen", excerpt: "Künstliche Intelligenz verändert die Gutachtenerstellung grundlegend.", category: "Technologie", publishedAt: "2026-03-24" },
  { slug: "din-normen-ki", title: "DIN-Normen und KI: Wie Software rechtssichere Baugutachten erstellt", excerpt: "Wie KI-Software aktuelle DIN-Normen in die Gutachtenerstellung integriert.", category: "Recht & Normen", publishedAt: "2026-03-20" },
  { slug: "zeitersparnis-bausachverstaendige", title: "85% weniger Zeit für Gutachten: So nutzen Bausachverständige KI richtig", excerpt: "Wie Bausachverständige durch KI-Software bis zu 85% ihrer Bearbeitungszeit einsparen.", category: "Praxis", publishedAt: "2026-03-15" },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-DE", { day: "numeric", month: "long", year: "numeric" });
}

export default async function Blog() {
  const cmsPosts = await getAllPosts();
  const posts = cmsPosts.length > 0 ? cmsPosts : fallbackPosts;
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="mb-20">
        <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-on-surface mb-6 max-w-3xl">
          Expertise im digitalen Zeitalter.
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Aktuelle Einblicke in KI-gestützte Gutachtenerstellung, rechtliche Rahmenbedingungen und digitale Transformation im Bauwesen.
        </p>
      </div>

      {/* Featured */}
      {featured && (
        <Link href={`/blog/${featured.slug}`} className="block group mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 rounded-2xl border-[0.5px] border-technical-line hover:border-[#E8631A]/40 transition-colors bg-surface-container-low">
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 mb-4">
                {featured.category && (
                  <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">{featured.category}</span>
                )}
                <span className="text-on-surface-variant/40 text-xs">•</span>
                <time className="text-on-surface-variant text-xs">{formatDate(featured.publishedAt)}</time>
              </div>
              <h2 className="text-3xl font-medium text-on-surface mb-4 group-hover:text-[#E8631A] transition-colors">
                {featured.title}
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg mb-6 max-w-2xl">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-[#E8631A] font-medium group-hover:gap-4 transition-all">
                <span>Weiterlesen</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
            <div className="md:col-span-4 hidden md:flex items-center justify-center">
              <div className="w-full aspect-video rounded-xl overflow-hidden border-[0.5px] border-technical-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuBSreBcnnEQnNd69Biiu6784mLwxbXbXuw2sOR4XHSjQSa8eRAn5mMQB9CizSeq_wHg4ejofBCRARWEX55XelgK4JPej5Yrv-1FLjoREtHIiedaLWJuex3lhMN0muziOLf_8WtJftur3PDceYNWzri8AUijFsWLpP9aZCBfJYUyGgriZYZUHmAjvVn7v2_k_ntOKcoJ_O87YqQwQ85m9q4N9flCU4kNRXvjRy_lcAoiyeUkkVAgmHSrQ4S9Z1PIHRiXnPrILdEnfKrX"}
                  alt={featured.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </Link>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rest.map((post: { slug: string; title: string; excerpt: string; category: string; publishedAt: string }) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
            <article className="h-full p-6 rounded-xl border-[0.5px] border-technical-line hover:border-[#E8631A]/40 transition-colors bg-surface-container-low">
              <div className="flex items-center gap-3 mb-4">
                {post.category && (
                  <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">{post.category}</span>
                )}
              </div>
              <time className="text-on-surface-variant text-xs mb-3 block">{formatDate(post.publishedAt)}</time>
              <h3 className="text-lg font-medium text-on-surface mb-3 group-hover:text-[#E8631A] transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
              <span className="text-[#E8631A] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-3 transition-all">
                Weiterlesen <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </span>
            </article>
          </Link>
        ))}
      </div>

      {/* Newsletter */}
      <section className="mt-24 p-12 bg-surface-container-low rounded-xl border-[0.5px] border-technical-line flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h4 className="text-2xl font-normal text-on-surface mb-2">Fachwissen abonnieren</h4>
          <p className="text-on-surface-variant text-sm">Monatliche Updates zu KI-Trends im Bauwesen und neuen Funktionen.</p>
        </div>
        <form className="flex w-full md:w-auto gap-4">
          <input className="bg-surface text-on-surface px-6 py-3 rounded-lg border-[0.5px] border-technical-line focus:border-[#E8631A] focus:outline-none w-full md:w-64 text-sm" placeholder="E-Mail Adresse" type="email"/>
          <button className="bg-[#E8631A] text-white px-8 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-all whitespace-nowrap" type="submit">Anmelden</button>
        </form>
      </section>
    </main>
  );
}
