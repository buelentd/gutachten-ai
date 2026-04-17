import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "67x2nc7r",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function GET() {
  try {
    await client.createOrReplace({
      _id: "funktionenPage",
      _type: "funktionenPage",
      heroTitle: "Präzise Analysen. Rechtssichere Dokumentation.",
      heroSubtext: "Alle Werkzeuge für Bausachverständige — vom Beweisbeschluss bis zum fertigen Gutachten.",
      features: [
        { _key: "f1", icon: "folder_open", title: "Fallverwaltung", description: "Alle Vorgänge strukturiert an einem Ort: Akte, Beweisbeschluss, Ortstermin und Gutachten sind als eigene Bereiche eines Falls organisiert.", example: "Ein Fall enthält Verfahrensdaten, alle Parteien, Kostenvorschuss und den vollständigen Beweisbeschluss — alles abrufbar mit einem Klick.", imageSrc: "/Fallverwaltung-feature.webp", imageAlt: "Büroregal mit Leitz-Ordnern — Fallverwaltung für Bausachverständige", reverse: false },
        { _key: "f2", icon: "inventory_2", title: "Digitale Akte", description: "Fotos, PDFs und Unterlagen werden fallbezogen abgelegt und sind nach Kategorie filterbar. Die Digitale Akte zeigt auf einen Blick welche Dokumente vorliegen — und welche noch fehlen.", example: "Unterlagen nach Typ filtern: Grundrisse, Gutachten, Rechnungen oder Schriftverkehr — immer sofort auffindbar.", imageSrc: "/Konstruktionsdetail-feature.webp", imageAlt: "Konstruktionsdetail — digitale Akte mit Unterlage-Kategorien und Filtern", reverse: true },
        { _key: "f3", icon: "sim_card_download", title: "Gutachten-Export", description: "Das fertige Gutachten wird direkt aus der App als PDF oder Word-Dokument exportiert — strukturiert nach Beweisfragen, mit allen Feststellungen und der Zusammenfassung.", example: "Export auf Knopfdruck: vollständiges Gutachten als DOCX oder als PDF zur Einreichung beim Gericht.", imageSrc: "/Pruefbericht-feature.webp", imageAlt: "Prüfbericht-Formular — Gutachten-Export als PDF oder Word", reverse: false },
        { _key: "f4", icon: "quiz", title: "Beweisfragen-Editor", description: "Bis zu 18 Beweisfragen pro Fall — jede mit eigenem Editor für Behauptung, Hinweis und Feststellungen. Unterbeweisfragen werden korrekt eingebettet.", example: "BF1 mit Unterbeweisfragen a–f: jede Feststellung separat erfasst und beim Export korrekt strukturiert.", imageSrc: "/raumplan-feature.webp", imageAlt: "Beweisfragen-Editor — 18 Beweisfragen strukturiert", reverse: true },
        { _key: "f5", icon: "receipt_long", title: "Rechnungen", description: "Automatisierte Erstellung von JVEG-konformen Rechnungen oder Honorarberechnungen nach Zeitaufwand.", example: "Ein-Klick-Erstellung der Gesamtabrechnung nach Abschluss des Gutachtens inkl. aller Nebenkosten.", imageSrc: "/Rechnung-feature.webp", imageAlt: "Rechnungs-Dashboard — JVEG-konforme Honorarabrechnung", reverse: false },
      ],
      faq: [
        { _key: "q1", question: "Sind meine Daten sicher?", answer: "Ja. Alle Daten werden auf deutschen Servern verarbeitet und sind vollständig DSGVO-konform verschlüsselt." },
        { _key: "q2", question: "Ersetzt die KI den menschlichen Gutachter?", answer: "Nein. Die KI dient als Assistenzsystem, das zeitaufwendige Recherche- und Schreibarbeiten übernimmt, damit Sie sich auf die fachliche Bewertung konzentrieren können." },
        { _key: "q3", question: "Wie aktuell sind die DIN-Normen?", answer: "Unsere Datenbank wird kontinuierlich aktualisiert, um stets den neuesten Stand der Technik abzubilden." },
      ],
    });
    return NextResponse.json({ success: true, message: "funktionenPage erfolgreich in Sanity eingespielt." });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
