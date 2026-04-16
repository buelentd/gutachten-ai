import type { Metadata } from "next";
import Link from "next/link";
import { getFunktionenPage } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Funktionen — KI-Gutachten Software",
  description: "KI-Texterstellung, Schadensfoto-Analyse, DIN-Normen, Sprach-Transkription und mehr.",
  alternates: { canonical: "https://gutachten-ai.de/funktionen" },
};

const defaults = {
  heroTitle: "Präzise Analysen. Rechtssichere Dokumentation.",
  heroSubtext: "Entdecken Sie die Werkzeuge der nächsten Generation für Bausachverständige. Effizienz trifft auf deutsche Ingenieurskunst.",
  features: [
    { icon: "folder_open", title: "Fallverwaltung", description: "Alle Vorgänge strukturiert an einem Ort: Akte, Beweisbeschluss, Ortstermin und Gutachten sind als eigene Bereiche eines Falls organisiert. So behalten Sie auch bei parallelen Verfahren jederzeit den Überblick.", example: "Ein Fall enthält Verfahrensdaten, alle Parteien, Kostenvorschuss und den vollständigen Beweisbeschluss — alles abrufbar mit einem Klick.", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSreBcnnEQnNd69Biiu6784mLwxbXbXuw2sOR4XHSjQSa8eRAn5mMQB9CizSeq_wHg4ejofBCRARWEX55XelgK4JPej5Yrv-1FLjoREtHIiedaLWJuex3lhMN0muziOLf_8WtJftur3PDceYNWzri8AUijFsWLpP9aZCBfJYUyGgriZYZUHmAjvVn7v2_k_ntOKcoJ_O87YqQwQ85m9q4N9flCU4kNRXvjRy_lcAoiyeUkkVAgmHSrQ4S9Z1PIHRiXnPrILdEnfKrX", imageAlt: "Fallverwaltung", reverse: false },
    { icon: "inventory_2", title: "Digitale Akte", description: "Fotos, PDFs und Unterlagen werden fallbezogen abgelegt und sind nach Kategorie filterbar. Die Digitale Akte zeigt auf einen Blick welche Dokumente vorliegen — und welche noch fehlen.", example: "Unterlagen nach Typ filtern: Grundrisse, Gutachten, Rechnungen oder Schriftverkehr — immer sofort auffindbar.", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_zw392Y_3qVSoMPUtUzvSKlF-jFJJxFKW2VBydoX6r_HqCXDpi6ag-fNoH7-s_ysH2vl8VidOy7IHY1u0_G66iB5-kT1QPnyngYtQANBAtWfWY5PvElfBb84yLE8BNaTf-oXtPGpYPzZXwaGkbiVQHJ1qY6nXFp4ZMuKZ-Bi75at-v0S0HYlZGN9FnM1KfSKO2DmdeupKMUtkULrOGuYDTOsUB8aw7nLPia9GQRMQt0XYHHLV3aGQsz3QWolGEtzUI1pC-09MpXBN", imageAlt: "Digitale Akte", reverse: true },
    { icon: "sim_card_download", title: "Gutachten-Export", description: "Das fertige Gutachten wird direkt aus der App als PDF oder Word-Dokument exportiert — strukturiert nach Beweisfragen, mit allen Feststellungen und der Zusammenfassung.", example: "Export auf Knopfdruck: vollständiges Gutachten als DOCX für die eigene Weiterbearbeitung oder als PDF zur Einreichung beim Gericht.", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Lh0_MMs4RqF8LUzEv_vYg3siiz7qJMu2Y6wcAQmPurEZLeAdDqyvHgYSL7QwgN3OWHm8G-McrtdLhn8sP951uMFYyZykKXCTg39Zh8IglrZAOLSNeI0s_RprW6iAqChufGm0pw5KmYoXTOLGej4nG4mt4dRLaJCLT3LnyhGic0pUeJVck97yhIy2S8SRsyz-Qntsz6fSYfWNmzgiSrMPYZY39fQXmWZoGnEn6DUesbAsoRV43EGQLKIHiHJ9DFuSDdHZpfc2Rsjl", imageAlt: "Gutachten Export", reverse: false },
    { icon: "quiz", title: "Fachfragen", description: "Unser System wurde mit umfangreichen Fachdatenbanken trainiert. Stellen Sie komplexe bautechnische Fragen und erhalten Sie fundierte Antworten basierend auf aktuellem Expertenwissen.", example: "\"Wie beurteilt man Setzrisse in einem Mauerwerk aus dem Jahr 1960 bei vorliegender Unterfangung?\"", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjjyoM2_SSHUdkRUAfj6ZAZXNTAXKUzpJhh4pYVAWH5AkMBgLM0cpR_BUFmOAoE6HeqWbK-LFoygaoZkHyH2FYkXe-dLli8I6Xo2jrbpgJAdR7iSK2T9aaA4nGDaIX6IEsU4XC53Hg56mbIDrFlexE9Bq3cIpR-lxJOaLjoL63v_d8UazhwplWk_rXzazYGExKgu4vBfCuhw7WxISS95Hm-lx-8JEYARSKJ_Rgif4yxPl6KDWDyMCo9SjnUrVtGweQ3P9wc_rKeSvh", imageAlt: "Fachfragen Interface", reverse: true },
    { icon: "photo_camera", title: "Schadensfotos", description: "Die KI erkennt Bauschäden auf Fotos automatisch. Sie kategorisiert Rissbreiten, Feuchtigkeitserscheinungen und Materialermüdung in Millisekunden.", example: "Automatisches Ausmessen von Risslängen und Zuordnung zur entsprechenden Schadensklasse im Gutachten.", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_zw392Y_3qVSoMPUtUzvSKlF-jFJJxFKW2VBydoX6r_HqCXDpi6ag-fNoH7-s_ysH2vl8VidOy7IHY1u0_G66iB5-kT1QPnyngYtQANBAtWfWY5PvElfBb84yLE8BNaTf-oXtPGpYPzZXwaGkbiVQHJ1qY6nXFp4ZMuKZ-Bi75at-v0S0HYlZGN9FnM1KfSKO2DmdeupKMUtkULrOGuYDTOsUB8aw7nLPia9GQRMQt0XYHHLV3aGQsz3QWolGEtzUI1pC-09MpXBN", imageAlt: "Schadensfotos Analyse", reverse: false },
    { icon: "gavel", title: "DIN-Normen", description: "Direkter Zugriff auf relevante Auszüge aus DIN-Normen und VOB. Die KI schlägt automatisch die passenden Normen für Ihren aktuellen Sachverhalt vor.", example: "\"Prüfe die Abdichtung dieses Balkons gegen die Anforderungen der DIN 18531.\"", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Lh0_MMs4RqF8LUzEv_vYg3siiz7qJMu2Y6wcAQmPurEZLeAdDqyvHgYSL7QwgN3OWHm8G-McrtdLhn8sP951uMFYyZykKXCTg39Zh8IglrZAOLSNeI0s_RprW6iAqChufGm0pw5KmYoXTOLGej4nG4mt4dRLaJCLT3LnyhGic0pUeJVck97yhIy2S8SRsyz-Qntsz6fSYfWNmzgiSrMPYZY39fQXmWZoGnEn6DUesbAsoRV43EGQLKIHiHJ9DFuSDdHZpfc2Rsjl", imageAlt: "DIN-Normen Datenbank", reverse: true },
    { icon: "mic", title: "Sprach-Transkription", description: "Diktieren Sie Ihre Beobachtungen direkt auf der Baustelle. Unsere KI wandelt Fachbegriffe präzise in Text um und bereitet diesen strukturiert auf.", example: "Umwandlung von Vor-Ort-Notizen in ein flüssiges, fachlich korrektes Protokoll der Ortsbesichtigung.", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtGotFfPDt8OlbXBw_PIqNbYHaNhZ4u88Kfz2LjyyxS0EDcrw9zV8ULx2G1qxdeQLvt3DN23YzMvDOxiSKmDvXdrgvM2O-rPy-FAXWQecV6wuJm2TVKAlhI91Fos7krJ9JBPqXkCfY7dU-OmPciSZsbE0aIKkVnyWecDgBkb5nDsIkbFoFHf7obTqK32AcBxSjMys-A0rySe5jBscJQCG8jkVozkqHGb-ImqUR8ximQwJUzjPnyCeXVfmCJuhBXWr3vx1Ol-CMv_km", imageAlt: "Sprach-Transkription", reverse: false },
    { icon: "description", title: "Textbausteine", description: "Erstellen Sie Gutachten in Rekordzeit. Nutzen Sie intelligente Textbausteine, die sich dynamisch an den Kontext Ihres spezifischen Falls anpassen.", example: "Generierung einer rechtssicheren Zusammenfassung für den Bereich \"Sanierungsempfehlung\".", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6TJXj120jN3BT7HKbKPapa1CB-tL9_ga9uDk-J9bEYiHTIhFKLRGHOov1SK8VRr33IHGgLmBVVyXX3whkMtiuowcSzsyAqahHk0WRihQPgTE9ea0k4sif6r6tpMN2f6t1TwBo9lGvPoYdN4szbg4ZqzhiFH4ubB6IYt3BbygaitwY8bGGF_KcPaowxC9DUg8qZgyrPeYxDBUBp_X1dKvPkxKII2YFS_fpGojYFxQ09QlLjl3DWEEDDPAwvRHbP-FlSvT0rk9QKYR_", imageAlt: "Textbausteine Editor", reverse: true },
    { icon: "receipt_long", title: "Rechnungen", description: "Automatisierte Erstellung von JVEG-konformen Rechnungen oder Honorarberechnungen nach Zeitaufwand.", example: "Ein-Klick-Erstellung der Gesamtabrechnung nach Abschluss des Gutachtens inkl. aller Nebenkosten.", imageSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZYWBqa-Z36nramZlsZQt-rUiCEK6Nz8vVl_5HXKOrqv9UyDPQ7BNBJbDnpFLoFeSinDC1wqGvpF1JPllQU0yP_YzZbLW8IE_3JxtFsSEnHrjErxnYvzgiuPYfGLxd2p0Vb97cZTq4Smbb8oVDWexR6fFGuaLP2KnSyoMQ0aIkdzVJfspxBk", imageAlt: "Rechnungen Dashboard", reverse: false },
  ],
  faq: [
    { question: "Sind meine Daten sicher?", answer: "Ja. Alle Daten werden auf deutschen Servern verarbeitet und sind vollständig DSGVO-konform verschlüsselt." },
    { question: "Ersetzt die KI den menschlichen Gutachter?", answer: "Nein. Die KI dient als Assistenzsystem, das zeitaufwendige Recherche- und Schreibarbeiten übernimmt, damit Sie sich auf die fachliche Bewertung konzentrieren können." },
    { question: "Wie aktuell sind die DIN-Normen?", answer: "Unsere Datenbank wird kontinuierlich aktualisiert, um stets den neuesten Stand der Technik und aktuelle rechtliche Rahmenbedingungen abzubilden." },
  ],
};

export default async function Funktionen() {
  const cms = await getFunktionenPage().catch(() => null);
  const d = { ...defaults, ...cms };

  return (
    <main className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-6xl font-normal tracking-tight leading-tight mb-6 max-w-4xl mx-auto text-on-surface">{d.heroTitle}</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">{d.heroSubtext}</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {d.features?.map((f: { icon: string; title: string; description: string; example: string; imageSrc: string; imageAlt: string; reverse: boolean }, i: number) => (
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
            <div className={`col-span-12 md:col-span-7 bg-surface-container-high aspect-video rounded-xl overflow-hidden border-[0.5px] border-outline-variant ${f.reverse ? "order-2 md:order-1" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="object-cover w-full h-full opacity-60" alt={f.imageAlt} src={f.imageSrc}/>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-48 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-normal tracking-tight text-center mb-16 text-on-surface">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          {d.faq?.map((item: { question: string; answer: string }, i: number) => (
            <div key={i} className="bg-surface-container-low rounded-xl p-6 border-[0.5px] border-outline-variant">
              <h3 className="text-lg font-medium mb-2 text-on-surface">{item.question}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center mt-24">
        <Link href="/kontakt" className="bg-[#E8631A] text-white px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all">
          Jetzt kostenlos testen
        </Link>
      </div>
    </main>
  );
}
