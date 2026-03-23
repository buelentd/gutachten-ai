import Link from "next/link";

export default function Ablauf() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="text-[#E8631A] font-medium tracking-widest text-xs uppercase mb-4 block">Implementierung</span>
            <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.1] mb-8 text-[#F0EDE6]">
              Vom Erstkontakt <br /> zur fertigen{" "}
              <span className="text-[#FFB596] italic">Expertise.</span>
            </h1>
            <p className="text-[#E0C0B3] text-lg max-w-xl leading-relaxed">
              Effizienz beginnt bei der Einführung. Wir haben einen strukturierten Prozess entwickelt, der Ihre bestehenden Workflows respektiert und digital transformiert.
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-px bg-[#594238] border-[0.5px] border-[#594238] overflow-hidden rounded-xl">
          {[
            {
              num: "01",
              title: "Anfrage",
              desc: "Wir analysieren Ihren aktuellen Bedarf und prüfen die Kompatibilität Ihrer Datenstruktur mit unserer KI-Engine.",
              items: ["Erstgespräch & Bedarfsanalyse", "Daten-Checkup"],
            },
            {
              num: "02",
              title: "Onboarding",
              desc: "Integration der Schnittstellen und Training Ihres Teams auf die spezifischen Module Ihres Fachbereichs.",
              items: ["Setup & Integration", "Live-Schulung via Web-App"],
            },
            {
              num: "03",
              title: "Loslegen",
              desc: "Ab Tag 1 profitieren Sie von automatisierten Gutachten-Entwürfen und digitaler Beweissicherung.",
              items: ["Voller Funktionsumfang", "Support & Optimierung"],
            },
          ].map((step, i) => (
            <div key={i} className="bg-[#101319] p-8 flex flex-col h-full">
              <span className="text-4xl font-light text-[#FFB596] mb-6">{step.num}</span>
              <h3 className="text-2xl font-medium text-[#F0EDE6] mb-4">{step.title}</h3>
              <p className="text-[#E0C0B3] mb-8 flex-grow leading-relaxed">{step.desc}</p>
              <div className="p-6 bg-[#191C22] border-[0.5px] border-[#594238] rounded-lg">
                <ul className="space-y-3 text-sm text-[#E1E2EB]">
                  {step.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xs text-[#E8631A]">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-medium text-[#F0EDE6] mb-16 text-center">Zeitplan der Einführung</h2>
        <div className="relative">
          <div className="absolute top-6 left-0 w-full h-px bg-[#594238] hidden md:block"></div>
          <div className="grid md:grid-cols-4 gap-12 relative">
            {[
              { day: "0", label: "Tag 0", sub: "Kick-off Meeting", highlight: true },
              { day: "7", label: "Woche 1", sub: "Systemkonfiguration", highlight: false },
              { day: "14", label: "Woche 2", sub: "Mitarbeiter-Training", highlight: false },
              { day: "🚀", label: "Laufend", sub: "Skalierung & Updates", highlight: true, rocket: true },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 z-10 border-[0.5px] ${
                  item.rocket
                    ? "bg-[#EE671F] border-[#EE671F] text-white"
                    : item.highlight
                    ? "bg-[#101319] border-[#FFB596] text-[#FFB596]"
                    : "bg-[#101319] border-[#594238] text-[#E0C0B3]"
                }`}>
                  {item.rocket
                    ? <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    : <span className="font-medium text-sm">{item.day}</span>
                  }
                </div>
                <h4 className="font-medium text-[#F0EDE6] mb-2">{item.label}</h4>
                <p className="text-xs text-[#E0C0B3] uppercase tracking-widest">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Tech */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: "security",
              title: "Sicherheit & Datenschutz",
              desc: "Ihre Daten verlassen niemals deutschen Boden. Unsere Server sind ISO 27001 zertifiziert und vollständig DSGVO-konform. Wir nutzen Ende-zu-Ende Verschlüsselung für alle Gutachten-Entwürfe.",
            },
            {
              icon: "integration_instructions",
              title: "Technische Integration",
              desc: "Unsere REST-API ermöglicht die nahtlose Anbindung an Ihre bestehende Software-Landschaft. Kompatibel mit allen gängigen Gutachter- und Kanzleisoftware-Lösungen.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-[#191C22] p-10 border-[0.5px] border-[#594238] rounded-xl hover:border-[#FFB596] transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-[#272A31] rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#FFB596]">{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#F0EDE6] mb-4">{item.title}</h3>
                  <p className="text-[#E0C0B3] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-24">
        <Link href="/kontakt" className="bg-[#E8631A] text-white px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all">
          Jetzt Anfrage stellen
        </Link>
      </div>
    </main>
  );
}
