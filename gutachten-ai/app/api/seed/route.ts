import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "67x2nc7r",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

function b(key: string, style: string, text: string) {
  return { _type: "block", _key: key, style, markDefs: [], children: [{ _type: "span", _key: key + "s", text, marks: [] }] };
}

export async function GET() {
  try {

    // ─── homePage ─────────────────────────────────────────────────────────────
    await client.createOrReplace({
      _id: "homePage",
      _type: "homePage",
      heroTitle: "Der digitale Assistent für Bausachverständige.",
      heroSubtext: "Vom Beweisbeschluss bis zum fertigen Gutachten — strukturiert, nachvollziehbar und rechtssicher. Entwickelt für die tägliche Arbeit vor Gericht und vor Ort.",
      heroPrimaryButton: "Alle Funktionen entdecken",
      heroSecondaryButton: "So funktioniert es",
      trustItems: [
        { _key: "t1", icon: "shield", label: "DSGVO-konform" },
        { _key: "t2", icon: "dns", label: "Deutsche Server" },
        { _key: "t3", icon: "lock", label: "256-bit Verschlüsselung" },
        { _key: "t4", icon: "policy", label: "EU AI Act ready" },
        { _key: "t5", icon: "person_check", label: "Menschliche Kontrolle" },
        { _key: "t6", icon: "verified", label: "Made in Germany" },
      ],
      stats: [
        { _key: "s1", value: "18", label: "Beweisfragen strukturiert", highlight: true },
        { _key: "s2", value: "3", label: "Exportformate (PDF, Word, Druck)", highlight: false },
        { _key: "s3", value: "100%", label: "Datenhoheit beim Sachverständigen", highlight: false },
        { _key: "s4", value: "< 1 Tag", label: "Einarbeitungszeit", highlight: false },
      ],
      problemTitle: "Warum der bisherige Weg nicht mehr ausreicht.",
      problemSubtext: "Gutachten entstehen heute noch überwiegend manuell — trotz hoher Fallzahlen, steigendem Termindruck und wachsender Dokumentationsanforderungen.",
      problemItems: [
        "Beweisbeschlüsse manuell übertragen und strukturieren.",
        "Fotos vom Ortstermin unsortiert und ohne Fallbezug.",
        "Gutachten-Entwurf in Word — Layout-Frust inklusive.",
      ],
      solutionItems: [
        "Beweisbeschluss hochladen — Struktur entsteht automatisch.",
        "Unterlagen, Fotos und Notizen fallbezogen in der digitalen Akte.",
        "Gutachten exportieren als PDF oder Word — strukturiert und fertig.",
      ],
      featuresTitle: "Alle Werkzeuge auf einen Blick.",
      featuresSubtext: "Von der Fallanlage bis zum Export.",
      features: [
        { _key: "f1", icon: "folder_open", title: "Fallverwaltung", description: "Akte, Beweisbeschluss, Ortstermin und Gutachten als strukturierte Einheit." },
        { _key: "f2", icon: "inventory_2", title: "Digitale Akte", description: "Unterlagen, Fotos und PDFs fallbezogen abgelegt und filterbar." },
        { _key: "f3", icon: "quiz", title: "Beweisfragen-Editor", description: "18 Beweisfragen mit Behauptung, Hinweis und Feststellungen." },
        { _key: "f4", icon: "mic", title: "Ortstermin-Modus", description: "Fotos, Diktate und Notizen direkt vor Ort erfassen." },
        { _key: "f5", icon: "auto_awesome", title: "KI-Assistent", description: "Textvorschläge und Norm-Matching auf Basis des Beweisbeschlusses." },
        { _key: "f6", icon: "sim_card_download", title: "Export PDF & Word", description: "Fertiges Gutachten strukturiert exportieren — bereit zur Einreichung." },
      ],
      ablaufTitle: "In drei Schritten zum fertigen Gutachten.",
      ablaufSubtext: "Kein langer Einarbeitungsaufwand. Der Workflow folgt dem, was Sachverständige ohnehin tun — nur strukturierter.",
      ablaufSteps: [
        { _key: "a1", step: "01", icon: "create_new_folder", title: "Fall anlegen", description: "Verfahrensdaten, Parteien und Beweisbeschluss erfassen. Der Fall ist sofort einsatzbereit." },
        { _key: "a2", step: "02", icon: "upload_file", title: "Unterlagen & Fotos einpflegen", description: "Dokumente in die digitale Akte laden, Fotos vom Ortstermin zuordnen. Alles fallbezogen." },
        { _key: "a3", step: "03", icon: "picture_as_pdf", title: "Gutachten generieren & exportieren", description: "Beweisfragen beantworten, KI-Assistenz nutzen. Export als PDF oder Word." },
      ],
      ablaufButtonText: "Den vollständigen Ablauf ansehen →",
      fuerWenTitle: "Für wen ist der Gutachten Assistent?",
      fuerWenSubtext: "Entwickelt für Sachverständige, die gerichtliche Gutachten unter Zeitdruck und mit hohem Qualitätsanspruch erstellen.",
      fuerWenItems: [
        { _key: "w1", icon: "gavel", title: "Öffentlich bestellte und vereidigte Sachverständige", description: "Gerichtsgutachten nach Beweisbeschluss — strukturiert, nachvollziehbar und mit vollständiger Dokumentation." },
        { _key: "w2", icon: "engineering", title: "Freie Bausachverständige", description: "Privatgutachten, Mängelrügen und Zustandsbeschreibungen effizienter erstellen." },
        { _key: "w3", icon: "account_balance", title: "Gutachterbüros mit mehreren Sachverständigen", description: "Einheitliche Falldokumentation und nachvollziehbare Gutachtenhistorie für das gesamte Team." },
      ],
      blogTitle: "Aus dem Blog.",
      blogSubtext: "Fachbeiträge rund um KI, Gutachtenwesen und digitale Prozesse.",
      blogLinkText: "Alle Beiträge →",
      offerBadge: "Früher Zugang",
      offerTitle: "Jetzt mit dem Gutachten Assistenten starten.",
      offerSubtext: "Testen Sie den vollen Funktionsumfang unverbindlich.",
      offerItems: [
        "Vollständige Fallverwaltung inklusive",
        "Digitale Akte mit Filterung",
        "Gutachten-Export als PDF und Word",
      ],
      offerButtonText: "Zugang anfragen",
      ctaTitle: "Bereit für strukturierte Gutachtenarbeit?",
      ctaSubtext: "Weniger manuelle Arbeit, mehr Nachvollziehbarkeit.",
      ctaPrimaryButtonText: "Zugang anfragen",
      ctaPrimaryButtonLink: "/kontakt",
      ctaSecondaryButtonText: "Alle Funktionen ansehen",
      ctaSecondaryButtonLink: "/funktionen",
    });

    // ─── datenschutz ──────────────────────────────────────────────────────────
    await client.createOrReplace({
      _id: "datenschutz",
      _type: "datenschutz",
      sections: [
        { _key: "ds1", title: "1. Verantwortlicher", content: "Verantwortlicher im Sinne der DSGVO ist:\n\nintersignum UG (haftungsbeschränkt)\nPasewalker Str. 15\n13127 Berlin\nE-Mail: info@intersignum.de" },
        { _key: "ds2", title: "2. Hosting", content: "Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Vercel ist zertifiziert nach dem EU-US Data Privacy Framework. Bei jedem Aufruf unserer Website werden automatisch Verbindungsdaten (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website)." },
        { _key: "ds3", title: "3. Kontaktformular", content: "Wenn Sie uns über das Kontaktformular eine Nachricht übermitteln, werden Ihre Angaben (Name, E-Mail-Adresse, Telefonnummer, Unternehmen, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Die Daten werden über den Dienst Brevo (Sendinblue SAS, 7 rue de Madrid, 75008 Paris, Frankreich) übermittelt und gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde." },
        { _key: "ds4", title: "4. Content Management System", content: "Für die Verwaltung von Website-Inhalten nutzen wir Sanity (Sanity Inc., 548 Market St PMB 49607, San Francisco, CA 94104, USA). Sanity ist zertifiziert nach dem EU-US Data Privacy Framework. Die Inhalte der Website werden über die Sanity API abgerufen. Dabei werden keine personenbezogenen Daten der Website-Besucher an Sanity übermittelt." },
        { _key: "ds5", title: "5. Cookies", content: "Diese Website verwendet ausschließlich technisch notwendige Cookies. Ein Cookie wird gesetzt, um Ihre Einstellung zum Dark/Light Mode zu speichern (localStorage). Dieses Cookie ist für den Betrieb der Website erforderlich und enthält keine personenbezogenen Daten. Es ist kein Consent erforderlich (§ 25 Abs. 2 TTDSG)." },
        { _key: "ds6", title: "6. Ihre Rechte", content: "Sie haben gegenüber uns folgende Rechte:\n\n— Recht auf Auskunft (Art. 15 DSGVO)\n— Recht auf Berichtigung (Art. 16 DSGVO)\n— Recht auf Löschung (Art. 17 DSGVO)\n— Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)\n— Recht auf Datenübertragbarkeit (Art. 20 DSGVO)\n— Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)\n\nSie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Die zuständige Aufsichtsbehörde für Berlin ist der Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstr. 219, 10969 Berlin." },
        { _key: "ds7", title: "7. Aktualität und Änderung dieser Datenschutzerklärung", content: "Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern." },
      ],
    });

    // ─── kontaktPage erweitern ────────────────────────────────────────────────
    await client.createOrReplace({
      _id: "kontaktPage",
      _type: "kontaktPage",
      heroTitle: "Präzision beginnt beim ersten Gespräch.",
      contactName: "Thomas Müller",
      contactRole: "Leiter Kundenerfolg",
      contactText: "Wir verstehen, dass im Gutachterwesen jedes Detail zählt. Unser Team steht Ihnen zur Seite.",
      trustItems: [
        { _key: "k1", icon: "verified_user", title: "DSGVO-konform", description: "Alle Daten werden ausschließlich auf deutschen Servern verarbeitet." },
        { _key: "k2", icon: "timer", title: "Reaktionszeit", description: "Rückmeldung innerhalb von 24 Stunden an Werktagen." },
        { _key: "k3", icon: "map", title: "Standort Berlin", description: "Technologie entwickelt in Deutschland für den lokalen Markt." },
      ],
    });

    // ─── ablaufPage ───────────────────────────────────────────────────────────
    await client.createOrReplace({
      _id: "ablaufPage",
      _type: "ablaufPage",
      heroLabel: "Implementierung",
      heroTitle: "Vom Erstkontakt zur fertigen",
      heroTitleHighlight: "Expertise.",
      heroSubtext: "Effizienz beginnt bei der Einführung. Wir haben einen strukturierten Prozess entwickelt, der Ihre bestehenden Workflows respektiert und digital transformiert.",
      steps: [
        { _key: "step1", number: "01", title: "Anfrage", description: "Wir analysieren Ihren aktuellen Bedarf und prüfen die Kompatibilität Ihrer Datenstruktur mit unserer KI-Engine.", items: ["Erstgespräch & Bedarfsanalyse", "Daten-Checkup"] },
        { _key: "step2", number: "02", title: "Onboarding", description: "Integration der Schnittstellen und Training Ihres Teams auf die spezifischen Module Ihres Fachbereichs.", items: ["Setup & Integration", "Live-Schulung via Web-App"] },
        { _key: "step3", number: "03", title: "Loslegen", description: "Ab Tag 1 profitieren Sie von automatisierten Gutachten-Entwürfen und digitaler Beweissicherung.", items: ["Voller Funktionsumfang", "Support & Optimierung"] },
      ],
      timeline: [
        { _key: "t1", day: "0", label: "Tag 0", sublabel: "Kick-off Meeting", isRocket: false },
        { _key: "t2", day: "7", label: "Tag 1", sublabel: "Systemkonfiguration", isRocket: false },
        { _key: "t3", day: "14", label: "Ab Tag 1", sublabel: "Mitarbeiter-Training", isRocket: false },
        { _key: "t4", day: "", label: "Laufend", sublabel: "Skalierung & Updates", isRocket: true },
      ],
      trustItems: [
        { _key: "tr1", icon: "security", title: "Sicherheit & Datenschutz", description: "Ihre Daten verlassen niemals deutschen Boden. Unsere Server sind ISO 27001 zertifiziert und vollständig DSGVO-konform." },
        { _key: "tr2", icon: "settings_input_component", title: "Technische Integration", description: "Dank unserer modernen REST-API lässt sich gutachten-ai.de nahtlos in Ihre bestehende Branchensoftware integrieren." },
      ],
      ctaTitle: "Bereit für den digitalen Vorsprung?",
      ctaSubtext: "Sichern Sie sich jetzt ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihren Arbeitsalltag revolutionieren können.",
      ctaPrimaryButton: "Kostenloses Gespräch buchen",
      ctaSecondaryButton: "Funktionen ansehen",
    });

    // ─── funktionenPage ───────────────────────────────────────────────────────
    await client.createOrReplace({
      _id: "funktionenPage",
      _type: "funktionenPage",
      heroTitle: "Präzise Analysen. Rechtssichere Dokumentation.",
      heroSubtext: "Alle Werkzeuge für Bausachverständige — vom Beweisbeschluss bis zum fertigen Gutachten.",
      ctaText: "Zugang zum Gutachten Assistenten anfragen",
      features: [
        { _key: "f1", icon: "folder_open", title: "Fallverwaltung", description: "Alle Vorgänge strukturiert an einem Ort: Akte, Beweisbeschluss, Ortstermin und Gutachten sind als eigene Bereiche eines Falls organisiert.", example: "Ein Fall enthält Verfahrensdaten, alle Parteien, Kostenvorschuss und den vollständigen Beweisbeschluss — alles abrufbar mit einem Klick.", imageSrc: "/raumplan-feature.webp", imageAlt: "Grundriss-Übersicht — Fallverwaltung", reverse: false },
        { _key: "f2", icon: "inventory_2", title: "Digitale Akte", description: "Fotos, PDFs und Unterlagen werden fallbezogen abgelegt und sind nach Kategorie filterbar.", example: "Unterlagen nach Typ filtern: Grundrisse, Gutachten, Rechnungen oder Schriftverkehr — immer sofort auffindbar.", imageSrc: "/Konstruktionsdetail-feature.webp", imageAlt: "Konstruktionsdetail — digitale Akte", reverse: true },
        { _key: "f3", icon: "sim_card_download", title: "Gutachten-Export", description: "Das fertige Gutachten wird direkt aus der App als PDF oder Word-Dokument exportiert — strukturiert nach Beweisfragen.", example: "Export auf Knopfdruck: vollständiges Gutachten als DOCX oder als PDF zur Einreichung beim Gericht.", imageSrc: "/Pruefbericht-feature.webp", imageAlt: "Prüfbericht-Formular — Gutachten-Export", reverse: false },
        { _key: "f4", icon: "quiz", title: "Beweisfragen-Editor", description: "Bis zu 18 Beweisfragen pro Fall — jede mit eigenem Editor für Behauptung, Hinweis und Feststellungen.", example: "BF1 mit Unterbeweisfragen a–f: jede Feststellung separat erfasst und beim Export korrekt strukturiert.", imageSrc: "/Konstruktionsdetail-feature.webp", imageAlt: "Baufortschritt-Report — Beweisfragen-Editor", reverse: true },
        { _key: "f5", icon: "receipt_long", title: "Rechnungen", description: "Automatisierte Erstellung von JVEG-konformen Rechnungen oder Honorarberechnungen nach Zeitaufwand.", example: "Ein-Klick-Erstellung der Gesamtabrechnung nach Abschluss des Gutachtens inkl. aller Nebenkosten.", imageSrc: "/Rechnung-feature.webp", imageAlt: "Rechnungs-Dashboard — JVEG-konforme Honorarabrechnung", reverse: false },
      ],
      faq: [
        { _key: "q1", question: "Sind meine Daten sicher?", answer: "Ja. Alle Daten werden auf deutschen Servern verarbeitet und sind vollständig DSGVO-konform verschlüsselt." },
        { _key: "q2", question: "Ersetzt die KI den menschlichen Gutachter?", answer: "Nein. Die KI dient als Assistenzsystem, das zeitaufwendige Recherche- und Schreibarbeiten übernimmt, damit Sie sich auf die fachliche Bewertung konzentrieren können." },
        { _key: "q3", question: "Wie aktuell sind die DIN-Normen?", answer: "Unsere Datenbank wird kontinuierlich aktualisiert, um stets den neuesten Stand der Technik abzubilden." },
      ],
    });

    // ─── Blog-Posts (unverändert) ─────────────────────────────────────────────
    await client.createOrReplace({ _id: "post-zeitersparnis", _type: "post", title: "85% weniger Zeit für Gutachten: So nutzen Bausachverständige KI richtig", slug: { _type: "slug", current: "zeitersparnis-bausachverstaendige" }, category: "Praxis", publishedAt: "2026-03-15", excerpt: "Eine Zahl, die zunächst unglaubwürdig klingt — und doch der Realität entspricht: Bausachverständige, die KI-gestützte Software einsetzen, berichten von einer Zeitersparnis von bis zu 85 Prozent bei der Gutachtenerstellung.", body: [ b("b1","h2","Wo geht die Zeit wirklich hin?"), b("b2","normal","Um zu verstehen, warum KI so viel Zeit spart, muss man zunächst verstehen, wo die Zeit bei der traditionellen Gutachtenerstellung verloren geht. Eine Analyse zeigt: 35% Texterstellung, 20% Normenrecherche, 15% Fotodokumentation, 10% Formatierung — nur 20% entfallen auf die eigentliche fachliche Bewertung."), b("b3","h2","KI übernimmt die Routinearbeit"), b("b4","normal","Der Sachverständige gibt die Eckdaten ein — Schadensart, betroffene Bauteile, Beobachtungen vor Ort. Die KI generiert daraus einen vollständigen Textbaustein in korrekter Fachsprache. Was früher zwei Stunden Schreibarbeit bedeutete, dauert jetzt fünf Minuten Überprüfung und Freigabe."), b("b5","h2","Normenrecherche: Automatisch und immer aktuell"), b("b6","normal","Statt manuell durch DIN-Kataloge zu blättern, identifiziert die KI automatisch alle relevanten Normen. Die Recherche, die früher 30-60 Minuten dauerte, erledigt das System in Sekunden — und mit höherer Vollständigkeit."), b("b7","h2","Was bedeutet das in der Praxis?"), b("b8","normal","Ein Sachverständiger, der früher vier Arbeitstage für ein komplexes Gutachten benötigte, schafft dasselbe Gutachten heute in einem Tag. 85% Zeitersparnis bedeutet: mehr Aufträge, schnellere Lieferzeiten, weniger Korrekturrunden."), b("b9","h2","Fazit"), b("b10","normal","KI ist kein Ersatz für Expertise. Aber sie gibt Experten ihre Zeit zurück."), ] });
    await client.createOrReplace({ _id: "post-din-normen-ki", _type: "post", title: "DIN-Normen und KI: Wie Software rechtssichere Baugutachten erstellt", slug: { _type: "slug", current: "din-normen-ki" }, category: "Recht & Normen", publishedAt: "2026-03-20", excerpt: "Rechtssicherheit ist das wichtigste Kriterium bei Baugutachten. Wie stellt KI-Software sicher, dass alle relevanten DIN-Normen korrekt angewendet werden?", body: [ b("b1","h2","DIN-Normen im Baugutachten: Die Herausforderung"), b("b2","normal","Ein qualifiziertes Baugutachten muss auf dem aktuellen Stand der anerkannten Regeln der Technik basieren. Allein im Bereich Bauwesen gibt es mehrere tausend relevante DIN-Normen, die sich regelmäßig ändern."), b("b3","h2","Wie KI die Normenrecherche automatisiert"), b("b4","normal","Moderne KI-Gutachtensoftware löst dieses Problem durch eine kontinuierlich aktualisierte Normdatenbank. Das System analysiert Gebäudetyp, Schadensart, Baujahr und betroffene Bauteile — und schlägt automatisch die relevanten Normen vor."), ] });
    await client.createOrReplace({ _id: "post-ki-gutachten-2025", _type: "post", title: "KI in der Gutachtenerstellung: Was Bausachverständige jetzt wissen müssen", slug: { _type: "slug", current: "ki-gutachten-2025" }, category: "Technologie", publishedAt: "2026-03-24", excerpt: "Künstliche Intelligenz verändert die Arbeit von Bausachverständigen grundlegend. Wer jetzt die richtigen Weichen stellt, spart nicht nur Zeit — sondern sichert sich einen entscheidenden Wettbewerbsvorteil.", body: [ b("b1","h2","Die Ausgangslage"), b("b2","normal","Die Erstellung eines qualifizierten Baugutachtens dauert traditionell mehrere Tage bis Wochen. Studien zeigen, dass bis zu 70 Prozent der Arbeitszeit auf Routinetätigkeiten entfallen."), ] });
    await client.createOrReplace({ _id: "post-jveg-honorar-berechnen", _type: "post", title: "JVEG Honorar berechnen: So rechnen Sachverständige korrekt ab", slug: { _type: "slug", current: "jveg-honorar-berechnen" }, category: "Abrechnung", publishedAt: "2026-03-25", excerpt: "Das Justizvergütungs- und -entschädigungsgesetz (JVEG) regelt die Vergütung gerichtlich bestellter Sachverständiger in Deutschland. Fehler bei der Abrechnung kosten bares Geld.", body: [ b("b1","h2","Was ist das JVEG?"), b("b2","normal","Das JVEG gilt seit 2004 und regelt die Entschädigung von Sachverständigen im Auftrag von Gerichten. Für Sachverständige ist vor allem §9 JVEG maßgeblich, der die Vergütungshöhe nach Honorargruppen festlegt."), ] });
    await client.createOrReplace({ _id: "post-feuchtigkeitsschaeden-gutachten", _type: "post", title: "Feuchtigkeitsschäden im Baugutachten: Ursachen, Normen und Dokumentation", slug: { _type: "slug", current: "feuchtigkeitsschaeden-gutachten" }, category: "Fachthema", publishedAt: "2026-03-28", excerpt: "Feuchtigkeitsschäden sind der häufigste Anlass für Baugutachten in Deutschland. Eine strukturierte Vorgehensweise bei Dokumentation und Bewertung ist entscheidend.", body: [ b("b1","h2","Warum Feuchtigkeitsschäden so häufig begutachtet werden"), b("b2","normal","Feuchtigkeitsschäden sind für rund 30 Prozent aller Baumängel in Deutschland verantwortlich. Besonders betroffen: Kellergeschosse, Flachdächer, Balkone und Terrassen."), ] });
    await client.createOrReplace({ _id: "post-software-vergleich", _type: "post", title: "Bausachverständiger Software Vergleich 2026: Die besten Tools im Überblick", slug: { _type: "slug", current: "bausachverstaendiger-software-vergleich" }, category: "Vergleich", publishedAt: "2026-03-31", excerpt: "Welche Software setzen Bausachverständige heute ein — und welche Tools sparen wirklich Zeit?", body: [ b("b1","h2","Der Markt im Überblick"), b("b2","normal","Über 60 Prozent der deutschen Bausachverständigen erstellen ihre Gutachten noch immer mit Microsoft Word. Nur rund 15 Prozent nutzen spezialisierte Gutachtensoftware."), ] });
    await client.createOrReplace({ _id: "post-eu-ai-act-gutachtenwesen", _type: "post", title: "EU AI Act und Gutachtenwesen: Was Sachverständige jetzt wissen müssen", slug: { _type: "slug", current: "eu-ai-act-gutachtenwesen" }, category: "KI & Recht", publishedAt: "2026-04-14", excerpt: "Der EU AI Act ist seit August 2024 in Kraft. Für Sachverständige, die KI-Werkzeuge einsetzen, stellen sich konkrete Fragen: Welche Anforderungen gelten?", body: [ b("b1","h2","Risikokategorien im EU AI Act"), b("b2","normal","Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotenzial. KI-Systeme im Bereich der Rechtspflege fallen grundsätzlich in die Kategorie hohes Risiko."), ] });
    await client.createOrReplace({ _id: "post-beweisbeschluss-ki-auswertung", _type: "post", title: "Beweisbeschlüsse strukturiert auswerten: Was KI heute schon kann", slug: { _type: "slug", current: "beweisbeschluss-ki-auswertung" }, category: "Technik", publishedAt: "2026-04-08", excerpt: "Der Beweisbeschluss ist das zentrale Dokument jedes gerichtlichen Gutachtenauftrags. KI-Systeme können dieses Dokument heute automatisch analysieren.", body: [ b("b1","h2","Was ist ein Beweisbeschluss?"), b("b2","normal","Ein Beweisbeschluss ist die gerichtliche Anordnung, durch die ein Sachverständiger mit der Erstellung eines Gutachtens beauftragt wird."), ] });
    await client.createOrReplace({ _id: "post-digitale-akte-sachverstaendige", _type: "post", title: "Digitale Akte statt Papierordner: Wie Sachverständige Zeit gewinnen", slug: { _type: "slug", current: "digitale-akte-sachverstaendige" }, category: "Praxis", publishedAt: "2026-04-03", excerpt: "Wer kennt das nicht: Fotos auf dem Handy, Notizen auf einem Zettel, der Beweisbeschluss als PDF irgendwo im Posteingang.", body: [ b("b1","h2","Das Problem: Verstreute Informationen kosten Zeit"), b("b2","normal","Ein typischer Gutachtenauftrag erzeugt Beweisbeschluss, Unterlagen der Parteien, Fotos vom Ortstermin, Diktate, handschriftliche Notizen, DIN-Normen und frühere Korrespondenz."), ] });

    return NextResponse.json({ success: true, message: "homePage + datenschutz + kontaktPage + ablaufPage + funktionenPage + 9 Blog-Posts erfolgreich eingespielt." });

  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
