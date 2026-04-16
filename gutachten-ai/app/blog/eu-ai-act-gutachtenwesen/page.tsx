import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act und Gutachtenwesen: Was Sachverständige jetzt wissen müssen",
  description: "Der EU AI Act ist in Kraft. Was bedeutet das für KI-gestützte Gutachtenerstellung? Welche Anforderungen gelten, und warum ist menschliche Kontrolle kein Widerspruch zur KI-Nutzung?",
  alternates: { canonical: "https://gutachten-ai.de/blog/eu-ai-act-gutachtenwesen" },
  openGraph: { url: "https://gutachten-ai.de/blog/eu-ai-act-gutachtenwesen" },
};

export default function BlogPost() {
  return (
    <main className="pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6">

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">KI & Recht</span>
            <span className="text-on-surface-variant text-xs">•</span>
            <time className="text-on-surface-variant text-xs">14. April 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight text-on-surface mb-6">
            EU AI Act und Gutachtenwesen: Was Sachverständige jetzt wissen müssen
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Der EU AI Act ist seit August 2024 in Kraft und wird schrittweise angewendet. Für Sachverständige, die KI-Werkzeuge in ihrer Arbeit einsetzen, stellen sich konkrete Fragen: Welche Anforderungen gelten? Was müssen Softwareanbieter erfüllen? Und was ändert sich in der täglichen Praxis?
          </p>
        </div>

        <div className="prose-custom space-y-8 text-on-surface">

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Risikokategorien im EU AI Act</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotenzial in vier Kategorien: unannehmbares Risiko, hohes Risiko, begrenztes Risiko und minimales Risiko. KI-Systeme im Bereich der Rechtspflege — also Systeme, die zur Vorbereitung gerichtlicher Entscheidungen beitragen — fallen grundsätzlich in die Kategorie hohes Risiko.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Was bedeutet das konkret? KI-Assistenzsysteme für Sachverständige, die Beweisbeschlüsse analysieren oder Gutachtenentwürfe erstellen, müssen transparente Dokumentation ihrer Funktionsweise vorhalten, regelmäßige Risikoprüfungen durchlaufen und eine nachvollziehbare menschliche Aufsicht gewährleisten. Das ist kein Hindernis — es ist eine Qualitätsanforderung.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Menschliche Kontrolle als Grundprinzip</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Das zentrale Prinzip für Hochrisiko-KI-Systeme im EU AI Act ist die menschliche Aufsicht. KI darf in rechtlich relevanten Kontexten nicht autonom entscheiden — sie muss von einem menschlichen Experten kontrolliert, überprüft und letztlich freigegeben werden. Für Sachverständige bedeutet das: Die Verantwortung für das Gutachten liegt weiterhin vollständig beim Sachverständigen. Die KI ist ein Werkzeug, kein Entscheidungsträger.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Das entspricht im Übrigen genau dem, wie professionelle KI-Gutachtensoftware gebaut sein sollte: als Assistenzsystem, das Routinearbeit übernimmt und Formulierungsvorschläge macht — aber immer unter der fachlichen Kontrolle des Sachverständigen. Jede Feststellung, jede Schlussfolgerung, jede Norm-Referenz muss vom Sachverständigen geprüft und freigegeben werden.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Was Softwareanbieter erfüllen müssen</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Anbieter von KI-Systemen im Hochrisikobereich sind nach dem EU AI Act verpflichtet, ein Qualitätsmanagementsystem einzuführen, technische Dokumentation bereitzustellen, die Konformität mit den Anforderungen zu erklären und das System in der EU-Datenbank zu registrieren. Für Sachverständige ist das relevant bei der Auswahl eines Softwareanbieters: Fragen Sie nach der Konformitätserklärung nach EU AI Act und nach der Dokumentation des KI-Systems.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Seriöse Anbieter werden diese Informationen transparent bereitstellen können. Wer ausweicht oder das Thema als irrelevant abtut, sollte kritisch bewertet werden.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">DSGVO und AI Act: Zwei Regelwerke, ein Ziel</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Neben dem EU AI Act bleibt die DSGVO vollständig anwendbar. Beide Regelwerke ergänzen sich: Die DSGVO schützt personenbezogene Daten, der AI Act stellt Anforderungen an die Qualität und Sicherheit des KI-Systems selbst. Für Sachverständige bedeutet das: KI-Software muss sowohl datenschutzkonform sein als auch die Anforderungen des AI Acts erfüllen.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Konkret: Daten aus Gutachtenverfahren dürfen nicht zur Verbesserung von KI-Modellen ohne explizite Einwilligung verwendet werden. Verarbeitungsorte müssen dokumentiert sein. Und die KI-Entscheidungen müssen für den Sachverständigen nachvollziehbar und korrigierbar sein.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Fazit: Regulierung als Chance</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Der EU AI Act und die DSGVO setzen klare Anforderungen — aber sie machen den Einsatz von KI im Gutachtenwesen nicht unmöglich. Im Gegenteil: Sie schaffen einen verlässlichen Rahmen, der Vertrauen aufbaut. Sachverständige, die KI-Software einsetzen, die diese Anforderungen erfüllt, stärken ihre eigene Glaubwürdigkeit vor Gericht und gegenüber den Parteien. Regulierung als Qualitätsmerkmal — das ist die richtige Perspektive.
          </p>

          <div className="mt-16 p-8 rounded-xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
            <h3 className="text-xl font-medium text-on-surface mb-3">KI-Einsatz auf sicherer rechtlicher Grundlage.</h3>
            <p className="text-on-surface-variant mb-6">Der Gutachten Assistent ist nach den Grundsätzen des EU AI Acts entwickelt: transparent, kontrollierbar, mit menschlicher Aufsicht.</p>
            <Link href="/kontakt" className="inline-block bg-[#E8631A] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
              Mehr erfahren
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
