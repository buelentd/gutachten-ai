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
    // Home Page
    await client.createOrReplace({
      _id: "homePage",
      _type: "homePage",
      heroBadge: "KI-GESTÜTZTE PRÄZISION",
      heroTitle: "Die Zukunft der Bau-Gutachten.",
      heroSubtext: "Automatisieren Sie Ihre Dokumentationsprozesse mit künstlicher Intelligenz. Schnellere Berichte, präzisere Analysen und rechtssichere Ergebnisse für professionelle Bausachverständige.",
      heroPrimaryButton: "Jetzt kostenlos testen",
      heroSecondaryButton: "Demo vereinbaren",
      stats: [
        { _key: "s1", value: "85%", label: "Zeitersparnis", highlight: true },
        { _key: "s2", value: "2.4k+", label: "Gutachten erstellt", highlight: false },
        { _key: "s3", value: "100%", label: "Rechtssicher (DSGVO)", highlight: false },
        { _key: "s4", value: "< 5min", label: "Erstellungsdauer", highlight: false },
      ],
      problemTitle: "Warum wir die Branche verändern.",
      problemSubtext: "Herkömmliche Gutachtenerstellung ist zeitaufwendig und fehleranfällig. Unsere KI-Technologie setzt neue Standards in Sachen Effizienz.",
      problemItems: [
        "Stundenlange manuelle Texterstellung und Formatierung.",
        "Inkonsistente Formulierungen und Übertragungsfehler.",
        "Hoher administrativer Aufwand bei der Bildverwaltung.",
      ],
      solutionItems: [
        "Automatisierte Berichte basierend auf Ihren Notizen und Fotos.",
        "Standardisierte, fachlich präzise Textbausteine.",
        "Nahtlose Integration von digitalen Vor-Ort-Aufnahmen.",
      ],
      features: [
        { _key: "f1", icon: "description", title: "KI-Texterstellung", description: "Präzise Fachformulierungen auf Knopfdruck, angepasst an Ihren individuellen Schreibstil." },
        { _key: "f2", icon: "photo_library", title: "Bild-KI-Analyse", description: "Automatische Schadenserkennung und Klassifizierung direkt in Ihren Fotos." },
        { _key: "f3", icon: "cloud_sync", title: "Cloud Synchronisation", description: "Echtzeit-Abgleich Ihrer Daten zwischen Baustelle und Büro ohne Datenverlust." },
        { _key: "f4", icon: "gavel", title: "Rechtssicherheit", description: "Ständige Aktualisierung auf Basis geltender Normen und Verordnungen." },
        { _key: "f5", icon: "shield", title: "DSGVO Konform", description: "Verschlüsselte Datenhaltung ausschließlich auf deutschen Servern." },
        { _key: "f6", icon: "api", title: "Schnittstellen", description: "Einfacher Export in Word, PDF oder direkt in Ihre Branchensoftware." },
      ],
      offerTitle: "Starten Sie digital durch.",
      offerSubtext: "Testen Sie die volle Funktionalität 14 Tage lang unverbindlich.",
      offerItems: ["Unbegrenzte Gutachten", "KI-Text-Assistent inkl.", "Premium-Support 24/7"],
      ctaTitle: "Bereit für das nächste Level?",
      ctaSubtext: "Schließen Sie sich über 500 Sachverständigen an, die ihre Arbeit bereits mit unserer KI optimieren.",
    });

    // Ablauf Page
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
        { _key: "t2", day: "7", label: "Woche 1", sublabel: "Systemkonfiguration", isRocket: false },
        { _key: "t3", day: "14", label: "Woche 2", sublabel: "Mitarbeiter-Training", isRocket: false },
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

    // Kontakt Page
    await client.createOrReplace({
      _id: "kontaktPage",
      _type: "kontaktPage",
      heroLabel: "Kontakt",
      heroTitle: "Präzision beginnt beim ersten Gespräch.",
      contactName: "Thomas Müller",
      contactRole: "Leiter Kundenerfolg",
      contactQuote: "Wir verstehen, dass im Gutachterwesen jedes Detail zählt. Unser Team steht Ihnen zur Seite.",
      trustItems: [
        { _key: "k1", icon: "verified_user", title: "DSGVO-konform", description: "Alle Daten werden ausschließlich auf deutschen Servern verarbeitet." },
        { _key: "k2", icon: "timer", title: "Reaktionszeit", description: "Rückmeldung innerhalb von 24 Stunden an Werktagen." },
        { _key: "k3", icon: "map", title: "Standort Berlin", description: "Technologie entwickelt in Deutschland für den lokalen Markt." },
      ],
    });

    // Navigation
    await client.createOrReplace({
      _id: "navigation",
      _type: "navigation",
      logoText: "gutachten-ai.de",
      ctaButton: "Anfrage stellen",
      footerTagline: "Die Zukunft der professionellen Gutachtenerstellung. Präzise, sicher und effizient.",
      footerCopyright: "© 2026 gutachten-ai.de • Server in Deutschland • DSGVO-konform • Made in Germany",
    });

    return NextResponse.json({ success: true, message: "Alle Inhalte erfolgreich in Sanity eingespielt." });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
