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

    // ─── 1. zeitersparnis-bausachverstaendige ────────────────────────────────
    await client.createOrReplace({
      _id: "post-zeitersparnis",
      _type: "post",
      title: "85% weniger Zeit für Gutachten: So nutzen Bausachverständige KI richtig",
      slug: { _type: "slug", current: "zeitersparnis-bausachverstaendige" },
      category: "Praxis",
      publishedAt: "2026-03-15",
      excerpt: "Eine Zahl, die zunächst unglaubwürdig klingt — und doch der Realität entspricht: Bausachverständige, die KI-gestützte Software einsetzen, berichten von einer Zeitersparnis von bis zu 85 Prozent bei der Gutachtenerstellung.",
      body: [
        b("b1","h2","Wo geht die Zeit wirklich hin?"),
        b("b2","normal","Um zu verstehen, warum KI so viel Zeit spart, muss man zunächst verstehen, wo die Zeit bei der traditionellen Gutachtenerstellung verloren geht. Eine Analyse zeigt: 35% Texterstellung, 20% Normenrecherche, 15% Fotodokumentation, 10% Formatierung — nur 20% entfallen auf die eigentliche fachliche Bewertung."),
        b("b3","h2","KI übernimmt die Routinearbeit"),
        b("b4","normal","Der Sachverständige gibt die Eckdaten ein — Schadensart, betroffene Bauteile, Beobachtungen vor Ort. Die KI generiert daraus einen vollständigen Textbaustein in korrekter Fachsprache. Was früher zwei Stunden Schreibarbeit bedeutete, dauert jetzt fünf Minuten Überprüfung und Freigabe."),
        b("b5","h2","Normenrecherche: Automatisch und immer aktuell"),
        b("b6","normal","Statt manuell durch DIN-Kataloge zu blättern, identifiziert die KI automatisch alle relevanten Normen. Die Recherche, die früher 30-60 Minuten dauerte, erledigt das System in Sekunden — und mit höherer Vollständigkeit."),
        b("b7","h2","Was bedeutet das in der Praxis?"),
        b("b8","normal","Ein Sachverständiger, der früher vier Arbeitstage für ein komplexes Gutachten benötigte, schafft dasselbe Gutachten heute in einem Tag. 85% Zeitersparnis bedeutet: mehr Aufträge, schnellere Lieferzeiten, weniger Korrekturrunden."),
        b("b9","h2","Fazit: Die Zeit, die Sie sparen, gehört Ihnen"),
        b("b10","normal","KI ist kein Ersatz für Expertise. Aber sie gibt Experten ihre Zeit zurück — für anspruchsvollere Aufträge, fachliche Weiterbildung oder ein besseres Gleichgewicht zwischen Arbeit und Privatleben."),
      ],
    });

    // ─── 2. din-normen-ki ────────────────────────────────────────────────────
    await client.createOrReplace({
      _id: "post-din-normen-ki",
      _type: "post",
      title: "DIN-Normen und KI: Wie Software rechtssichere Baugutachten erstellt",
      slug: { _type: "slug", current: "din-normen-ki" },
      category: "Recht & Normen",
      publishedAt: "2026-03-20",
      excerpt: "Rechtssicherheit ist das wichtigste Kriterium bei Baugutachten. Wie stellt KI-Software sicher, dass alle relevanten DIN-Normen korrekt angewendet werden — und was bedeutet das für die Haftung des Sachverständigen?",
      body: [
        b("b1","h2","DIN-Normen im Baugutachten: Die Herausforderung"),
        b("b2","normal","Ein qualifiziertes Baugutachten muss auf dem aktuellen Stand der anerkannten Regeln der Technik basieren. Allein im Bereich Bauwesen gibt es mehrere tausend relevante DIN-Normen, die sich regelmäßig ändern. Hinzu kommen VOB-Regelungen, Landesbauordnungen, BGH-Entscheidungen und berufsständische Richtlinien."),
        b("b3","h2","Wie KI die Normenrecherche automatisiert"),
        b("b4","normal","Moderne KI-Gutachtensoftware löst dieses Problem durch eine kontinuierlich aktualisierte Normdatenbank. Das System analysiert Gebäudetyp, Schadensart, Baujahr und betroffene Bauteile — und schlägt automatisch die relevanten Normen in der zum Bauzeitpunkt gültigen Fassung vor."),
        b("b5","h2","Praxisbeispiel: Feuchtigkeitsschaden im Keller"),
        b("b6","normal","Ein Sachverständiger begutachtet Feuchtigkeitsschäden im Keller eines Hauses aus dem Jahr 2005. Die KI identifiziert automatisch: DIN 18195 (Fassung 2005), WU-Richtlinie des DAfStb, DIN 4095 für Drainanlagen sowie relevante BGH-Urteile zur Abdichtungspflicht."),
        b("b7","h2","Haftung bleibt beim Sachverständigen"),
        b("b8","normal","KI-Software ist ein Assistenzsystem, kein autonomer Gutachter. Die fachliche Verantwortung und Haftung liegen ausschließlich beim Sachverständigen. Die KI liefert Vorschläge — die endgültige Beurteilung trifft immer der menschliche Experte."),
        b("b9","h2","Fazit: KI als Sicherheitsnetz für Normkonformität"),
        b("b10","normal","KI-Gutachtensoftware erhöht die Rechtssicherheit, indem sie die Normenrecherche automatisiert, Verweise auf aktuelle Fassungen sicherstellt und den Sachverständigen auf potenzielle Lücken hinweist."),
      ],
    });

    // ─── 3. ki-gutachten-2025 ────────────────────────────────────────────────
    await client.createOrReplace({
      _id: "post-ki-gutachten-2025",
      _type: "post",
      title: "KI in der Gutachtenerstellung: Was Bausachverständige jetzt wissen müssen",
      slug: { _type: "slug", current: "ki-gutachten-2025" },
      category: "Technologie",
      publishedAt: "2026-03-24",
      excerpt: "Künstliche Intelligenz verändert die Arbeit von Bausachverständigen grundlegend. Wer jetzt die richtigen Weichen stellt, spart nicht nur Zeit — sondern sichert sich einen entscheidenden Wettbewerbsvorteil.",
      body: [
        b("b1","h2","Die Ausgangslage: Warum KI im Gutachtenwesen jetzt relevant wird"),
        b("b2","normal","Die Erstellung eines qualifizierten Baugutachtens dauert traditionell mehrere Tage bis Wochen. Studien zeigen, dass bis zu 70 Prozent der Arbeitszeit auf Routinetätigkeiten entfallen. Gleichzeitig steigt die Nachfrage nach Gutachten — KI-gestützte Gutachtensoftware setzt genau hier an."),
        b("b3","h2","Welche KI-Technologien sind 2026 relevant?"),
        b("b4","normal","Spezialisierte Sprachmodelle, trainiert mit Fachliteratur, DIN-Normen und tausenden realen Gutachten, können heute präzise Fachtexte generieren. Das Ergebnis: Ein strukturierter Gutachtenentwurf auf Knopfdruck, der nur noch die fachliche Endkontrolle benötigt."),
        b("b5","h2","Sprach-zu-Text mit Fachvokabular"),
        b("b6","normal","Moderne Transkriptionssysteme verstehen Baufachbegriffe, lateinische Normbezeichnungen und regionale Ausdrücke. Sachverständige diktieren Beobachtungen direkt vor Ort — die KI transkribiert, strukturiert und bereitet den Text für das Gutachten auf."),
        b("b7","h2","Rechtssicherheit: Das entscheidende Kriterium"),
        b("b8","normal","Professionelle KI-Gutachtensoftware arbeitet mit einer kontinuierlich aktualisierten Datenbank aller relevanten DIN-Normen, VOB-Regelungen und BGH-Entscheidungen. Die KI schlägt passende Normen vor und weist auf fehlende Pflichtangaben hin."),
        b("b9","h2","Fazit"),
        b("b10","normal","KI in der Gutachtenerstellung ist heute produktionsreif und praxiserprobt. Sachverständige, die jetzt auf KI-gestützte Workflows umsteigen, berichten durchweg von erheblicher Zeitersparnis bei der Berichtserstellung."),
      ],
    });

    // ─── 4. jveg-honorar-berechnen ───────────────────────────────────────────
    await client.createOrReplace({
      _id: "post-jveg-honorar-berechnen",
      _type: "post",
      title: "JVEG Honorar berechnen: So rechnen Sachverständige korrekt ab",
      slug: { _type: "slug", current: "jveg-honorar-berechnen" },
      category: "Abrechnung",
      publishedAt: "2026-03-25",
      excerpt: "Das Justizvergütungs- und -entschädigungsgesetz (JVEG) regelt die Vergütung gerichtlich bestellter Sachverständiger in Deutschland. Fehler bei der Abrechnung kosten bares Geld — oder führen zu Kürzungen durch das Gericht.",
      body: [
        b("b1","h2","Was ist das JVEG?"),
        b("b2","normal","Das JVEG gilt seit 2004 und regelt die Entschädigung von Sachverständigen im Auftrag von Gerichten. Für Sachverständige ist vor allem §9 JVEG maßgeblich, der die Vergütungshöhe nach Honorargruppen festlegt. Wichtig: Das JVEG gilt ausschließlich für gerichtlich beauftragte Gutachten."),
        b("b3","h2","JVEG Honorargruppen für Bausachverständige"),
        b("b4","normal","Das JVEG unterscheidet 13 Honorargruppen (H1–H13). Für Bausachverständige typisch: H8 (95 €/Std., allgemeine Bausachverständige), H9 (105 €/Std., spezielle Bauschadensfragen), H10 (115 €/Std., komplexe Baukonstruktionen), H12 (135 €/Std., hochspezialisierte Fachfragen)."),
        b("b5","h2","Was kann zusätzlich abgerechnet werden?"),
        b("b6","normal","Neben dem Zeithonorar sind abrechenbar: Fahrtkosten (0,42 €/km), Schreibauslagen (0,90 € je 1.000 Anschläge), Porto- und Telekommunikationskosten (pauschal 20% der Schreibauslagen, max. 15 €) sowie Übernachtungskosten."),
        b("b7","h2","Häufige Fehler bei der JVEG-Abrechnung"),
        b("b8","normal","Falsche Honorargruppe, fehlende Zeitaufzeichnung, veraltete Fahrkostenpauschalen und nicht abgerechnete Nebenkosten — viele Sachverständige vergessen Schreibauslagen und Telekommunikationspauschalen, Geld das ihnen rechtlich zusteht."),
        b("b9","h2","JVEG-Abrechnung automatisiert erstellen"),
        b("b10","normal","KI-gestützte Gutachtensoftware erstellt auf Basis der erfassten Zeitaufzeichnungen, Fahrten und Auslagen automatisch eine JVEG-konforme Kostenrechnung — mit korrekter Honorargruppe und allen abrechenbaren Nebenkosten."),
        b("b11","h2","Fazit: JVEG-Kenntnisse sind bares Geld"),
        b("b12","normal","Wer alle Nebenkosten konsequent abrechnet und Zeitaufwand sauber dokumentiert, schöpft seinen rechtlichen Vergütungsanspruch vollständig aus. Digitale Tools helfen dabei, diesen Prozess zu standardisieren."),
      ],
    });

    // ─── 5. feuchtigkeitsschaeden-gutachten ──────────────────────────────────
    await client.createOrReplace({
      _id: "post-feuchtigkeitsschaeden-gutachten",
      _type: "post",
      title: "Feuchtigkeitsschäden im Baugutachten: Ursachen, Normen und Dokumentation",
      slug: { _type: "slug", current: "feuchtigkeitsschaeden-gutachten" },
      category: "Fachthema",
      publishedAt: "2026-03-28",
      excerpt: "Feuchtigkeitsschäden sind der häufigste Anlass für Baugutachten in Deutschland. Eine strukturierte Vorgehensweise bei Dokumentation und Bewertung ist entscheidend — sowohl für die Qualität des Gutachtens als auch für seine Beweiskraft vor Gericht.",
      body: [
        b("b1","h2","Warum Feuchtigkeitsschäden so häufig begutachtet werden"),
        b("b2","normal","Feuchtigkeitsschäden sind für rund 30 Prozent aller Baumängel in Deutschland verantwortlich. Besonders betroffen: Kellergeschosse, Flachdächer, Balkone und Terrassen sowie Sanitärbereiche. Die Begutachtung ist komplex: Ursache und Schadensort stimmen oft nicht überein."),
        b("b3","h2","Relevante DIN-Normen für Feuchtigkeitsschäden"),
        b("b4","normal","Je nach Schadensort kommen unterschiedliche Normen zur Anwendung: DIN 18195 (seit 2017 aufgeteilt in DIN 18531–18535), DIN 18531 (Abdichtung Dächer/Balkone), DIN 18533 (erdberührte Bauteile), WU-Richtlinie des DAfStb (wasserundurchlässige Bauwerke) sowie DIN 68800 (Holzschutz)."),
        b("b5","h2","Systematische Vorgehensweise bei der Begutachtung"),
        b("b6","normal","Drei Schritte: Schadensaufnahme (Lage, Ausdehnung, Intensität), Ursachenforschung (Befragung, Sichtprüfung, Messung per Feuchtemessgerät oder Thermografie), normative Einordnung (Befund vs. Normforderung). Entscheidend für die Beweiskraft: lückenlose Fotodokumentation mit Datum, Uhrzeit und Aufnahmeort."),
        b("b7","h2","Häufige Fehler bei der Begutachtung"),
        b("b8","normal","Unvollständige Normrecherche (besonders nach der DIN-18195-Reform 2017), fehlende Abgrenzung zwischen Planungs-, Ausführungs- und Instandhaltungsmängeln sowie zu allgemeine Formulierungen ohne konkreten Normbezug machen das Gutachten angreifbar."),
        b("b9","h2","Wie KI die Gutachtenerstellung unterstützt"),
        b("b10","normal","Die automatische Normvorschlag-Funktion erkennt auf Basis des Schadenstyps die relevanten Normen. Die KI-Bildanalyse klassifiziert Feuchtigkeitserscheinungen automatisch: Salzausblühungen, Schimmelbildung, Durchfeuchtungsränder und Abplatzungen werden erkannt und beschriftet."),
        b("b11","h2","Fazit"),
        b("b12","normal","Die Begutachtung von Feuchtigkeitsschäden verlangt strukturiertes Vorgehen, aktuelle Normkenntnis und saubere Dokumentation. KI-Tools beschleunigen die Routinearbeit — ohne die fachliche Kompetenz des Sachverständigen zu ersetzen."),
      ],
    });

    // ─── 6. bausachverstaendiger-software-vergleich ──────────────────────────
    await client.createOrReplace({
      _id: "post-software-vergleich",
      _type: "post",
      title: "Bausachverständiger Software Vergleich 2026: Die besten Tools im Überblick",
      slug: { _type: "slug", current: "bausachverstaendiger-software-vergleich" },
      category: "Vergleich",
      publishedAt: "2026-03-31",
      excerpt: "Welche Software setzen Bausachverständige heute ein — und welche Tools sparen wirklich Zeit? Ein ehrlicher Vergleich der wichtigsten Lösungen für Gutachtenerstellung, Dokumentation und Abrechnung.",
      body: [
        b("b1","h2","Der Markt im Überblick"),
        b("b2","normal","Über 60 Prozent der deutschen Bausachverständigen erstellen ihre Gutachten noch immer mit Microsoft Word. Nur rund 15 Prozent nutzen spezialisierte Gutachtensoftware. Das Potenzial für Effizienzgewinne ist entsprechend groß."),
        b("b3","h2","Kategorie 1: Allgemeine Textverarbeitung"),
        b("b4","normal","Microsoft Word ist bekannt und verfügbar — aber ohne DIN-Normen-Datenbank, automatische Strukturierung, Bildintegration oder JVEG-Abrechnung. Ein erfahrener Sachverständiger benötigt für ein mittelkomplexes Gutachten in Word durchschnittlich 6-8 Stunden, davon 70% Routinearbeit."),
        b("b5","h2","Kategorie 2: Spezialisierte Gutachten-Software"),
        b("b6","normal","Spezialisierte Tools bieten Textbausteine, Vorlagen und teilweise Bildverwaltung. Vorteil: Strukturierung und Wiederverwendung von Textbausteinen. Nachteil: Die meisten Systeme sind technisch veraltet und ohne KI-Unterstützung."),
        b("b7","h2","Kategorie 3: KI-gestützte Gutachtensoftware"),
        b("b8","normal","Die neueste Generation kombiniert Gutachten-Funktionen mit KI. Nutzer berichten von einer Bearbeitungszeit unter einer Stunde — das entspricht bis zu 85 Prozent Zeitersparnis gegenüber dem traditionellen Word-Ansatz."),
        b("b9","h2","Worauf kommt es bei der Auswahl an?"),
        b("b10","normal","Entscheidende Kriterien: aktuelle DIN-Normen-Datenbank, DSGVO-konforme Datenhaltung auf deutschen Servern, mobile Nutzbarkeit, JVEG-konforme Abrechnung, kostenloser Testzugang. Software die Daten auf US-amerikanischen Servern verarbeitet ist für den professionellen Einsatz nicht zu empfehlen."),
        b("b11","h2","Fazit: KI ist 2026 kein Nischentool mehr"),
        b("b12","normal","Was 2022 noch Zukunftsmusik war, ist 2026 produktionsreif. Wer heute auf moderne Software umsteigt, sichert sich einen messbaren Wettbewerbsvorteil: mehr Kapazität, schnellere Lieferzeiten, konsistentere Qualität."),
      ],
    });

    // ─── 7. eu-ai-act-gutachtenwesen ─────────────────────────────────────────
    await client.createOrReplace({
      _id: "post-eu-ai-act-gutachtenwesen",
      _type: "post",
      title: "EU AI Act und Gutachtenwesen: Was Sachverständige jetzt wissen müssen",
      slug: { _type: "slug", current: "eu-ai-act-gutachtenwesen" },
      category: "KI & Recht",
      publishedAt: "2026-04-14",
      excerpt: "Der EU AI Act ist seit August 2024 in Kraft. Für Sachverständige, die KI-Werkzeuge einsetzen, stellen sich konkrete Fragen: Welche Anforderungen gelten? Was müssen Softwareanbieter erfüllen?",
      body: [
        b("b1","h2","Risikokategorien im EU AI Act"),
        b("b2","normal","Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotenzial. KI-Systeme im Bereich der Rechtspflege fallen grundsätzlich in die Kategorie hohes Risiko. KI-Assistenzsysteme für Sachverständige müssen transparente Dokumentation ihrer Funktionsweise vorhalten und eine nachvollziehbare menschliche Aufsicht gewährleisten."),
        b("b3","h2","Menschliche Kontrolle als Grundprinzip"),
        b("b4","normal","KI darf in rechtlich relevanten Kontexten nicht autonom entscheiden — sie muss von einem menschlichen Experten kontrolliert, überprüft und freigegeben werden. Die Verantwortung für das Gutachten liegt weiterhin vollständig beim Sachverständigen."),
        b("b5","h2","Was Softwareanbieter erfüllen müssen"),
        b("b6","normal","Anbieter von KI-Systemen im Hochrisikobereich sind verpflichtet, ein Qualitätsmanagementsystem einzuführen und technische Dokumentation bereitzustellen. Fragen Sie bei der Softwareauswahl nach der Konformitätserklärung nach EU AI Act."),
        b("b7","h2","Fazit: Regulierung als Qualitätsmerkmal"),
        b("b8","normal","Der EU AI Act und die DSGVO schaffen einen verlässlichen Rahmen. Sachverständige, die KI-Software einsetzen, die diese Anforderungen erfüllt, stärken ihre Glaubwürdigkeit vor Gericht und gegenüber den Parteien."),
      ],
    });

    // ─── 8. beweisbeschluss-ki-auswertung ────────────────────────────────────
    await client.createOrReplace({
      _id: "post-beweisbeschluss-ki-auswertung",
      _type: "post",
      title: "Beweisbeschlüsse strukturiert auswerten: Was KI heute schon kann",
      slug: { _type: "slug", current: "beweisbeschluss-ki-auswertung" },
      category: "Technik",
      publishedAt: "2026-04-08",
      excerpt: "Der Beweisbeschluss ist das zentrale Dokument jedes gerichtlichen Gutachtenauftrags. KI-Systeme können dieses Dokument heute automatisch analysieren, Beweisfragen extrahieren und eine vollständige Gutachtenstruktur daraus ableiten.",
      body: [
        b("b1","h2","Was ist ein Beweisbeschluss?"),
        b("b2","normal","Ein Beweisbeschluss ist die gerichtliche Anordnung, durch die ein Sachverständiger mit der Erstellung eines Gutachtens beauftragt wird. Das Gutachten muss die Beweisfragen vollständig und in der vorgegebenen Struktur beantworten — abweichende Gliederungen führen zu Rückfragen oder Ergänzungsaufträgen."),
        b("b3","h2","Wie KI den Beweisbeschluss auswertet"),
        b("b4","normal","Moderne KI-Systeme analysieren den hochgeladenen Beweisbeschluss als PDF und extrahieren automatisch: Beweisfragen mit Nummerierungen, Parteibezeichnungen sowie Hinweise auf beizuziehende Unterlagen. Im Gutachten Assistenten entsteht daraus automatisch die vollständige Gutachtenstruktur."),
        b("b5","h2","18 Beweisfragen — strukturiert und vollständig"),
        b("b6","normal","Der Gutachten Assistent unterstützt bis zu 18 Beweisfragen pro Fall — jede mit eigenem Editor für Behauptung, Hinweis und Feststellungen. Das System zeigt auf einen Blick, welche Fragen bearbeitet sind und welche noch offen stehen."),
        b("b7","h2","Grenzen und Verantwortung"),
        b("b8","normal","KI-Systeme können den Beweisbeschluss analysieren und strukturieren — die fachliche Bewertung liegt immer beim Sachverständigen. Die Technologie übernimmt die Routinearbeit; der Experte übernimmt die Verantwortung für Inhalt und Schlussfolgerungen."),
      ],
    });

    // ─── 9. digitale-akte-sachverstaendige ───────────────────────────────────
    await client.createOrReplace({
      _id: "post-digitale-akte-sachverstaendige",
      _type: "post",
      title: "Digitale Akte statt Papierordner: Wie Sachverständige Zeit gewinnen",
      slug: { _type: "slug", current: "digitale-akte-sachverstaendige" },
      category: "Praxis",
      publishedAt: "2026-04-03",
      excerpt: "Wer kennt das nicht: Fotos auf dem Handy, Notizen auf einem Zettel, der Beweisbeschluss als PDF irgendwo im Posteingang. Eine strukturierte digitale Fallakte löst dieses Problem — und verändert die Art zu arbeiten grundlegend.",
      body: [
        b("b1","h2","Das Problem: Verstreute Informationen kosten Zeit"),
        b("b2","normal","Ein typischer Gutachtenauftrag erzeugt Beweisbeschluss, Unterlagen der Parteien, Fotos vom Ortstermin, Diktate, handschriftliche Notizen, DIN-Normen und frühere Korrespondenz. In der Praxis liegen diese verstreut — auf dem Handy, in E-Mail-Anhängen, auf USB-Sticks. Das Zusammensuchen kostet wertvolle Stunden."),
        b("b3","h2","Was eine digitale Akte anders macht"),
        b("b4","normal","Eine professionelle digitale Akte strukturiert alle fallrelevanten Informationen an einem Ort und macht sie per Kategorie filterbar. Im Gutachten Assistenten ist jeder Fall gegliedert in: Verfahrensdaten, Beweisbeschluss, Unterlagen nach Typ, Fotodokumentation und das in Arbeit befindliche Gutachten."),
        b("b5","h2","Nachvollziehbarkeit als rechtliches Argument"),
        b("b6","normal","Im gerichtlichen Kontext ist Nachvollziehbarkeit eine Pflicht. Ein Gutachten auf Basis einer vollständig dokumentierten Fallakte ist widerstandsfähiger gegen Angriffe der Gegenseite. Der Sachverständige kann jederzeit belegen, welche Unterlagen ihm vorlagen."),
        b("b7","h2","Vom Ortstermin bis zum Export"),
        b("b8","normal","Fotos, die direkt beim Ortstermin aufgenommen werden, landen sofort im richtigen Fall. Am Ende steht ein Gutachten, das direkt aus dieser vollständigen Akte heraus erstellt und als PDF oder Word exportiert wird."),
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Alle 9 Blog-Posts erfolgreich in Sanity eingespielt.",
    });

  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
