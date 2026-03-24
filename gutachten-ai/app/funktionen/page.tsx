import Link from "next/link";

const features = [
  { icon: "quiz", title: "Fachfragen", desc: "Unser System wurde mit umfangreichen Fachdatenbanken trainiert. Stellen Sie komplexe bautechnische Fragen und erhalten Sie fundierte Antworten basierend auf aktuellem Expertenwissen.", example: "\"Wie beurteilt man Setzrisse in einem Mauerwerk aus dem Jahr 1960 bei vorliegender Unterfangung?\"", imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjjyoM2_SSHUdkRUAfj6ZAZXNTAXKUzpJhh4pYVAWH5AkMBgLM0cpR_BUFmOAoE6HeqWbK-LFoygaoZkHyH2FYkXe-dLli8I6Xo2jrbpgJAdR7iSK2T9aaA4nGDaIX6IEsU4XC53Hg56mbIDrFlexE9Bq3cIpR-lxJOaLjoL63v_d8UazhwplWk_rXzazYGExKgu4vBfCuhw7WxISS95Hm-lx-8JEYARSKJ_Rgif4yxPl6KDWDyMCo9SjnUrVtGweQ3P9wc_rKeSvh", reverse: false },
  { icon: "photo_camera", title: "Schadensfotos", desc: "Die KI erkennt Bauschäden auf Fotos automatisch. Sie kategorisiert Rissbreiten, Feuchtigkeitserscheinungen und Materialermüdung in Millisekunden.", example: "Automatisches Ausmessen von Risslängen und Zuordnung zur entsprechenden Schadensklasse im Gutachten.", imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_zw392Y_3qVSoMPUtUzvSKlF-jFJJxFKW2VBydoX6r_HqCXDpi6ag-fNoH7-s_ysH2vl8VidOy7IHY1u0_G66iB5-kT1QPnyngYtQANBAtWfWY5PvElfBb84yLE8BNaTf-oXtPGpYPzZXwaGkbiVQHJ1qY6nXFp4ZMuKZ-Bi75at-v0S0HYlZGN9FnM1KfSKO2DmdeupKMUtkULrOGuYDTOsUB8aw7nLPia9GQRMQt0XYHHLV3aGQsz3QWolGEtzUI1pC-09MpXBN", reverse: true },
  { icon: "gavel", title: "DIN-Normen", desc: "Direkter Zugriff auf relevante Auszüge aus DIN-Normen und VOB. Die KI schlägt automatisch die passenden Normen für Ihren aktuellen Sachverhalt vor.", example: "\"Prüfe die Abdichtung dieses Balkons gegen die Anforderungen der DIN 18531.\"", imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9Lh0_MMs4RqF8LUzEv_vYg3siiz7qJMu2Y6wcAQmPurEZLeAdDqyvHgYSL7QwgN3OWHm8G-McrtdLhn8sP951uMFYyZykKXCTg39Zh8IglrZAOLSNeI0s_RprW6iAqChufGm0pw5KmYoXTOLGej4nG4mt4dRLaJCLT3LnyhGic0pUeJVck97yhIy2S8SRsyz-Qntsz6fSYfWNmzgiSrMPYZY39fQXmWZoGnEn6DUesbAsoRV43EGQLKIHiHJ9DFuSDdHZpfc2Rsjl", reverse: false },
  { icon: "mic", title: "Sprach-Transkription", desc: "Diktieren Sie Ihre Beobachtungen direkt auf der Baustelle. Unsere KI wandelt Fachbegriffe präzise in Text um und bereitet diesen strukturiert auf.", example: "Umwandlung von Vor-Ort-Notizen in ein flüssiges, fachlich korrektes Protokoll der Ortsbesichtigung.", imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtGotFfPDt8OlbXBw_PIqNbYHaNhZ4u88Kfz2LjyyxS0EDcrw9zV8ULx2G1qxdeQLvt3DN23YzMvDOxiSKmDvXdrgvM2O-rPy-FAXWQecV6wuJm2TVKAlhI91Fos7krJ9JBPqXkCfY7dU-OmPciSZsbE0aIKkVnyWecDgBkb5nDsIkbFoFHf7obTqK32AcBxSjMys-A0rySe5jBscJQCG8jkVozkqHGb-ImqUR8ximQwJUzjPnyCeXVfmCJuhBXWr3vx1Ol-CMv_km", reverse: true },
  { icon: "description", title: "Textbausteine", desc: "Erstellen Sie Gutachten in Rekordzeit. Nutzen Sie intelligente Textbausteine, die sich dynamisch an den Kontext Ihres spezifischen Falls anpassen.", example: "Generierung einer rechtssicheren Zusammenfassung für den Bereich \"Sanierungsempfehlung\" basierend auf den erhobenen Daten.", imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6TJXj120jN3BT7HKbKPapa1CB-tL9_ga9uDk-J9bEYiHTIhFKLRGHOov1SK8VRr33IHGgLmBVVyXX3whkMtiuowcSzsyAqahHk0WRihQPgTE9ea0k4sif6r6tpMN2f6t1TwBo9lGvPoYdN4szbg4ZqzhiFH4ubB6IYt3BbygaitwY8bGGF_KcPaowxC9DUg8qZgyrPeYxDBUBp_X1dKvPkxKII2YFS_fpGojYFxQ09QlLjl3DWEEDDPAwvRHbP-FlSvT0rk9QKYR_", reverse: false },
  { icon: "receipt_long", title: "Rechnungen", desc: "Automatisierte Erstellung von JVEG-konformen Rechnungen oder Honorarberechnungen nach Zeitaufwand. Integrieren Sie Ihre Stundensätze nahtlos.", example: "Ein-Klick-Erstellung der Gesamtabrechnung nach Abschluss des Gutachtens inkl. aller Nebenkosten.", imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZYWBqa-Z36nramZlsZQt-pu-KEEeFGJ-QOfUkoydtxtbC5DG91E_eaQOCjblLkg7VTf9aJh7CNZrDcaXXxgsbucjOMRjieFddIZD942eIkBYIN1HTDxBG9R2si6gHsCwk2yDfsCtJkW4A-GZtbkIFLoFeSinDC1wqGvpF1JPllQU0yP_YzZbLW8IE_3JxtFsSEnHrjErxnYvzgiuPYfGLxd2p0Vb97cZTq4Smbb8oVDWexR6fFGuaLP2KnSyoMQ0aIkdzVJfspxBk", reverse: true },
];

export default function Funktionen() {
  return (
    <main className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-6xl font-normal tracking-tight leading-tight mb-6 max-w-4xl mx-auto text-on-surface">Präzise Analysen. Rechtssichere Dokumentation.</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">Entdecken Sie die Werkzeuge der nächsten Generation für Bausachverständige. Effizienz trifft auf deutsche Ingenieurskunst.</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {features.map((f, i) => (
          <div key={i} className="grid grid-cols-12 gap-8 items-start">
            <div className={`col-span-12 md:col-span-5 space-y-6 ${f.reverse ? "order-1 md:order-2" : ""}`}>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#E8631A] text-3xl">{f.icon}</span>
                <h2 className="text-3xl font-medium tracking-tight text-on-surface">{f.title}</h2>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-lg">{f.desc}</p>
              <div className="bg-surface-container-low p-8 rounded-xl border-[0.5px] border-outline-variant">
                <p className="text-xs font-medium text-[#FFB596] mb-4 uppercase tracking-widest">Praxis-Beispiel</p>
                <p className="italic text-on-surface-variant">{f.example}</p>
              </div>
            </div>
            <div className={`col-span-12 md:col-span-7 bg-surface-container-high aspect-video rounded-xl overflow-hidden border-[0.5px] border-outline-variant ${f.reverse ? "order-2 md:order-1" : ""}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="object-cover w-full h-full opacity-60" alt={f.title} src={f.imgSrc}/>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-48 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-normal tracking-tight text-center mb-16 text-on-surface">Häufig gestellte Fragen</h2>
        <div className="space-y-4">
          {[
            { q: "Sind meine Daten sicher?", a: "Ja. Alle Daten werden auf deutschen Servern verarbeitet und sind vollständig DSGVO-konform verschlüsselt." },
            { q: "Ersetzt die KI den menschlichen Gutachter?", a: "Nein. Die KI dient als Assistenzsystem, das zeitaufwendige Recherche- und Schreibarbeiten übernimmt, damit Sie sich auf die fachliche Bewertung konzentrieren können." },
            { q: "Wie aktuell sind die DIN-Normen?", a: "Unsere Datenbank wird kontinuierlich aktualisiert, um stets den neuesten Stand der Technik und aktuelle rechtliche Rahmenbedingungen abzubilden." },
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-low rounded-xl p-6 border-[0.5px] border-outline-variant">
              <h3 className="text-lg font-medium mb-2 text-on-surface">{item.q}</h3>
              <p className="text-on-surface-variant leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
