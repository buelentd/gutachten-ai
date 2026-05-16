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
        { _key: "ds5", title: "5. Cookies und Analyse-Tools", content: "Für die Verwaltung Ihrer Einwilligung zu Cookies setzen wir den Consent-Management-Dienst Cookiebot ein (Anbieter: Cybot A/S, Havnegade 39, 1058 Kopenhagen, Dänemark). Cookiebot blockiert Analyse- und Marketing-Cookies, bis Sie aktiv einwilligen.\n\nCookiebot setzt dazu ein technisch notwendiges Cookie:\n— CookieConsent: speichert Ihre Einwilligungseinstellungen. Speicherdauer: 12 Monate. Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TTDSG (unbedingt erforderlich für den ausdrücklich gewünschten Telemediendienst), keine Einwilligung erforderlich.\n\nZur Messung und Analyse der Nutzung binden wir — nach Ihrer Einwilligung — Google Analytics 4 ein. Anbieter ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Google Analytics 4 wird erst geladen, nachdem Sie über Cookiebot in die Analyse-Cookies eingewilligt haben. In diesem Fall werden folgende Cookies gesetzt:\n\n— _ga: dient zur Unterscheidung einzelner Besucher. Speicherdauer: 24 Monate.\n— _ga_MZNP1LYCPH: speichert Session-Informationen zur aktuellen Property. Speicherdauer: 24 Monate.\n\nZweck: statistische Auswertung der Website-Nutzung zur Verbesserung des Angebots. Rechtsgrundlage ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO in Verbindung mit § 25 Abs. 1 TTDSG.\n\nSie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen oder anpassen — entweder über den Link \"Cookie-Einstellungen\" im Footer dieser Seite oder durch Löschen der Cookies in Ihrem Browser.\n\nIm Rahmen der Verarbeitung können Daten an Google LLC in den USA übermittelt werden. Google LLC ist zertifiziert nach dem EU-US Data Privacy Framework." },
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
    await client.createOrReplace({ _id: "post-din-normen-ki", _type: "post",
      title: "DIN-Normen im Baugutachten: Welche Normen Sachverständige zitieren – und wie KI bei der Recherche hilft",
      slug: { _type: "slug", current: "din-normen-ki" },
      category: "Recht & Normen",
      publishedAt: "2026-05-16",
      excerpt: "DIN-Normen im Baugutachten konkretisieren die anerkannten Regeln der Technik. Welche Normen wann anwendbar sind, welche Fassung gilt und wie KI-gestützte Software bei der Recherche unterstützt – ein systematischer Überblick über DIN 4108, DIN 18533, DIN 4109 und DIN V 18599.",
      body: [
        b("dn0","normal","DIN-Normen im Baugutachten konkretisieren die anerkannten Regeln der Technik. Wer als Bausachverständiger ein Gutachten schreibt, zitiert regelmäßig DIN-Normen als Maßstab für die Beurteilung von Mängeln und Schäden. Welche Normen wann anwendbar sind, welche Fassung gilt und wie KI-gestützte Software bei der Recherche unterstützt – das klärt dieser Beitrag systematisch."),
        b("dn1","h2","Warum DIN-Normen für Bausachverständige rechtlich verbindlich sind"),
        b("dn2","normal","DIN-Normen sind grundsätzlich keine Rechtsnormen, sondern privatrechtliche Empfehlungen des Deutschen Instituts für Normung. Sie entfalten Bindungswirkung erst, wenn sie durch Gesetz oder Verordnung in Bezug genommen werden – etwa DIN V 18599 im Gebäudeenergiegesetz – oder vertraglich vereinbart sind. Im Gerichtsalltag haben sie dennoch einen hohen Stellenwert, weil sie regelmäßig die anerkannten Regeln der Technik wiedergeben. Wo eine DIN-Norm den allgemein anerkannten technischen Standard zutreffend abbildet, wird der Sachverständige ihre Einhaltung als Mindeststandard verlangen."),
        b("dn3","h2","Anerkannte Regeln der Technik, Stand der Technik, Stand von Wissenschaft und Technik"),
        b("dn4","normal","Drei Begriffe sind sauber zu unterscheiden. Anerkannte Regeln der Technik sind nach ständiger BGH-Rechtsprechung wissenschaftlich richtige Verfahren, die in der Praxis erprobt sind und sich bewährt haben (BGH VII ZR 184/97). Stand der Technik geht darüber hinaus und umfasst auch noch nicht allgemein anerkannte, aber technisch ausgereifte Verfahren. Stand von Wissenschaft und Technik bezeichnet den jeweils aktuellsten Forschungsstand. Der Bausachverständige sollte im Gutachten ausdrücklich angeben, welchen Maßstab er anlegt."),
        b("dn5","h2","Die wichtigsten DIN-Normen im Baugutachten"),
        b("dn6","normal","Die DIN 4108-Reihe und DIN 18533 zählen zu den meistzitierten DIN-Normen im Baugutachten zu Feuchteschäden. Daneben sind DIN 4109 (Schallschutz), DIN EN 13501 (Brandverhalten) und seit 2024 DIN V 18599 (energetische Bewertung) zentral."),
        b("dn7","h3","DIN 4108 – Wärme- und Feuchteschutz"),
        b("dn8","normal","Die DIN 4108-Reihe regelt den Wärmeschutz und Feuchteschutz von Gebäuden. Wichtige Teile: DIN 4108-2:2013-02 Mindestanforderungen Wärmeschutz, DIN 4108-3:2024-03 klimabedingter Feuchteschutz (Glaser-Verfahren), DIN 4108-4:2020-11 Bemessungswerte, DIN 4108-7:2011-01 Luftdichtheit, DIN/TS 4108-8 Schimmelvermeidung. DIN 4108 Beiblatt 2:2019-06 mit Berichtigung 1:2025-02 enthält typische Wärmebrücken-Detailbeispiele."),
        b("dn9","h3","DIN 18533, 18531, 18534 – Abdichtungen"),
        b("dn10","normal","Die DIN 18533-Familie löste 2017 die alte DIN 18195 ab. DIN 18533-1:2017-07 regelt die Abdichtung erdberührter Bauteile, DIN 18531 die Dachabdichtung, DIN 18534 die Abdichtung von Innenräumen (Bäder, Küche). Wichtig ist die Differenzierung nach Wassereinwirkungsklasse (W1 bis W4) – sie bestimmt das erforderliche Abdichtungssystem."),
        b("dn11","h3","DIN 4109 – Schallschutz"),
        b("dn12","normal","DIN 4109-1:2018-01 regelt den Mindestschallschutz von Gebäuden. Die Norm gibt Mindestanforderungen vor, keinen erhöhten Schallschutz. Bei Schallschutz-Gutachten unterscheidet der Sachverständige zwischen gesetzlicher Mindestanforderung (DIN 4109-1) und vereinbartem erhöhtem Schutzniveau (z. B. nach VDI 4100 oder DIN 4109-5)."),
        b("dn13","h3","DIN EN 13501 – Brandverhalten"),
        b("dn14","normal","DIN EN 13501-1 klassifiziert das Brandverhalten von Bauprodukten europaweit einheitlich. Die Klassen reichen von A1 (nicht brennbar) über B (schwer entflammbar) bis F (leicht entflammbar). Bei Fassaden-Gutachten nach Bränden wird der Sachverständige regelmäßig auf diese Klassifizierung Bezug nehmen, ergänzt um die landesrechtlichen Bauordnungen."),
        b("dn15","h3","DIN V 18599 – Energetische Bewertung (GEG)"),
        b("dn16","normal","DIN 4108-6 wurde für öffentlich-rechtliche Nachweise und Energieausweise zum 01.01.2024 durch DIN V 18599 abgelöst. Die Vornorm bilanziert den Energiebedarf für Heizung, Trinkwarmwasser, Lüftung, Kühlung und Beleuchtung. Für energetische Sanierungsgutachten ist sie heute der zentrale Referenzpunkt; DIN 4108-6 darf für GEG-Nachweise nicht mehr verwendet werden."),
        b("dn17","h2","Welche Normfassung gilt – Baujahr und anerkannte Regeln des Baujahreszeitraums"),
        b("dn18","normal","Maßstab für Mängel ist nach ständiger Rechtsprechung die zur Bauzeit geltende Fassung der DIN-Norm (BGH V ZR 182/12, Urteil vom 04.10.2013). Ein Altbau aus 1985 wird nicht an DIN 4108-3:2024 gemessen, sondern an der damals geltenden Fassung. Bei Neubauten und wesentlichen Umbauten gilt die aktuelle Normfassung zum Zeitpunkt der Bauausführung. Im Gutachten wird die zitierte Normfassung mit Ausgabedatum benannt (Beispiel: \"DIN 4108-3:2024-03\")."),
        b("dn19","h2","Wie KI bei der Normenrecherche unterstützt – und was sie nicht ersetzt"),
        b("dn20","normal","KI-gestützte Software kann DIN-Normen-Recherche beschleunigen, ersetzt aber die sachverständige Würdigung nicht. Drei sinnvolle Anwendungsfälle: Erstens semantische Suche – die KI findet zu einem Schadensbild die thematisch passenden Normen und WTA-Merkblätter. Zweitens Versionsvergleich – die KI markiert Änderungen zwischen alter und neuer Fassung. Drittens Querverweis-Erkennung – die KI extrahiert die Verweiskette und schlägt weitere zu prüfende Normen vor. Die Beurteilung, ob eine Norm im konkreten Fall einschlägig ist, bleibt sachverständige Tätigkeit."),
        b("dn21","h2","Häufige Fehler beim Normenzitat im Baugutachten"),
        b("dn22","normal","Wiederkehrende Fehler: Erstens Zitat zurückgezogener Normen ohne Hinweis auf den Ersatz – DIN 4108-6 wurde 2024 durch DIN V 18599 ersetzt. Zweitens Verwechslung von U-Wert und Wärmedurchlasswiderstand. Drittens fehlender Verweis auf den Anwendungsbereich: DIN 18533 gilt für erdberührte Bauteile, nicht für Dächer. Viertens Zitat ohne Fassungsdatum. Fünftens Vermengung von Mindest- und erhöhtem Schallschutz."),
        b("dn23","h2","Fazit"),
        b("dn24","normal","DIN-Normen sind das wichtigste Bezugssystem für Bausachverständige bei der Beurteilung von Mängeln und Schäden. Die Auswahl der einschlägigen Norm und ihrer Fassung folgt dem Anwendungsbereich und der Bauzeit. KI-gestützte Recherche-Tools sparen Zeit bei der semantischen Suche und beim Versionsvergleich, ersetzen aber die fachliche Würdigung nicht. Wer sauber zitiert, gibt Norm, Teil, Fassungsdatum und Anwendungsbereich an."),
      ] });
    await client.createOrReplace({ _id: "post-ki-gutachten-2025", _type: "post", title: "KI in der Gutachtenerstellung: Was Bausachverständige jetzt wissen müssen", slug: { _type: "slug", current: "ki-gutachten-2025" }, category: "Technologie", publishedAt: "2026-03-24", excerpt: "Künstliche Intelligenz verändert die Arbeit von Bausachverständigen grundlegend. Wer jetzt die richtigen Weichen stellt, spart nicht nur Zeit — sondern sichert sich einen entscheidenden Wettbewerbsvorteil.", body: [ b("b1","h2","Die Ausgangslage"), b("b2","normal","Die Erstellung eines qualifizierten Baugutachtens dauert traditionell mehrere Tage bis Wochen. Studien zeigen, dass bis zu 70 Prozent der Arbeitszeit auf Routinetätigkeiten entfallen."), ] });
    await client.createOrReplace({ _id: "post-jveg-honorar-berechnen", _type: "post", title: "JVEG Honorar berechnen: So rechnen Sachverständige korrekt ab", slug: { _type: "slug", current: "jveg-honorar-berechnen" }, category: "Abrechnung", publishedAt: "2026-03-25", excerpt: "Das Justizvergütungs- und -entschädigungsgesetz (JVEG) regelt die Vergütung gerichtlich bestellter Sachverständiger in Deutschland. Fehler bei der Abrechnung kosten bares Geld.", body: [ b("b1","h2","Was ist das JVEG?"), b("b2","normal","Das JVEG gilt seit 2004 und regelt die Entschädigung von Sachverständigen im Auftrag von Gerichten. Für Sachverständige ist vor allem §9 JVEG maßgeblich, der die Vergütungshöhe nach Honorargruppen festlegt."), ] });
    await client.createOrReplace({ _id: "post-feuchtigkeitsschaeden-gutachten", _type: "post",
      title: "Feuchtigkeitsschäden im Gutachten: Ursachenermittlung, Messverfahren und Sanierungsbewertung",
      slug: { _type: "slug", current: "feuchtigkeitsschaeden-gutachten" },
      category: "Fachthema",
      publishedAt: "2026-05-16",
      excerpt: "Feuchtigkeitsschäden im Gutachten erfordern systematische Ursachenermittlung nach DIN 4108-3 und DIN 18533. Schadensbilder erkennen, Messverfahren auswählen, Normen zuordnen, Sanierung bewerten – das systematische Vorgehen für Sachverständige.",
      body: [
        b("fs0","normal","Feuchtigkeitsschäden zählen zu den häufigsten Gutachtenanlässen im Bauwesen – und zu den fachlich anspruchsvollsten. Eine falsche Ursachenzuordnung führt zu falschen Sanierungsempfehlungen und neuen Schäden."),
        b("fs1","h2","Häufigste Schadensbilder im Baugutachten"),
        b("fs2","normal","Salzausblühungen an Kellerwänden deuten auf aufsteigende Feuchte oder seitliche Wassereinwirkung hin. Schimmel an Außenecken im Obergeschoss spricht für Wärmebrücken in Kombination mit erhöhter Raumluftfeuchte. Putzabplatzungen in Sockelbereichen weisen auf Spritzwasser oder fehlende horizontale Sperre. Tropfwasserspuren an Dachuntersichten sind typisch für Dachundichtigkeiten oder Tauwasserausfall in der Konstruktion. Wasserränder an Decken zeigen Leitungsschäden im darüber liegenden Geschoss."),
        b("fs3","h2","Ursachenkategorien – Bauphysik, Nutzung, Leitungsschaden, aufsteigende Feuchte"),
        b("fs4","normal","Drei Hauptursachen sind zu unterscheiden. Erstens bauphysikalische Mängel: fehlende oder mangelhafte Abdichtung nach DIN 18533, Wärmebrücken nach DIN 4108 Beiblatt 2, fehlende Luftdichtheit nach DIN 4108-7. Zweitens Leitungs- und Abwasserschäden: undichte Wasserleitungen, defekte Abwasserrohre, Leckagen. Drittens nutzungsbedingte Feuchte: Kondensat an Außenecken durch erhöhte Raumluftfeuchte ohne ausreichende Lüftung. Eine vierte Kategorie ist aufsteigende Feuchte aus dem Erdreich bei fehlender horizontaler Sperre."),
        b("fs5","h2","Messverfahren und Geräte"),
        b("fs6","normal","Die quantitative Erfassung der Feuchte ist Grundlage jedes belastbaren Feuchtigkeitsschäden-Gutachtens. Mehrere Verfahren stehen zur Verfügung, mit unterschiedlicher Eindringtiefe und Aussagekraft."),
        b("fs7","h3","Widerstandsmessung und kapazitive Verfahren"),
        b("fs8","normal","Widerstandsmessgeräte messen den elektrischen Widerstand zwischen zwei Elektroden – je feuchter das Material, desto niedriger der Widerstand. Vorteil: schnell, günstig. Nachteil: nur oberflächliche Messung (1 bis 2 cm Tiefe), salzempfindlich. Kapazitive Verfahren erreichen 3 bis 5 cm Eindringtiefe. Beide Verfahren liefern relative Werte, keine absoluten Feuchtigkeitsgehalte."),
        b("fs9","h3","Mikrowelle und Radar"),
        b("fs10","normal","Mikrowellen- und Radarverfahren erreichen bis zu 30 cm Eindringtiefe und sind materialunabhängig. Sie eignen sich für die Lokalisierung von Feuchtigkeit in tieferen Wandschichten. Quantitative Aussagen erfordern materialspezifische Kalibrierung."),
        b("fs11","h3","Darrtrocknung nach DIN EN ISO 12570"),
        b("fs12","normal","Bei Feuchtigkeitsschäden im Mauerwerk liefert die Darrtrocknung nach DIN EN ISO 12570 den justiziablen Referenzwert. Eine Materialprobe wird gewogen, im Trockenschrank bei 105 °C bis zur Massekonstanz getrocknet und erneut gewogen; aus der Massendifferenz ergibt sich der absolute Feuchtegehalt in Masseprozent. Die Methode ist zerstörend, aber die einzige, die einen gerichtsfesten Absolutwert liefert."),
        b("fs13","h3","Thermografie"),
        b("fs14","normal","Thermografie nach DIN EN 13187 visualisiert Temperaturunterschiede an der Bauteiloberfläche und damit indirekt Feuchte- und Wärmebrückenbereiche. Für eine quantitative Auswertung ist eine Temperaturdifferenz innen/außen von mindestens 15 K erforderlich. Beste Aufnahmezeit: frühe Morgenstunden im Winter bei stabilem Wetter."),
        b("fs15","h3","Raumklima- und CO2-Messung"),
        b("fs16","normal","Bei nutzungsbedingten Feuchtigkeitsschäden gehört die Raumklima-Messung zum Standard: Lufttemperatur, relative Feuchte und CO2-Konzentration über mindestens 14 Tage. Hohe CO2-Werte (über 1.500 ppm) deuten auf ungenügendes Lüften hin – ein wichtiges Indiz für nutzerbedingte Feuchte."),
        b("fs17","h2","Normative Grundlagen – DIN 4108-3, DIN 18533, DIN/TS 4108-8"),
        b("fs18","normal","DIN 4108-3:2024-03 regelt den klimabedingten Feuchteschutz mit dem Glaser-Verfahren zur Tauwasserberechnung. DIN 18195 enthält die Begriffe der Bauwerksabdichtung. DIN 18533 normiert die Abdichtung erdberührter Bauteile (W1 bis W4), DIN 18534 die Abdichtung von Innenräumen. DIN/TS 4108-8 bündelt das Vorgehen zur Schimmelvermeidung in Innenräumen."),
        b("fs19","h2","WTA-Merkblätter und UBA-Schimmelleitfaden"),
        b("fs20","normal","Neben den DIN-Normen sind die WTA-Merkblätter der Wissenschaftlich-Technischen Arbeitsgemeinschaft Stand der Praxis. Wichtige Merkblätter: 6-2 zur hygrothermischen Simulation, 6-5 zur Innendämmung, 4-5 zur Mauerwerksbeurteilung, 4-12 zur Kontrolle nach Schimmelsanierung. Der UBA-Schimmelleitfaden (Fassung 2017) ist die zentrale Referenz für Schimmelpilzbefall in Innenräumen."),
        b("fs21","h2","Schimmelgutachten – Abgrenzung Bauphysik versus Nutzerverhalten"),
        b("fs22","normal","Das Schimmelgutachten unterscheidet zwischen baulicher Ursache und nutzerbedingter Feuchtelast. Der entscheidende Maßstab: Erreicht die Oberflächentemperatur der Innenwand unter normalen Nutzungsbedingungen (20 °C Raumluft, 50 % relative Feuchte) den Taupunkt von 12,6 °C, liegt eine bauliche Ursache vor. Liegt die Oberflächentemperatur deutlich darüber, kommt nutzerbedingte Feuchte als Ursache in Betracht. Die Abgrenzung hat erhebliche zivilrechtliche Konsequenzen: bei baulicher Ursache haftet der Vermieter, bei nutzerbedingter Ursache der Mieter."),
        b("fs23","h2","Sanierungsbewertung und Beweissicherung"),
        b("fs24","normal","Die Sanierungsempfehlung folgt aus der Ursachenanalyse. Bauliche Ursachen erfordern bauliche Maßnahmen: nachträgliche Abdichtung, Wärmebrücken-Sanierung, Innendämmung nach WTA 6-5. Nutzungsbedingte Ursachen werden durch geänderte Lüftung adressiert. Die Beweissicherung erfolgt im streitigen Fall nach § 485 ZPO. Alle Messstellen sind lückenlos zu dokumentieren – mit Foto, Datum und Messwert."),
        b("fs25","h2","KI-gestützte Auswertung von Feuchtigkeitsdaten und Fotos"),
        b("fs26","normal","KI-Werkzeuge leisten dreierlei: Erstens Bilderkennung – Schadensbilder werden klassifiziert und mit typischen Ursachenmustern verknüpft. Zweitens automatische Übernahme von Messprotokollen – Messwerte, Geräte-IDs und Messzeitpunkte werden aus Geräte-Exports importiert. Drittens Plausibilitätsprüfung – die KI erkennt Widersprüche zwischen Schadensbild und Messwerten. Die Zuordnung zur Ursachenkategorie und die Sanierungsempfehlung bleiben sachverständige Tätigkeit nach § 407a Abs. 1 ZPO."),
        b("fs27","h2","Fazit"),
        b("fs28","normal","Systematisches Vorgehen: Schadensbildanalyse, Ursachenhypothesen, Messverfahren auswählen, Normen zuordnen (DIN 4108-3, DIN 18533, DIN/TS 4108-8), WTA-Merkblätter heranziehen, Abgrenzung Bauphysik/Nutzung über Oberflächentemperatur (Taupunkt 12,6 °C bei 20/50). Die Darrtrocknung nach DIN EN ISO 12570 liefert den gerichtsfesten Absolutwert."),
      ] });
    await client.createOrReplace({ _id: "post-software-vergleich", _type: "post", title: "Bausachverständiger Software Vergleich 2026: Die besten Tools im Überblick", slug: { _type: "slug", current: "bausachverstaendiger-software-vergleich" }, category: "Vergleich", publishedAt: "2026-03-31", excerpt: "Welche Software setzen Bausachverständige heute ein — und welche Tools sparen wirklich Zeit?", body: [ b("b1","h2","Der Markt im Überblick"), b("b2","normal","Über 60 Prozent der deutschen Bausachverständigen erstellen ihre Gutachten noch immer mit Microsoft Word. Nur rund 15 Prozent nutzen spezialisierte Gutachtensoftware."), ] });
    await client.createOrReplace({ _id: "post-eu-ai-act-gutachtenwesen", _type: "post", title: "EU AI Act und Gutachtenwesen: Was Sachverständige jetzt wissen müssen", slug: { _type: "slug", current: "eu-ai-act-gutachtenwesen" }, category: "KI & Recht", publishedAt: "2026-04-14", excerpt: "Der EU AI Act ist seit August 2024 in Kraft. Für Sachverständige, die KI-Werkzeuge einsetzen, stellen sich konkrete Fragen: Welche Anforderungen gelten?", body: [ b("b1","h2","Risikokategorien im EU AI Act"), b("b2","normal","Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotenzial. KI-Systeme im Bereich der Rechtspflege fallen grundsätzlich in die Kategorie hohes Risiko."), ] });
    await client.createOrReplace({ _id: "post-beweisbeschluss-ki-auswertung", _type: "post",
      title: "Beweisbeschluss strukturiert auswerten: Wie KI Sachverständigen bei der Auftragsanalyse hilft",
      slug: { _type: "slug", current: "beweisbeschluss-ki-auswertung" },
      category: "Technik",
      publishedAt: "2026-05-16",
      excerpt: "Der Beweisbeschluss bestimmt den Auftragsrahmen nach § 404a ZPO. Wer ihn nicht versteht oder Teilfragen übersieht, riskiert Ergänzungsgutachten. Systematisches Vorgehen und KI-gestützte Analyse für Bausachverständige.",
      body: [
        b("bb0","normal","Der Beweisbeschluss bestimmt den Auftragsrahmen des Sachverständigen nach § 404a ZPO. Wer ihn nicht versteht oder Teilfragen übersieht, riskiert Nachfragen des Gerichts und Ergänzungsgutachten."),
        b("bb1","h2","Der Beweisbeschluss als Auftragsgrundlage des Sachverständigen"),
        b("bb2","normal","Der Beweisbeschluss definiert das Beweisthema, formuliert die einzelnen Beweisfragen, benennt die zu beachtenden Anknüpfungstatsachen und gibt der oder dem Sachverständigen den Rahmen für die Ermittlungsbefugnisse vor. Der Beweisbeschluss bindet den Sachverständigen rechtlich – über seinen Rahmen hinaus tätig zu werden bedeutet eigenmächtige Auftragserweiterung und wird vergütungsrechtlich nicht erstattet."),
        b("bb3","h2","Rechtliche Grundlagen – §§ 404, 404a, 407a ZPO"),
        b("bb4","normal","§ 404 ZPO regelt die Auswahl: Das Prozessgericht bestimmt den Sachverständigen, wobei öffentlich bestellte und vereidigte Sachverständige nach Absatz 3 Vorrang haben. § 404a ZPO regelt die Leitung der Sachverständigentätigkeit durch das Gericht. Absatz 3 weist dem Gericht die Festlegung der zugrunde zu legenden Tatsachen bei streitigem Sachverhalt zu. § 407a ZPO regelt die Pflichten der Sachverständigen: unverzügliche Prüfung der eigenen Sachkunde, Hinweispflicht bei Befangenheitsgrund oder Auftragserweiterung."),
        b("bb5","h2","Anatomie eines Beweisbeschlusses"),
        b("bb6","h3","Beweisthema und Beweisfragen"),
        b("bb7","normal","Das Beweisthema benennt den Gegenstand der Begutachtung. Darunter folgen nummerierte Beweisfragen, die das Thema in einzelne Tatsachenkomplexe zerlegen. Jede Beweisfrage ist eigenständig zu beantworten. Wer im Gutachten die Reihenfolge der Fragen verändert oder Fragen zusammenfasst, schafft Unklarheit."),
        b("bb8","h3","Anknüpfungstatsachen"),
        b("bb9","normal","Anknüpfungstatsachen sind die Tatsachen, von denen der Sachverständige bei seiner Begutachtung auszugehen hat. Nach § 404a Abs. 3 ZPO ist das Gericht für die Festlegung der Anknüpfungstatsachen zuständig, wenn der Sachverhalt streitig ist. Der Sachverständige beurteilt nicht, was wahr ist, sondern was unter Annahme der vom Gericht festgelegten Tatsachen technisch zu sagen ist."),
        b("bb10","h3","Weisungen nach § 404a ZPO"),
        b("bb11","normal","Das Gericht kann konkrete Weisungen erteilen: bestimmte Materialien zu untersuchen, bestimmte Verfahren anzuwenden, Parteivertreter zum Ortstermin zu laden. Diese Weisungen sind bindend."),
        b("bb12","h2","Häufige Probleme – unklare Beweisfragen, fehlende Anknüpfungstatsachen"),
        b("bb13","normal","Beweisfragen, die mehrere Tatsachenkomplexe in einem Satz vermengen, müssen aufgegliedert werden. Beweisfragen mit unklarem Bezugspunkt bleiben rechtlich, nicht sachverständig. Fehlende Anknüpfungstatsachen bei streitigem Sachverhalt erfordern Rücksprache – der Sachverständige kann nicht selbst entscheiden, welche Version er zugrunde legt. Bei Unklarheiten verlangt § 404a Abs. 2 ZPO die Rücksprache mit dem Gericht."),
        b("bb14","h2","Pflichten nach § 407a ZPO bei der Auftragsannahme"),
        b("bb15","normal","Mit Erhalt des Beweisbeschlusses treten die Pflichten aus § 407a ZPO ein. Erstens: unverzügliche Prüfung, ob der Auftrag in das eigene Sachgebiet fällt. Zweitens: Hinweispflicht auf Befangenheitsgründe. Drittens: Hinweispflicht bei Auftragserweiterung. Viertens: ordnungsgemäße Aktenherausgabe bei Erledigung. Ihre Verletzung kann zur Honorarkürzung und zur Haftung führen."),
        b("bb16","h2","KI-gestützte Auswertung des Beweisbeschlusses"),
        b("bb17","h3","Extraktion der Beweisfragen"),
        b("bb18","normal","Das KI-System liest den Beweisbeschluss und extrahiert die nummerierten Beweisfragen automatisch. Dabei erkennt es Mehrfachfragen, die in einem Satz zusammengefasst sind, und schlägt eine Aufgliederung in Teilfragen vor. Die fachliche Entscheidung, ob die Aufgliederung übernommen wird, bleibt bei der Sachverständigen."),
        b("bb19","h3","Identifikation der Anknüpfungstatsachen"),
        b("bb20","normal","Die KI markiert im Beweisbeschluss die vom Gericht festgelegten Anknüpfungstatsachen und gleicht sie gegen die Aktenlage ab. Lücken werden markiert – etwa wenn das Gericht eine streitige Tatsache nicht festgelegt hat."),
        b("bb21","h3","Plausibilitätsprüfung gegen die Akte"),
        b("bb22","normal","Die KI prüft, ob die im Beweisbeschluss genannten Anknüpfungstatsachen und Beweismittel in der beigezogenen Akte enthalten sind. Fehlende Anlagen oder Protokolle werden markiert. Bei umfangreichen Akten liefert die Volltext-Recherche schnelle Treffer für die Detailauswertung."),
        b("bb23","h2","Wann der Sachverständige Rücksprache mit dem Gericht halten muss"),
        b("bb24","normal","Konkrete Anlässe für Rücksprache nach § 404a Abs. 2 ZPO: unklare oder mehrdeutige Beweisfragen, fehlende Anknüpfungstatsachen bei streitigem Sachverhalt, Auftragserweiterung, fehlende Beweismittel oder Akten. Die Rücksprache erfolgt schriftlich mit konkret formulierten Klärungsfragen. Eigenmächtige Umformulierung der Beweisfragen ist unzulässig."),
        b("bb25","h2","Fazit"),
        b("bb26","normal","Die strukturierte Auswertung des Beweisbeschlusses ist die Grundlage jedes Gutachtens. Wer Beweisthema, Beweisfragen und Anknüpfungstatsachen sauber identifiziert, vermeidet Nachfragen und Ergänzungsgutachten. KI-Software unterstützt die Extraktion, identifiziert Lücken und prüft die Plausibilität gegen die Akte – die fachliche Würdigung bleibt bei der Sachverständigen."),
      ] });
    await client.createOrReplace({ _id: "post-digitale-akte-sachverstaendige", _type: "post", title: "Digitale Akte statt Papierordner: Wie Sachverständige Zeit gewinnen", slug: { _type: "slug", current: "digitale-akte-sachverstaendige" }, category: "Praxis", publishedAt: "2026-04-03", excerpt: "Wer kennt das nicht: Fotos auf dem Handy, Notizen auf einem Zettel, der Beweisbeschluss als PDF irgendwo im Posteingang.", body: [ b("b1","h2","Das Problem: Verstreute Informationen kosten Zeit"), b("b2","normal","Ein typischer Gutachtenauftrag erzeugt Beweisbeschluss, Unterlagen der Parteien, Fotos vom Ortstermin, Diktate, handschriftliche Notizen, DIN-Normen und frühere Korrespondenz."), ] });

    return NextResponse.json({ success: true, message: "homePage + datenschutz + kontaktPage + ablaufPage + funktionenPage + 9 Blog-Posts erfolgreich eingespielt." });

  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
