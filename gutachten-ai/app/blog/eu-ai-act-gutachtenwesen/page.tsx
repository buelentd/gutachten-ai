import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "EU AI Act für Bausachverständige: Was KI-Gutachtensoftware erfüllen muss",
  description: "Der EU AI Act gilt — auch für KI-gestützte Gutachtensoftware. Was Bausachverständige beim Einsatz von KI beachten müssen und welche Anforderungen Anbieter erfüllen müssen.",
  alternates: { canonical: "https://gutachten-ai.de/blog/eu-ai-act-gutachtenwesen" },
  openGraph: { url: "https://gutachten-ai.de/blog/eu-ai-act-gutachtenwesen" },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "EU AI Act für Bausachverständige: Was KI-Gutachtensoftware erfüllen muss",
  "description": "Der EU AI Act gilt — auch für KI-gestützte Gutachtensoftware. Was Bausachverständige beim Einsatz von KI beachten müssen.",
  "datePublished": "2026-04-14",
  "dateModified": "2026-04-14",
  "author": { "@type": "Organization", "name": "gutachten-ai.de", "url": "https://gutachten-ai.de" },
  "publisher": { "@type": "Organization", "name": "gutachten-ai.de", "url": "https://gutachten-ai.de" },
  "url": "https://gutachten-ai.de/blog/eu-ai-act-gutachtenwesen",
  "mainEntityOfPage": "https://gutachten-ai.de/blog/eu-ai-act-gutachtenwesen",
};

export default function BlogPost() {
  return (
    <main className="pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="max-w-3xl mx-auto px-6">

        <Breadcrumb items={[
          { label: "Startseite", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "EU AI Act und Gutachtenwesen", href: "/blog/eu-ai-act-gutachtenwesen" },
        ]} />

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">KI & Recht</span>
            <span className="text-on-surface-variant text-xs">•</span>
            <time dateTime="2026-04-14" className="text-on-surface-variant text-xs">14. April 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight text-on-surface mb-6">
            EU AI Act und Gutachtenwesen: Was Sachverständige jetzt wissen müssen
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Der EU AI Act ist seit August 2024 in Kraft. Für Sachverständige, die KI-Werkzeuge einsetzen, stellen sich konkrete Fragen: Welche Anforderungen gelten? Was müssen Softwareanbieter erfüllen?
          </p>
        </div>

        <div className="prose-custom space-y-8 text-on-surface">

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Risikokategorien im EU AI Act</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotenzial. KI-Systeme im Bereich der Rechtspflege — also Systeme, die zur Vorbereitung gerichtlicher Entscheidungen beitragen — fallen grundsätzlich in die Kategorie hohes Risiko. Das bedeutet: KI-Assistenzsysteme für Sachverständige müssen transparente Dokumentation ihrer Funktionsweise vorhalten und eine nachvollziehbare menschliche Aufsicht gewährleisten.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Menschliche Kontrolle als Grundprinzip</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Das zentrale Prinzip für Hochrisiko-KI-Systeme: KI darf in rechtlich relevanten Kontexten nicht autonom entscheiden — sie muss von einem menschlichen Experten kontrolliert, überprüft und letztlich freigegeben werden. Die Verantwortung für das Gutachten liegt weiterhin vollständig beim Sachverständigen.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Was Softwareanbieter erfüllen müssen</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Anbieter von KI-Systemen im Hochrisikobereich sind verpflichtet, ein Qualitätsmanagementsystem einzuführen und technische Dokumentation bereitzustellen. Für Sachverständige ist das relevant bei der Auswahl eines Softwareanbieters: Fragen Sie nach der Konformitätserklärung nach EU AI Act.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Fazit: Regulierung als Qualitätsmerkmal</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Der EU AI Act und die DSGVO schaffen einen verlässlichen Rahmen. Sachverständige, die KI-Software einsetzen, die diese Anforderungen erfüllt, stärken ihre eigene Glaubwürdigkeit vor Gericht und gegenüber den Parteien.
          </p>

          <div className="mt-12 p-6 rounded-xl border-[0.5px] border-[#2A3344] bg-[#151B27] space-y-3">
            <p className="text-xs text-[#8A9BB0] font-medium tracking-wider uppercase">Weiterführende Artikel</p>
            <Link href="/blog/ki-gutachten-2025" className="block text-[#E8631A] hover:underline text-sm">
              KI in der Gutachtenerstellung — welche Technologien 2026 praxisreif sind →
            </Link>
            <Link href="/blog/beweisbeschluss-ki-auswertung" className="block text-[#E8631A] hover:underline text-sm">
              Beweisbeschlüsse automatisch auswerten — Schritt für Schritt erklärt →
            </Link>
          </div>

          <div className="mt-8 p-8 rounded-xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
            <h3 className="text-xl font-medium text-on-surface mb-3">KI-Einsatz auf sicherer rechtlicher Grundlage.</h3>
            <p className="text-on-surface-variant mb-6">Der Gutachten Assistent ist nach den Grundsätzen des EU AI Acts entwickelt: transparent, kontrollierbar, mit menschlicher Aufsicht.</p>
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
