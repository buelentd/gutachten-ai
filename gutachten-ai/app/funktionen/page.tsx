import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/Icon";
import { getFunktionenPage } from "@/lib/sanity/queries";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Funktionen — Gutachtensoftware für Bausachverständige",
  description: "Fallverwaltung, digitale Akte, Beweisfragen-Editor, Ortstermin-Modus und Gutachten-Export als PDF und Word im Überblick.",
  alternates: { canonical: "https://gutachten-ai.de/funktionen" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://gutachten-ai.de/funktionen",
    siteName: "gutachten-ai.de",
    title: "Funktionen — Gutachtensoftware für Bausachverständige",
    description: "Fallverwaltung, digitale Akte, Beweisfragen-Editor, Ortstermin-Modus und Gutachten-Export als PDF und Word im Überblick.",
  },
};

const HERO_TITLE_DEFAULT = "Präzise Analysen. Rechtssichere Dokumentation.";
const HERO_SUBTEXT_DEFAULT = "Alle Werkzeuge für Bausachverständige — vom Beweisbeschluss bis zum fertigen Gutachten.";
const CTA_TEXT_DEFAULT = "Zugang zum Gutachten Assistenten anfragen";

const FEATURES_DEFAULTS = [
  { icon: "folder_open", title: "Fallverwaltung", description: "Alle Vorgänge strukturiert an einem Ort: Akte, Beweisbeschluss, Ortstermin und Gutachten sind als eigene Bereiche eines Falls organisiert.", example: "Ein Fall enthält Verfahrensdaten, alle Parteien, Kostenvorschuss und den vollständigen Beweisbeschluss — alles abrufbar mit einem Klick.", imageSrc: "/raumplan-feature.webp", imageAlt: "Grundriss-Übersicht — Fallverwaltung", reverse: false },
  { icon: "inventory_2", title: "Digitale Akte", description: "Fotos, PDFs und Unterlagen werden fallbezogen abgelegt und sind nach Kategorie filterbar.", example: "Unterlagen nach Typ filtern: Grundrisse, Gutachten, Rechnungen oder Schriftverkehr — immer sofort auffindbar.", imageSrc: "/Konstruktionsdetail-feature.webp", imageAlt: "Konstruktionsdetail — digitale Akte", reverse: true },
  { icon: "sim_card_download", title: "Gutachten-Export", description: "Das fertige Gutachten wird direkt aus der App als PDF oder Word-Dokument exportiert — strukturiert nach Beweisfragen.", example: "Export auf Knopfdruck: vollständiges Gutachten als DOCX oder als PDF zur Einreichung beim Gericht.", imageSrc: "/Pruefbericht-feature.webp", imageAlt: "Prüfbericht-Formular — Gutachten-Export", reverse: false },
  { icon: "quiz", title: "Beweisfragen-Editor", description: "Bis zu 18 Beweisfragen pro Fall — jede mit eigenem Editor für Behauptung, Hinweis und Feststellungen.", example: "BF1 mit Unterbeweisfragen a–f: jede Feststellung separat erfasst und beim Export korrekt strukturiert.", imageSrc: "/Konstruktionsdetail-feature.webp", imageAlt: "Baufortschritt-Report — Beweisfragen-Editor", reverse: true },
  { icon: "receipt_long", title: "Rechnungen", description: "Automatisierte Erstellung von JVEG-konformen Rechnungen oder Honorarberechnungen nach Zeitaufwand.", example: "Ein-Klick-Erstellung der Gesamtabrechnung nach Abschluss des Gutachtens inkl. aller Nebenkosten.", imageSrc: "/Rechnung-feature.webp", imageAlt: "Rechnungs-Dashboard — JVEG-konforme Honorarabrechnung", reverse: false },
];

const FAQ_DEFAULTS = [
  { question: "Sind meine Daten sicher?", answer: "Ja. Alle Daten werden auf deutschen Servern verarbeitet und sind vollständig DSGVO-konform verschlüsselt." },
  { question: "Ersetzt die KI den menschlichen Gutachter?", answer: "Nein. Die KI dient als Assistenzsystem, das zeitaufwendige Recherche- und Schreibarbeiten übernimmt, damit Sie sich auf die fachliche Bewertung konzentrieren können." },
  { question: "Wie aktuell sind die DIN-Normen?", answer: "Unsere Datenbank wird kontinuierlich aktualisiert, um stets den neuesten Stand der Technik abzubilden." },
];

type Feature = { icon: string; title: string; description: string; example: string; imageSrc: string; imageAlt: string; reverse: boolean };
type FaqItem = { question: string; answer: string };

export default async function Funktionen() {
  const d = await getFunktionenPage();
  const heroTitle = d?.heroTitle ?? HERO_TITLE_DEFAULT;
  const heroSubtext = d?.heroSubtext ?? HERO_SUBTEXT_DEFAULT;
  const ctaText = d?.ctaText ?? CTA_TEXT_DEFAULT;
  const features: Feature[] = d?.features ?? FEATURES_DEFAULTS;
  const faq: FaqItem[] = d?.faq ?? FAQ_DEFAULTS;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Funktionen", href: "/funktionen" }]} />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight mb-6 max-w-4xl text-on-surface">{heroTitle}</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">{heroSubtext}</p>
      </section>
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {features.map((f, i) => (
          <div key={i} className="grid grid-cols-12 gap-8 items-start">
            <div className={`col-span-12 md:col-span-5 space-y-6 ${f.reverse ? "order-1 md:order-2" : ""}`}>
              <div className="flex items-center gap-4">
                <Icon name={f.icon} size={28} className="icon-orange" />
                <h2 className="text-3xl font-medium tracking-tight text-on-surface">{f.title}</h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-lg">{f.description}</p>
              <div className="bg-surface-container-low p-8 rounded-xl border-[0.5px] border-outline-variant">
                <p className="text-xs font-medium text-[#FFB596] mb-4 uppercase tracking-widest">Praxis-Beispiel</p>
                <p className="italic text-on-surface-variant">{f.example}</p>
              </div>
            </div>
            <div className={`col-span-12 md:col-span-7 rounded-xl overflow-hidden border-[0.5px] border-outline-variant ${f.reverse ? "order-2 md:order-1" : ""}`}>
              <Image src={f.imageSrc} alt={f.imageAlt} width={800} height={450} sizes="(max-width: 768px) 100vw, 58vw" className="object-cover w-full h-full" />
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
      <section className="mt-16 max-w-4xl mx-auto px-6 p-6 rounded-xl border-[0.5px] border-outline bg-surface">
        <p className="text-xs text-on-surface-variant font-medium tracking-wider uppercase mb-4">Mehr erfahren</p>
        <div className="space-y-3">
          <Link href="/ablauf" className="block text-primary hover:underline text-sm">So funktioniert der Gutachten Assistent →</Link>
          <Link href="/blog/ki-gutachten-2025" className="block text-primary hover:underline text-sm">KI in der Gutachtenerstellung →</Link>
          <Link href="/blog/beweisbeschluss-ki-auswertung" className="block text-primary hover:underline text-sm">Beweisbeschlüsse automatisch auswerten →</Link>
        </div>
      </section>
      <div className="text-center mt-16">
        <Link href="/kontakt#formular" className="bg-button-bg text-white px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all">
          {ctaText}
        </Link>
      </div>
    </main>
  );
}
