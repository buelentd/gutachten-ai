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
    // ─── funktionenPage ───────────────────────────────────────────────────────
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

    // ─── Blog-Post: eu-ai-act-gutachtenwesen ─────────────────────────────────
    await client.createOrReplace({
      _id: "post-eu-ai-act-gutachtenwesen",
      _type: "post",
      title: "EU AI Act und Gutachtenwesen: Was Sachverständige jetzt wissen müssen",
      slug: { _type: "slug", current: "eu-ai-act-gutachtenwesen" },
      category: "KI & Recht",
      publishedAt: "2026-04-14",
      excerpt: "Der EU AI Act ist seit August 2024 in Kraft. Für Sachverständige, die KI-Werkzeuge einsetzen, stellen sich konkrete Fragen: Welche Anforderungen gelten? Was müssen Softwareanbieter erfüllen?",
      body: [
        { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Risikokategorien im EU AI Act" }] },
        { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotenzial. KI-Systeme im Bereich der Rechtspflege — also Systeme, die zur Vorbereitung gerichtlicher Entscheidungen beitragen — fallen grundsätzlich in die Kategorie hohes Risiko. Das bedeutet: KI-Assistenzsysteme für Sachverständige müssen transparente Dokumentation ihrer Funktionsweise vorhalten und eine nachvollziehbare menschliche Aufsicht gewährleisten." }] },
        { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Menschliche Kontrolle als Grundprinzip" }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Das zentrale Prinzip für Hochrisiko-KI-Systeme: KI darf in rechtlich relevanten Kontexten nicht autonom entscheiden — sie muss von einem menschlichen Experten kontrolliert, überprüft und letztlich freigegeben werden. Die Verantwortung für das Gutachten liegt weiterhin vollständig beim Sachverständigen." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Was Softwareanbieter erfüllen müssen" }] },
        { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Anbieter von KI-Systemen im Hochrisikobereich sind verpflichtet, ein Qualitätsmanagementsystem einzuführen und technische Dokumentation bereitzustellen. Für Sachverständige ist das relevant bei der Auswahl eines Softwareanbieters: Fragen Sie nach der Konformitätserklärung nach EU AI Act." }] },
        { _type: "block", _key: "b7", style: "h2", children: [{ _type: "span", _key: "s7", text: "Fazit: Regulierung als Qualitätsmerkmal" }] },
        { _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", _key: "s8", text: "Der EU AI Act und die DSGVO schaffen einen verlässlichen Rahmen. Sachverständige, die KI-Software einsetzen, die diese Anforderungen erfüllt, stärken ihre eigene Glaubwürdigkeit vor Gericht und gegenüber den Parteien." }] },
      ],
    });

    // ─── Blog-Post: beweisbeschluss-ki-auswertung ────────────────────────────
    await client.createOrReplace({
      _id: "post-beweisbeschluss-ki-auswertung",
      _type: "post",
      title: "Beweisbeschlüsse strukturiert auswerten: Was KI heute schon kann",
      slug: { _type: "slug", current: "beweisbeschluss-ki-auswertung" },
      category: "Technik",
      publishedAt: "2026-04-08",
      excerpt: "Der Beweisbeschluss ist das zentrale Dokument jedes gerichtlichen Gutachtenauftrags. KI-Systeme können dieses Dokument heute automatisch analysieren, Beweisfragen extrahieren und eine vollständige Gutachtenstruktur daraus ableiten.",
      body: [
        { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Was ist ein Beweisbeschluss?" }] },
        { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Ein Beweisbeschluss ist die gerichtliche Anordnung, durch die ein Sachverständiger mit der Erstellung eines Gutachtens beauftragt wird. Er enthält die Beweisfragen, die der Sachverständige zu beantworten hat. Das Gutachten muss die Beweisfragen vollständig und in der vorgegebenen Struktur beantworten — abweichende Gliederungen führen zu Rückfragen oder Ergänzungsaufträgen." }] },
        { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Wie KI den Beweisbeschluss auswertet" }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Moderne KI-Systeme analysieren den hochgeladenen Beweisbeschluss als PDF und extrahieren automatisch alle relevanten Informationen: die einzelnen Beweisfragen mit ihren Nummerierungen, die Parteibezeichnungen sowie Hinweise auf beizuziehende Unterlagen. Im Gutachten Assistenten entsteht daraus automatisch die vollständige Gutachtenstruktur." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "18 Beweisfragen — strukturiert und vollständig" }] },
        { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "In der Praxis enthalten gerichtliche Beweisbeschlüsse im Bauwesen typischerweise zwischen fünf und zwanzig Beweisfragen. Der Gutachten Assistent unterstützt bis zu 18 Beweisfragen pro Fall — jede mit eigenem Editor für Behauptung, Hinweis und Feststellungen." }] },
        { _type: "block", _key: "b7", style: "h2", children: [{ _type: "span", _key: "s7", text: "Grenzen und Verantwortung" }] },
        { _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", _key: "s8", text: "KI-Systeme können den Beweisbeschluss analysieren und strukturieren — die fachliche Bewertung liegt jedoch immer beim Sachverständigen. Die Technologie übernimmt die Routinearbeit; der Experte übernimmt die Verantwortung für Inhalt und Schlussfolgerungen." }] },
      ],
    });

    // ─── Blog-Post: digitale-akte-sachverstaendige ───────────────────────────
    await client.createOrReplace({
      _id: "post-digitale-akte-sachverstaendige",
      _type: "post",
      title: "Digitale Akte statt Papierordner: Wie Sachverständige Zeit gewinnen",
      slug: { _type: "slug", current: "digitale-akte-sachverstaendige" },
      category: "Praxis",
      publishedAt: "2026-04-03",
      excerpt: "Wer kennt das nicht: Fotos auf dem Handy, Notizen auf einem Zettel, der Beweisbeschluss als PDF irgendwo im Posteingang. Eine strukturierte digitale Fallakte löst dieses Problem — und verändert die Art zu arbeiten grundlegend.",
      body: [
        { _type: "block", _key: "b1", style: "h2", children: [{ _type: "span", _key: "s1", text: "Das Problem: Verstreute Informationen kosten Zeit" }] },
        { _type: "block", _key: "b2", style: "normal", children: [{ _type: "span", _key: "s2", text: "Ein typischer Gutachtenauftrag erzeugt eine Vielzahl von Dokumenten: den gerichtlichen Beweisbeschluss, Unterlagen der Parteien, eigene Fotos vom Ortstermin, Diktate, handschriftliche Notizen, DIN-Normen, frühere Korrespondenz. In der Praxis liegen diese Informationen verstreut — auf dem Handy, in E-Mail-Anhängen, auf USB-Sticks, in Papierordnern. Das Zusammensuchen vor der Gutachtenerstellung kostet wertvolle Stunden." }] },
        { _type: "block", _key: "b3", style: "h2", children: [{ _type: "span", _key: "s3", text: "Was eine digitale Akte anders macht" }] },
        { _type: "block", _key: "b4", style: "normal", children: [{ _type: "span", _key: "s4", text: "Eine professionelle digitale Akte strukturiert alle fallrelevanten Informationen an einem Ort — und macht sie per Kategorie filterbar. Im Gutachten Assistenten ist jeder Fall in klar definierte Bereiche gegliedert: Verfahrensdaten mit allen Parteien, der Beweisbeschluss als verarbeitetes Dokument, alle Unterlagen kategorisiert nach Typ, die Fotodokumentation vom Ortstermin, und das in Arbeit befindliche Gutachten." }] },
        { _type: "block", _key: "b5", style: "h2", children: [{ _type: "span", _key: "s5", text: "Nachvollziehbarkeit als rechtliches Argument" }] },
        { _type: "block", _key: "b6", style: "normal", children: [{ _type: "span", _key: "s6", text: "Im gerichtlichen Kontext ist Nachvollziehbarkeit eine Pflicht. Ein Gutachten, das auf einer vollständig dokumentierten und strukturierten Fallakte basiert, ist widerstandsfähiger gegen Angriffe der Gegenseite. Der Sachverständige kann jederzeit belegen, welche Unterlagen ihm vorlagen und auf welcher Grundlage seine Einschätzungen beruhen." }] },
        { _type: "block", _key: "b7", style: "h2", children: [{ _type: "span", _key: "s7", text: "Vom Ortstermin bis zum Export" }] },
        { _type: "block", _key: "b8", style: "normal", children: [{ _type: "span", _key: "s8", text: "Der eigentliche Gewinn zeigt sich im gesamten Workflow. Fotos, die direkt beim Ortstermin aufgenommen werden, landen sofort im richtigen Fall. Am Ende steht ein Gutachten, das direkt aus dieser vollständigen Akte heraus erstellt und als PDF oder Word exportiert wird." }] },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Alle Inhalte erfolgreich in Sanity eingespielt: funktionenPage + 3 Blog-Posts.",
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
