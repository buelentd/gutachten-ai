import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[819px] flex items-center bg-[#0F1218] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 mb-6 border-[0.5px] border-[#E8631A]/30 text-[#E8631A] text-xs font-medium tracking-widest rounded-full bg-[#E8631A]/5">
              KI-GESTÜTZTE PRÄZISION
            </span>
            <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.1] mb-8 text-[#F0EDE6]">
              Die Zukunft der <br /> Bau-Gutachten.
            </h1>
            <p className="text-lg text-[#E0C0B3] leading-relaxed mb-10 max-w-lg">
              Automatisieren Sie Ihre Dokumentationsprozesse mit künstlicher Intelligenz. Schnellere Berichte, präzisere Analysen und rechtssichere Ergebnisse für professionelle Bausachverständige.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/kontakt" className="bg-[#E8631A] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#E8631A]/90 transition-colors">
                Jetzt kostenlos testen
              </Link>
              <Link href="/ablauf" className="border-[0.5px] border-[#2A3344] text-[#F0EDE6] px-8 py-4 rounded-xl font-medium hover:bg-[#272A31] transition-colors">
                Demo vereinbaren
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -inset-20 bg-[#E8631A]/10 blur-[120px] rounded-full"></div>
            <div className="relative rounded-2xl border-[0.5px] border-[#2A3344] aspect-[4/5] bg-[#1D2026] flex items-center justify-center">
              <span className="material-symbols-outlined text-[#E8631A] text-[120px] opacity-20">architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#191C22] border-y-[0.5px] border-[#2A3344]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "85%", label: "Zeitersparnis" },
              { value: "2.4k+", label: "Gutachten erstellt" },
              { value: "100%", label: "Rechtssicher (DSGVO)" },
              { value: "< 5min", label: "Erstellungsdauer" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className={`text-3xl font-medium mb-1 ${i === 0 ? "text-[#E8631A]" : "text-[#F0EDE6]"}`}>
                  {stat.value}
                </div>
                <div className="text-xs text-[#E0C0B3] font-medium tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 bg-[#101319]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-3xl font-medium text-[#F0EDE6] mb-4">Warum wir die Branche verändern.</h2>
            <p className="text-[#E0C0B3]">Herkömmliche Gutachtenerstellung ist zeitaufwendig und fehleranfällig. Unsere KI-Technologie setzt neue Standards in Sachen Effizienz.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border-[0.5px] border-[#2A3344] bg-[#1D2026]">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-red-400">warning</span>
                <span className="font-medium text-[#F0EDE6]">Der klassische Weg</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Stundenlange manuelle Texterstellung und Formatierung.",
                  "Inkonsistente Formulierungen und Übertragungsfehler.",
                  "Hoher administrativer Aufwand bei der Bildverwaltung.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#E0C0B3]">
                    <span className="material-symbols-outlined text-xs mt-1 text-red-400">close</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#E8631A]">auto_awesome</span>
                <span className="font-medium text-[#F0EDE6]">Mit gutachter-ki.de</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Automatisierte Berichte basierend auf Ihren Notizen und Fotos.",
                  "Standardisierte, fachlich präzise Textbausteine.",
                  "Nahtlose Integration von digitalen Vor-Ort-Aufnahmen.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#E0C0B3]">
                    <span className="material-symbols-outlined text-xs mt-1 text-[#E8631A]">check</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#191C22]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2A3344]">
            {[
              { icon: "description", title: "KI-Texterstellung", desc: "Präzise Fachformulierungen auf Knopfdruck, angepasst an Ihren individuellen Schreibstil." },
              { icon: "photo_library", title: "Bild-KI-Analyse", desc: "Automatische Schadenserkennung und Klassifizierung direkt in Ihren Fotos." },
              { icon: "cloud_sync", title: "Cloud Synchronisation", desc: "Echtzeit-Abgleich Ihrer Daten zwischen Baustelle und Büro ohne Datenverlust." },
              { icon: "gavel", title: "Rechtssicherheit", desc: "Ständige Aktualisierung auf Basis geltender Normen und Verordnungen." },
              { icon: "shield", title: "DSGVO Konform", desc: "Verschlüsselte Datenhaltung ausschließlich auf deutschen Servern." },
              { icon: "api", title: "Schnittstellen", desc: "Einfacher Export in Word, PDF oder direkt in Ihre Branchensoftware." },
            ].map((f, i) => (
              <div key={i} className="p-10 bg-[#101319] hover:bg-[#1D2026] transition-colors">
                <span className="material-symbols-outlined text-[#E8631A] mb-6 block">{f.icon}</span>
                <h3 className="text-xl font-medium text-[#F0EDE6] mb-4">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#E0C0B3]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Card */}
      <section className="py-32 bg-[#101319] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="w-full max-w-2xl p-12 rounded-3xl border-[0.5px] border-[#E8631A]/40 bg-[#151921] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8631A] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1 rounded-full">
              Exklusives Angebot
            </div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">Starten Sie digital durch.</h2>
              <p className="text-[#E0C0B3]">Testen Sie die volle Funktionalität 14 Tage lang unverbindlich.</p>
            </div>
            <div className="space-y-6 mb-12">
              {["Unbegrenzte Gutachten", "KI-Text-Assistent inkl.", "Premium-Support 24/7"].map((item, i) => (
                <div key={i} className={`flex items-center justify-between pb-4 ${i < 2 ? "border-b-[0.5px] border-[#2A3344]" : ""}`}>
                  <span className="text-[#E0C0B3]">{item}</span>
                  <span className="material-symbols-outlined text-[#E8631A]">done_all</span>
                </div>
              ))}
            </div>
            <Link href="/kontakt" className="block w-full bg-[#E8631A] text-white py-5 rounded-xl font-medium text-lg text-center hover:shadow-[0_0_20px_rgba(232,99,26,0.3)] transition-all">
              Unverbindlich testen
            </Link>
            <p className="text-center mt-6 text-xs text-[#E0C0B3]/60 italic">Keine Kreditkarte erforderlich. Jederzeit kündbar.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0F1218] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#F0EDE6] mb-8">Bereit für das nächste Level?</h2>
          <p className="text-lg text-[#E0C0B3] mb-12">Schließen Sie sich über 500 Sachverständigen an, die ihre Arbeit bereits mit unserer KI optimieren.</p>
          <div className="inline-flex items-center p-1 rounded-2xl bg-[#272A31] border-[0.5px] border-[#2A3344]">
            <input
              className="bg-transparent border-none outline-none text-[#E1E2EB] px-6 w-64 text-sm"
              placeholder="E-Mail Adresse"
              type="email"
            />
            <Link href="/kontakt" className="bg-[#E8631A] text-white px-8 py-3 rounded-xl font-medium hover:bg-[#E8631A]/90 transition-colors">
              Kostenlos starten
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
