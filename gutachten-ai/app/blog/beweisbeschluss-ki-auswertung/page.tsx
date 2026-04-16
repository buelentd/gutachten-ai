import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beweisbeschlüsse strukturiert auswerten: Was KI heute schon kann",
  description: "Gerichtliche Beweisbeschlüsse sind das Herzstück jedes Gutachtenauftrags. Wie KI-Systeme diese Dokumente heute automatisch auswerten und in Gutachtenstrukturen überführen.",
  alternates: { canonical: "https://gutachten-ai.de/blog/beweisbeschluss-ki-auswertung" },
  openGraph: { url: "https://gutachten-ai.de/blog/beweisbeschluss-ki-auswertung" },
};

export default function BlogPost() {
  return (
    <main className="pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6">

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">Technik</span>
            <span className="text-on-surface-variant text-xs">•</span>
            <time className="text-on-surface-variant text-xs">8. April 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight text-on-surface mb-6">
            Beweisbeschlüsse strukturiert auswerten: Was KI heute schon kann
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Der Beweisbeschluss ist das zentrale Dokument jedes gerichtlichen Gutachtenauftrags. KI-Systeme können dieses Dokument heute automatisch analysieren, Beweisfragen extrahieren und eine vollständige Gutachtenstruktur daraus ableiten.
          </p>
        </div>

        <div className="prose-custom space-y-8 text-on-surface">

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Was ist ein Beweisbeschluss — und warum ist er so wichtig?</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Ein Beweisbeschluss ist die gerichtliche Anordnung, durch die ein Sachverständiger mit der Erstellung eines Gutachtens beauftragt wird. Er enthält die Beweisfragen, die der Sachverständige zu beantworten hat, Angaben zu den Parteien und zum Streitgegenstand sowie Hinweise auf bereits vorliegende Unterlagen. Das Gutachten muss die Beweisfragen vollständig und in der vorgegebenen Struktur beantworten — abweichende Gliederungen führen zu Rückfragen oder Ergänzungsaufträgen.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Die manuelle Übertragung eines Beweisbeschlusses in eine Gutachtenstruktur ist fehleranfällig und zeitaufwendig. Bei komplexen Verfahren mit zehn oder mehr Beweisfragen dauert allein dieser Schritt eine Stunde oder länger.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Wie KI den Beweisbeschluss auswertet</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Moderne KI-Systeme analysieren den hochgeladenen Beweisbeschluss als PDF und extrahieren automatisch alle relevanten Informationen: die einzelnen Beweisfragen mit ihren Nummerierungen, die Parteibezeichnungen mit Klägern und Beklagten, Angaben zum Streitgegenstand und zum Objekt sowie Hinweise auf beizuziehende Unterlagen.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Im Gutachten Assistenten entsteht daraus automatisch die vollständige Gutachtenstruktur: für jede Beweisfrage werden Felder für Behauptung, Hinweis und Feststellungen angelegt. Der Sachverständige beginnt direkt mit der inhaltlichen Arbeit — das strukturelle Gerüst ist bereits vorhanden.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">18 Beweisfragen — strukturiert und vollständig</h2>
          <p className="text-on-surface-variant leading-relaxed">
            In der Praxis enthalten gerichtliche Beweisbeschlüsse im Bauwesen typischerweise zwischen fünf und zwanzig Beweisfragen. Der Gutachten Assistent unterstützt bis zu 18 Beweisfragen pro Fall — jede mit eigenem Editor für Behauptung, Hinweis und Feststellungen. Unterbeweisfragen wie BF1a bis BF1f werden gesondert geführt und beim Export korrekt in die Gutachtenstruktur eingebettet.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Das verhindert einen der häufigsten Fehler in der Gutachtenpraxis: die unvollständige Beantwortung einzelner Beweisfragen. Das System zeigt auf einen Blick, welche Fragen bereits bearbeitet sind und welche noch offen stehen.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Grenzen und Verantwortung</h2>
          <p className="text-on-surface-variant leading-relaxed">
            KI-Systeme können den Beweisbeschluss analysieren und strukturieren — die fachliche Bewertung liegt jedoch immer beim Sachverständigen. Das ist kein Manko, sondern das Grundprinzip eines verantwortungsvollen KI-Einsatzes. Die Technologie übernimmt die Routinearbeit; der Experte übernimmt die Verantwortung für Inhalt und Schlussfolgerungen.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Das entspricht auch den Anforderungen des EU AI Acts, der für Hochrisikoanwendungen im Rechtsbereich eine menschliche Aufsicht und Kontrollmöglichkeit vorschreibt. Der Gutachten Assistent ist von Grund auf nach diesem Prinzip gebaut.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Fazit</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Die automatische Auswertung von Beweisbeschlüssen ist eine der wirkungsvollsten Anwendungen von KI im Gutachtenwesen. Sie eliminiert einen der fehleranfälligsten und zeitaufwendigsten Schritte im gesamten Workflow — und gibt dem Sachverständigen von Anfang an eine saubere, vollständige Struktur für seine Arbeit.
          </p>

          <div className="mt-16 p-8 rounded-xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
            <h3 className="text-xl font-medium text-on-surface mb-3">Beweisbeschlüsse automatisch auswerten lassen.</h3>
            <p className="text-on-surface-variant mb-6">Laden Sie Ihren nächsten Beweisbeschluss hoch und erleben Sie, wie schnell die Struktur entsteht.</p>
            <Link href="/kontakt" className="inline-block bg-[#E8631A] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
              Zugang anfragen
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-[0.5px] border-technical-line">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#E8631A] hover:gap-4 transition-all">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Zurück zum Blog</span>
          </Link>
        </div>

      </article>
    </main>
  );
}
