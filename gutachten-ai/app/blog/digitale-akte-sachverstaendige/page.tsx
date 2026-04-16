import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Digitale Akte für Bausachverständige: Fallunterlagen strukturiert verwalten",
  description: "Wie eine digitale Fallakte die Arbeit von Bausachverständigen vereinfacht — Unterlagen filterbar, Fotos fallbezogen, Gutachten nachvollziehbar.",
  alternates: { canonical: "https://gutachten-ai.de/blog/digitale-akte-sachverstaendige" },
  openGraph: { url: "https://gutachten-ai.de/blog/digitale-akte-sachverstaendige" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Digitale Akte für Bausachverständige: Fallunterlagen strukturiert verwalten",
  "description": "Wie eine digitale Fallakte die Arbeit von Bausachverständigen vereinfacht — Unterlagen filterbar, Fotos fallbezogen, Gutachten nachvollziehbar.",
  "datePublished": "2026-04-03",
  "dateModified": "2026-04-03",
  "author": { "@type": "Organization", "name": "gutachten-ai.de", "url": "https://gutachten-ai.de" },
  "publisher": { "@type": "Organization", "name": "gutachten-ai.de", "url": "https://gutachten-ai.de" },
  "url": "https://gutachten-ai.de/blog/digitale-akte-sachverstaendige",
  "mainEntityOfPage": "https://gutachten-ai.de/blog/digitale-akte-sachverstaendige",
};

export default function BlogPost() {
  return (
    <main className="pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-6">

        <Breadcrumb items={[
          { label: "Startseite", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Digitale Akte für Bausachverständige", href: "/blog/digitale-akte-sachverstaendige" },
        ]} />

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">Praxis</span>
            <span className="text-on-surface-variant text-xs">•</span>
            <time dateTime="2026-04-03" className="text-on-surface-variant text-xs">3. April 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight text-on-surface mb-6">
            Digitale Akte statt Papierordner: Wie Sachverständige Zeit gewinnen
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Wer kennt das nicht: Fotos auf dem Handy, Notizen auf einem Zettel, der Beweisbeschluss als PDF irgendwo im Posteingang. Eine strukturierte digitale Fallakte löst dieses Problem — und verändert die Art zu arbeiten grundlegend.
          </p>
        </div>

        <div className="prose-custom space-y-8 text-on-surface">

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Das Problem: Verstreute Informationen kosten Zeit</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Ein typischer Gutachtenauftrag erzeugt eine Vielzahl von Dokumenten: den gerichtlichen Beweisbeschluss, Unterlagen der Parteien, eigene Fotos vom Ortstermin, Diktate, handschriftliche Notizen, DIN-Normen, frühere Korrespondenz. In der Praxis liegen diese Informationen verstreut — auf dem Handy, in E-Mail-Anhängen, auf USB-Sticks, in Papierordnern. Das Zusammensuchen vor der Gutachtenerstellung kostet wertvolle Stunden.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Was eine digitale Akte anders macht</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Eine professionelle digitale Akte strukturiert alle fallrelevanten Informationen an einem Ort — und macht sie per Kategorie filterbar. Im Gutachten Assistenten ist jeder Fall in klar definierte Bereiche gegliedert: Verfahrensdaten mit allen Parteien, der Beweisbeschluss als verarbeitetes Dokument, alle Unterlagen kategorisiert nach Typ, die Fotodokumentation vom Ortstermin, und das in Arbeit befindliche Gutachten.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Nachvollziehbarkeit als rechtliches Argument</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Im gerichtlichen Kontext ist Nachvollziehbarkeit eine Pflicht. Ein Gutachten, das auf einer vollständig dokumentierten und strukturierten Fallakte basiert, ist widerstandsfähiger gegen Angriffe der Gegenseite. Der Sachverständige kann jederzeit belegen, welche Unterlagen ihm vorlagen und auf welcher Grundlage seine Einschätzungen beruhen.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Vom Ortstermin bis zum Export</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Der eigentliche Gewinn zeigt sich im gesamten Workflow. Fotos, die direkt beim Ortstermin aufgenommen werden, landen sofort im richtigen Fall. Am Ende steht ein Gutachten, das direkt aus dieser vollständigen Akte heraus erstellt und als PDF oder Word exportiert wird.
          </p>

          <div className="mt-12 p-6 rounded-xl border-[0.5px] border-[#2A3344] bg-[#151B27] space-y-3">
            <p className="text-xs text-[#8A9BB0] font-medium tracking-wider uppercase">Weiterführende Artikel</p>
            <Link href="/blog/beweisbeschluss-ki-auswertung" className="block text-[#E8631A] hover:underline text-sm">
              Beweisbeschlüsse automatisch auswerten — strukturiert vom Eingang bis zur Gutachtenvorlage →
            </Link>
            <Link href="/funktionen" className="block text-[#E8631A] hover:underline text-sm">
              Alle Funktionen des Gutachten Assistenten im Überblick →
            </Link>
          </div>

          <div className="mt-8 p-8 rounded-xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
            <h3 className="text-xl font-medium text-on-surface mb-3">Die digitale Akte selbst ausprobieren.</h3>
            <p className="text-on-surface-variant mb-6">Fallverwaltung, digitale Akte und Gutachten-Export — jetzt unverbindlich testen.</p>
            <Link href="/kontakt" className="inline-block bg-[#E8631A] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
              Zugang zum Gutachten Assistenten anfragen
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-[0.5px] border-technical-line">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#E8631A] hover:gap-4 transition-all">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Alle Blog-Beiträge zu KI und Gutachtenwesen</span>
          </Link>
        </div>

      </article>
    </main>
  );
}
