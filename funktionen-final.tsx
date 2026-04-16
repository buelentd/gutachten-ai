import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getFunktionenPage } from "@/lib/sanity/queries";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Funktionen — Gutachtensoftware für Bausachverständige",
  description: "Fallverwaltung, digitale Akte, Beweisfragen-Editor, Ortstermin-Modus und Gutachten-Export als PDF und Word — alle Funktionen des Gutachten Assistenten im Überblick.",
  alternates: { canonical: "https://gutachten-ai.de/funktionen" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Sind meine Daten sicher?", "acceptedAnswer": { "@type": "Answer", "text": "Ja. Alle Daten werden auf deutschen Servern verarbeitet und sind vollständig DSGVO-konform verschlüsselt." } },
    { "@type": "Question", "name": "Ersetzt die KI den menschlichen Gutachter?", "acceptedAnswer": { "@type": "Answer", "text": "Nein. Die KI dient als Assistenzsystem, das zeitaufwendige Recherche- und Schreibarbeiten übernimmt, damit Sie sich auf die fachliche Bewertung konzentrieren können." } },
    { "@type": "Question", "name": "Wie aktuell sind die DIN-Normen?", "acceptedAnswer": { "@type": "Answer", "text": "Unsere Datenbank wird kontinuierlich aktualisiert, um stets den neuesten Stand der Technik und aktuelle rechtliche Rahmenbedingungen abzubilden." } },
  ],
};

const features = [
  { icon: "folder_open", title: "Fallverwaltung", description: "Alle Vorgänge strukturiert an einem Ort: Akte, Beweisbeschluss, Ortstermin und Gutachten sind als eigene Bereiche eines Falls organisiert. So behalten Sie auch bei parallelen Verfahren jederzeit den Überblick.", example: "Ein Fall enthält Verfahrensdaten, alle Parteien, Kostenvorschuss und den vollständigen Beweisbeschluss — alles abrufbar mit einem Klick.", image: "/raumplan-feature.webp", imageAlt: "Grundriss-Übersicht — Fallverwaltung mit strukturierten Beweisfragen und Verfahrensdaten", reverse: false },
  { icon: "inventory_2", title: "Digitale Akte", description: "Fotos, PDFs und Unterlagen werden fallbezogen abgelegt und sind nach Kategorie filterbar. Die Digitale Akte zeigt auf einen Blick welche Dokumente vorliegen — und welche noch fehlen.", example: "Unterlagen nach Typ filtern: Grundrisse, Gutachten, Rechnungen oder Schriftverkehr — immer sofort auffindbar.", image: "/Konstruktionsdetail-feature.webp", imageAlt: "Konstruktionsdetail — digitale Akte mit Unterlage-Kategorien und Filtern", reverse: true },
  { icon: "sim_card_download", title: "Gutachten-Export", description: "Das fertige Gutachten wird direkt aus der App als PDF oder Word-Dokument exportiert — strukturiert nach Beweisfragen, mit allen Feststellungen und der Zusammenfassung.", example: "Export auf Knopfdruck: vollständiges Gutachten als DOCX für die eigene Weiterbearbeitung oder als PDF zur Einreichung beim Gericht.", image: "/Pruefbericht-feature.webp", imageAlt: "Prüfbericht-Formular — Gutachten-Export als PDF oder Word strukturiert nach Beweisfragen", reverse: false },
  { icon: "quiz", title: "Beweisfragen-Editor", description: "Bis zu 18 Beweisfragen pro Fall — jede mit eigenem Editor für Behauptung, Hinweis und Feststellungen. Unterbeweisfragen werden korrekt in die Gutachtenstruktur eingebettet.", example: "BF1 mit Unterbeweisfragen a–f: jede Feststellung separat erfasst und beim Export korrekt strukturiert.", image: "/Konstruktionsdetail-feature.webp", imageAlt: "Baufortschritt-Report — Beweisfragen-Editor mit strukturierten Feststellungen", reverse: true },
  { icon: "receipt_long", title: "Rechnungen", description: "Automatisierte Erstellung von JVEG-konformen Rechnungen oder Honorarberechnungen nach Zeitaufwand.", example: "Ein-Klick-Erstellung der Gesamtabrechnung nach Abschluss des Gutachtens inkl. aller Nebenkosten.", image: "/Rechnung-feature.webp", imageAlt: "Rechnungs-Dashboard — JVEG-konforme Honorarabrechnung automatisch erstellt", reverse: false },
];

const faq = [
  { question: "Sind meine Daten sicher?", answer: "Ja. Alle Daten werden auf deutschen Servern verarbeitet und sind vollständig DSGVO-konform verschlüsselt." },
  { question: "Ersetzt die KI den menschlichen Gutachter?", answer: "Nein. Die KI dient als Assistenzsystem, das zeitaufwendige Recherche- und Schreibarbeiten übernimmt, damit Sie sich auf die fachliche Bewertung konzentrieren können." },
  { question: "Wie aktuell sind die DIN-Normen?", answer: "Unsere Datenbank wird kontinuierlich aktualisiert, um stets den neuesten Stand der Technik und aktuelle rechtliche Rahmenbedingungen abzubilden." },
];

export default async function Funktionen() {
  const cms = await getFunktionenPage().catch(() => null);
  void cms;

  return (
    <main className="pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="max-w-7xl mx-auto px-6 mb-16">
        <Breadcrumb items={[
          { label: "Startseite", href: "/" },
          { label: "Funktionen", href: "/funktionen" },
        ]} />
        <h1 className="text-6xl font-normal tracking-tight leading-tight mb-6 max-w-4xl text-on-surface">Präzise Analysen. Rechtssichere Dokumentation.</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">Alle Werkzeuge für Bausachverständige — vom Beweisbeschluss bis zum fertigen Gutachten.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {features.map((f, i) => (
          <div key={i} className="grid grid-cols-12 gap-8 items-start">
            <div className={`col-span-12 md:col-span-5 space-y-6 ${f.reverse ? "order-1 md:order-2" : ""}`}>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#E8631A] text-3xl">{f.icon}</span>
                <h2 className="text-3xl font-medium tracking-tight text-on-surface">{f.title}</h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-lg">{f.description}</p>
              <div className="bg-surface-container-low p-8 rounded-xl border-[0.5px] border-outline-variant">
                <p className="text-xs font-medium text-[#FFB596] mb-4 uppercase tracking-widest">Praxis-Beispiel</p>
                <p className="italic text-on-surface-variant">{f.example}</p>
              </div>
            </div>
            <div className={`col-span-12 md:col-span-7 rounded-xl overflow-hidden border-[0.5px] border-outline-variant ${f.reverse ? "order-2 md:order-1" : ""}`}>
              <Image
                src={f.image}
                alt={f.imageAlt}
                width={800}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </section>

      <section className="mt-48 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-normal tracking-tight text-center mb-16 text-on-surface">Häufig gestellte Fragen zur Gutachtensoftware</h2>
        <div className="space-y-4">
          {faq.map((item, i) => (
            <div key={i} className="bg-surface-container-low rounded-xl p-6 border-[0.5px] border-outline-variant">
              <h3 className="text-lg font-medium mb-2 text-on-surface">{item.question}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 max-w-4xl mx-auto px-6 p-6 rounded-xl border-[0.5px] border-[#2A3344] bg-[#151B27]">
        <p className="text-xs text-[#8A9BB0] font-medium tracking-wider uppercase mb-4">Mehr erfahren</p>
        <div className="space-y-3">
          <Link href="/ablauf" className="block text-[#E8631A] hover:underline text-sm">So funktioniert der Gutachten Assistent — der vollständige Ablauf in drei Schritten →</Link>
          <Link href="/blog/ki-gutachten-2025" className="block text-[#E8631A] hover:underline text-sm">KI in der Gutachtenerstellung — welche Technologien 2026 praxisreif sind →</Link>
          <Link href="/blog/beweisbeschluss-ki-auswertung" className="block text-[#E8631A] hover:underline text-sm">Beweisbeschlüsse automatisch auswerten — wie die KI-Analyse funktioniert →</Link>
        </div>
      </section>

      <div className="text-center mt-16">
        <Link href="/kontakt" className="bg-[#E8631A] text-white px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all">
          Zugang zum Gutachten Assistenten anfragen
        </Link>
      </div>
    </main>
  );
}
