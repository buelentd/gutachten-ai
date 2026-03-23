import Link from "next/link";

export default function Funktionen() {
  const features = [
    {
      icon: "quiz",
      title: "Fachfragen",
      desc: "Unser System wurde mit umfangreichen Fachdatenbanken trainiert. Stellen Sie komplexe bautechnische Fragen und erhalten Sie fundierte Antworten basierend auf aktuellem Expertenwissen.",
      example: "\"Wie beurteilt man Setzrisse in einem Mauerwerk aus dem Jahr 1960 bei vorliegender Unterfangung?\"",
    },
    {
      icon: "photo_camera",
      title: "Schadensfotos",
      desc: "Die KI erkennt Bauschäden auf Fotos automatisch. Sie kategorisiert Rissbreiten, Feuchtigkeitserscheinungen und Materialermüdung in Millisekunden.",
      example: "Automatisches Ausmessen von Risslängen und Zuordnung zur entsprechenden Schadensklasse im Gutachten.",
    },
    {
      icon: "gavel",
      title: "DIN-Normen",
      desc: "Direkter Zugriff auf relevante Auszüge aus DIN-Normen und VOB. Die KI schlägt automatisch die passenden Normen für Ihren aktuellen Sachverhalt vor.",
      example: "\"Prüfe die Abdichtung dieses Balkons gegen die Anforderungen der DIN 18531.\"",
    },
    {
      icon: "mic",
      title: "Sprach-Transkription",
      desc: "Diktieren Sie Ihre Beobachtungen direkt auf der Baustelle. Unsere KI wandelt Fachbegriffe präzise in Text um und bereitet diesen strukturiert auf.",
      example: "Umwandlung von Vor-Ort-Notizen in ein flüssiges, fachlich korrektes Protokoll der Ortsbesichtigung.",
    },
    {
      icon: "description",
      title: "Textbausteine",
      desc: "Erstellen Sie Gutachten in Rekordzeit. Nutzen Sie intelligente Textbausteine, die sich dynamisch an den Kontext Ihres spezifischen Falls anpassen.",
      example: "Generierung einer rechtssicheren Zusammenfassung für den Bereich \"Sanierungsempfehlung\" basierend auf den erhobenen Daten.",
    },
    {
      icon: "receipt_long",
      title: "Rechnungen",
      desc: "Automatische Rechnungserstellung nach HOAI-Sätzen direkt aus dem abgeschlossenen Gutachten heraus.",
      example: "Erstellung einer HOAI-konformen Honorarrechnung nach Abschluss des Gutachtens mit einem Klick.",
    },
  ];

  return (
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <h1 className="text-6xl font-normal tracking-tight leading-tight mb-6 max-w-4xl mx-auto text-[#F0EDE6]">
          Präzise Analysen. Rechtssichere Dokumentation.
        </h1>
        <p className="text-[#E0C0B3] text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Entdecken Sie die Werkzeuge der nächsten Generation für Bausachverständige. Effizienz trifft auf deutsche Ingenieurskunst.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 space-y-32">
        {features.map((f, i) => (
          <div key={i} className={`grid grid-cols-12 gap-8 items-start`}>
            <div className={`col-span-12 md:col-span-5 space-y-6 ${i % 2 !== 0 ? "order-1 md:order-2" : ""}`}>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#E8631A] text-3xl">{f.icon}</span>
                <h2 className="text-3xl font-medium tracking-tight text-[#F0EDE6]">{f.title}</h2>
              </div>
              <p className="text-[#E0C0B3] leading-relaxed text-lg">{f.desc}</p>
              <div className="bg-[#191C22] p-8 rounded-xl border-[0.5px] border-[#594238]">
                <p className="text-xs font-medium text-[#FFB596] mb-4 uppercase tracking-widest">Praxis-Beispiel</p>
                <p className="italic text-[#E1E2EB]/80">{f.example}</p>
              </div>
            </div>
            <div className={`col-span-12 md:col-span-7 ${i % 2 !== 0 ? "order-2 md:order-1" : ""}`}>
              <div className="bg-[#272A31] aspect-video rounded-xl overflow-hidden border-[0.5px] border-[#594238] flex items-center justify-center">
                <span className="material-symbols-outlined text-[#E8631A] opacity-20" style={{ fontSize: "80px" }}>{f.icon}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div className="text-center mt-32">
        <Link href="/kontakt" className="bg-[#E8631A] text-white px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all">
          Jetzt kostenlos testen
        </Link>
      </div>
    </main>
  );
}
