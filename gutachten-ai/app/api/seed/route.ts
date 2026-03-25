import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "67x2nc7r",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const posts = [
  {
    _id: "post-software-vergleich",
    slug: "bausachverstaendiger-software-vergleich",
    title: "Bausachverständiger Software Vergleich 2026",
    category: "Vergleich",
    publishedAt: "2026-03-31T00:00:00Z",
    excerpt: "Welche Software nutzen Bausachverständige 2026? Wir vergleichen die wichtigsten Tools für Gutachtenerstellung, Dokumentation und Abrechnung.",
  },
  {
    _id: "post-feuchtigkeitsschaeden",
    slug: "feuchtigkeitsschaeden-gutachten",
    title: "Feuchtigkeitsschäden im Baugutachten: Ursachen, Normen und Dokumentation",
    category: "Fachthema",
    publishedAt: "2026-03-28T00:00:00Z",
    excerpt: "Wie Bausachverständige Feuchtigkeitsschäden fachgerecht dokumentieren und bewerten — mit aktuellen DIN-Normen und KI-Unterstützung.",
  },
  {
    _id: "post-jveg",
    slug: "jveg-honorar-berechnen",
    title: "JVEG Honorar berechnen: So rechnen Sachverständige korrekt ab",
    category: "Abrechnung",
    publishedAt: "2026-03-25T00:00:00Z",
    excerpt: "Stundensätze, Nebenkosten, Fahrtkosten — ein vollständiger Leitfaden zur JVEG-Abrechnung für gerichtlich bestellte Sachverständige.",
  },
  {
    _id: "post-ki-gutachten",
    slug: "ki-gutachten-2025",
    title: "KI in der Gutachtenerstellung 2025: Was Bausachverständige jetzt wissen müssen",
    category: "Technologie",
    publishedAt: "2026-03-24T00:00:00Z",
    excerpt: "Künstliche Intelligenz verändert die Gutachtenerstellung grundlegend. Welche KI-Technologien 2025 relevant sind und wie Sachverständige davon profitieren.",
  },
  {
    _id: "post-din-normen",
    slug: "din-normen-ki",
    title: "DIN-Normen und KI: Wie Software rechtssichere Baugutachten erstellt",
    category: "Recht & Normen",
    publishedAt: "2026-03-20T00:00:00Z",
    excerpt: "Wie KI-Software aktuelle DIN-Normen und VOB-Regelungen in die Gutachtenerstellung integriert und Sachverständigen rechtssichere Dokumentation ermöglicht.",
  },
  {
    _id: "post-zeitersparnis",
    slug: "zeitersparnis-bausachverstaendige",
    title: "85% weniger Zeit für Gutachten: So nutzen Bausachverständige KI richtig",
    category: "Praxis",
    publishedAt: "2026-03-15T00:00:00Z",
    excerpt: "Wie Bausachverständige durch KI-Software bis zu 85% ihrer Bearbeitungszeit einsparen und gleichzeitig die Qualität steigern.",
  },
];

export async function GET() {
  try {
    // Seiteninhalte
    await client.createOrReplace({ _id: "homePage", _type: "homePage", heroBadge: "KI-GESTÜTZTE PRÄZISION", heroTitle: "Die Zukunft der Bau-Gutachten.", heroSubtext: "Automatisieren Sie Ihre Dokumentationsprozesse mit künstlicher Intelligenz. Schnellere Berichte, präzisere Analysen und rechtssichere Ergebnisse für professionelle Bausachverständige.", heroPrimaryButton: "Jetzt kostenlos testen", heroSecondaryButton: "Demo vereinbaren", stats: [{ _key: "s1", value: "85%", label: "Zeitersparnis", highlight: true }, { _key: "s2", value: "2.4k+", label: "Gutachten erstellt", highlight: false }, { _key: "s3", value: "100%", label: "Rechtssicher (DSGVO)", highlight: false }, { _key: "s4", value: "< 5min", label: "Erstellungsdauer", highlight: false }], problemTitle: "Warum wir die Branche verändern.", problemSubtext: "Herkömmliche Gutachtenerstellung ist zeitaufwendig und fehleranfällig. Unsere KI-Technologie setzt neue Standards.", problemItems: ["Stundenlange manuelle Texterstellung und Formatierung.", "Inkonsistente Formulierungen und Übertragungsfehler.", "Hoher administrativer Aufwand bei der Bildverwaltung."], solutionItems: ["Automatisierte Berichte basierend auf Ihren Notizen und Fotos.", "Standardisierte, fachlich präzise Textbausteine.", "Nahtlose Integration von digitalen Vor-Ort-Aufnahmen."], features: [{ _key: "f1", icon: "description", title: "KI-Texterstellung", description: "Präzise Fachformulierungen auf Knopfdruck." }, { _key: "f2", icon: "photo_library", title: "Bild-KI-Analyse", description: "Automatische Schadenserkennung in Ihren Fotos." }, { _key: "f3", icon: "cloud_sync", title: "Cloud Synchronisation", description: "Echtzeit-Abgleich zwischen Baustelle und Büro." }, { _key: "f4", icon: "gavel", title: "Rechtssicherheit", description: "Ständige Aktualisierung auf Basis geltender Normen." }, { _key: "f5", icon: "shield", title: "DSGVO Konform", description: "Verschlüsselte Datenhaltung auf deutschen Servern." }, { _key: "f6", icon: "api", title: "Schnittstellen", description: "Export in Word, PDF oder Ihre Branchensoftware." }], offerTitle: "Starten Sie digital durch.", offerSubtext: "Testen Sie die volle Funktionalität 14 Tage lang unverbindlich.", offerItems: ["Unbegrenzte Gutachten", "KI-Text-Assistent inkl.", "Premium-Support 24/7"], ctaTitle: "Bereit für das nächste Level?", ctaSubtext: "Schließen Sie sich über 500 Sachverständigen an, die ihre Arbeit bereits mit unserer KI optimieren." });

    // Blog-Artikel
    for (const post of posts) {
      await client.createOrReplace({
        _id: post._id,
        _type: "post",
        title: post.title,
        slug: { _type: "slug", current: post.slug },
        category: post.category,
        publishedAt: post.publishedAt,
        excerpt: post.excerpt,
      });
    }

    return NextResponse.json({
      success: true,
      message: `Seiteninhalte + ${posts.length} Blogartikel erfolgreich eingespielt.`,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
