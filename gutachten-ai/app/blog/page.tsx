import Link from "next/link";

const posts = [
  {
    slug: "ki-in-der-gutachtenerstellung",
    title: "KI in der Gutachtenerstellung: Ein Paradigmenwechsel",
    date: "15. März 2026",
    tag: "KI & Technik",
    excerpt: "Wie künstliche Intelligenz die Arbeit von Bausachverständigen grundlegend verändert und welche Chancen sich daraus ergeben.",
  },
  {
    slug: "din-normen-automatisch",
    title: "DIN-Normen automatisch prüfen – so geht's",
    date: "28. Februar 2026",
    tag: "Praxis",
    excerpt: "Ein praktischer Leitfaden, wie Sie mit gutachter-ki.de DIN-konforme Gutachten in einem Bruchteil der Zeit erstellen.",
  },
  {
    slug: "dsgvo-und-ki",
    title: "DSGVO und KI: Was Sachverständige wissen müssen",
    date: "10. Februar 2026",
    tag: "Recht & Datenschutz",
    excerpt: "Die wichtigsten rechtlichen Aspekte beim Einsatz von KI-Tools in der Gutachtenerstellung.",
  },
];

export default function Blog() {
  return (
    <main className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <span className="text-[#E8631A] font-medium tracking-widest text-xs uppercase mb-4 block">Blog</span>
        <h1 className="text-5xl font-normal tracking-tight text-[#F0EDE6] mb-4">
          Wissen für Sachverständige.
        </h1>
        <p className="text-[#E0C0B3] text-lg max-w-2xl">
          Aktuelles aus der Welt der KI-gestützten Gutachtenerstellung, Praxistipps und rechtliche Updates.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-[#191C22] rounded-xl border-[0.5px] border-[#2A3344] overflow-hidden hover:border-[#E8631A]/40 transition-colors"
            >
              <div className="bg-[#272A31] aspect-video flex items-center justify-center">
                <span className="material-symbols-outlined text-[#E8631A] opacity-30" style={{ fontSize: "60px" }}>article</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-medium text-[#E8631A] uppercase tracking-wider">{post.tag}</span>
                  <span className="text-xs text-[#A0AABB]">{post.date}</span>
                </div>
                <h2 className="text-lg font-medium text-[#F0EDE6] mb-3 group-hover:text-[#E8631A] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[#E0C0B3] leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
