import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Beweisbeschlüsse automatisch auswerten: KI-Analyse für Bausachverständige",
  description: "Wie KI-Systeme gerichtliche Beweisbeschlüsse analysieren, Beweisfragen extrahieren und die Gutachtenstruktur automatisch anlegen — für Bausachverständige.",
  alternates: { canonical: "https://gutachten-ai.de/blog/beweisbeschluss-ki-auswertung" },
  openGraph: { url: "https://gutachten-ai.de/blog/beweisbeschluss-ki-auswertung" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Beweisbeschlüsse automatisch auswerten: KI-Analyse für Bausachverständige",
  "description": "Wie KI-Systeme gerichtliche Beweisbeschlüsse analysieren, Beweisfragen extrahieren und die Gutachtenstruktur automatisch anlegen.",
  "datePublished": "2026-04-08",
  "dateModified": "2026-04-08",
  "author": { "@type": "Organization", "name": "gutachten-ai.de", "url": "https://gutachten-ai.de" },
  "publisher": { "@type": "Organization", "name": "gutachten-ai.de", "url": "https://gutachten-ai.de" },
  "url": "https://gutachten-ai.de/blog/beweisbeschluss-ki-auswertung",
  "mainEntityOfPage": "https://gutachten-ai.de/blog/beweisbeschluss-ki-auswertung",
};

export default function BlogPost() {
  return (
    <main className="pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-6">

        <Breadcrumb items={[
          { label: "Startseite", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Beweisbeschlüsse automatisch auswerten", href: "/blog/beweisbeschluss-ki-auswertung" },
        ]} />

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">Technik</span>
            <span className="text-on-surface-variant text-xs">•</span>
            <time dateTime="2026-04-08" className="text-on-surface-variant text-xs">8. April 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight text-on-surface mb-6">
            Beweisbeschlüsse strukturiert auswerten: Was KI heute schon kann
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Der Beweisbeschluss ist das zentrale Dokument jedes gerichtlichen Gutachtenauftrags. KI-Systeme können dieses Dokument heute automatisch analysieren, Beweisfragen extrahieren und eine vollständige Gutachtenstruktur daraus ableiten.
          </p>
        </div>

        <div className="prose-custom space-y-8 text-on-surface">

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Was ist ein Beweisbeschluss?</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Ein Beweisbeschluss ist die gerichtliche Anordnung, durch die ein Sachverständiger mit der Erstellung eines Gutachtens beauftragt wird. Er enthält die Beweisfragen, die der Sachverständige zu beantworten hat. Das Gutachten muss die Beweisfragen vollständig und in der vorgegebenen Struktur beantworten — abweichende Gliederungen führen zu Rückfragen oder Ergänzungsaufträgen.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Wie KI den Beweisbeschluss auswertet</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Moderne KI-Systeme analysieren den hochgeladenen Beweisbeschluss als PDF und extrahieren automatisch alle relevanten Informationen: die einzelnen Beweisfragen mit ihren Nummerierungen, die Parteibezeichnungen sowie Hinweise auf beizuziehende Unterlagen. Im Gutachten Assistenten entsteht daraus automatisch die vollständige Gutachtenstruktur.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">18 Beweisfragen — strukturiert und vollständig</h2>
          <p className="text-on-surface-variant leading-relaxed">
            In der Praxis enthalten gerichtliche Beweisbeschlüsse im Bauwesen typischerweise zwischen fünf und zwanzig Beweisfragen. Der Gutachten Assistent unterstützt bis zu 18 Beweisfragen pro Fall — jede mit eigenem Editor für Behauptung, Hinweis und Feststellungen. Das System zeigt auf einen Blick, welche Fragen bereits bearbeitet sind und welche noch offen stehen.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Grenzen und Verantwortung</h2>
          <p className="text-on-surface-variant leading-relaxed">
            KI-Systeme können den Beweisbeschluss analysieren und strukturieren — die fachliche Bewertung liegt jedoch immer beim Sachverständigen. Die Technologie übernimmt die Routinearbeit; der Experte übernimmt die Verantwortung für Inhalt und Schlussfolgerungen.
          </p>

          <div className="mt-12 p-6 rounded-xl border-[0.5px] border-[#2A3344] bg-[#151B27] space-y-3">
            <p className="text-xs text-[#8A9BB0] font-medium tracking-wider uppercase">Weiterführende Artikel</p>
            <Link href="/blog/ki-gutachten-2025" className="block text-[#E8631A] hover:underline text-sm">
              KI in der Gutachtenerstellung — welche Technologien 2026 praxisreif sind →
            </Link>
            <Link href="/funktionen" className="block text-[#E8631A] hover:underline text-sm">
              Alle Funktionen des Gutachten Assistenten für Bausachverständige →
            </Link>
          </div>

          <div className="mt-8 p-8 rounded-xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
            <h3 className="text-xl font-medium text-on-surface mb-3">Beweisbeschlüsse automatisch auswerten lassen.</h3>
            <p className="text-on-surface-variant mb-6">Laden Sie Ihren nächsten Beweisbeschluss hoch und erleben Sie, wie schnell die Gutachtenstruktur entsteht.</p>
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
