import type { Metadata } from "next";
import Link from "next/link";
import { getAblaufPage } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Ablauf — So funktioniert die KI-Gutachten Integration",
  description: "In 3 Schritten zur digitalen Gutachtenerstellung: Anfrage, Onboarding, Loslegen.",
  alternates: { canonical: "https://gutachten-ai.de/ablauf" },
};

const defaults = {
  heroLabel: "Implementierung",
  heroTitle: "Vom Erstkontakt zur fertigen",
  heroTitleHighlight: "Expertise.",
  heroSubtext: "Effizienz beginnt bei der Einführung. Wir haben einen strukturierten Prozess entwickelt, der Ihre bestehenden Workflows respektiert und digital transformiert.",
  steps: [
    { number: "01", title: "Anfrage", description: "Wir analysieren Ihren aktuellen Bedarf und prüfen die Kompatibilität Ihrer Datenstruktur mit unserer KI-Engine.", items: ["Erstgespräch & Bedarfsanalyse", "Daten-Checkup"] },
    { number: "02", title: "Onboarding", description: "Integration der Schnittstellen und Training Ihres Teams auf die spezifischen Module Ihres Fachbereichs.", items: ["Setup & Integration", "Live-Schulung via Web-App"] },
    { number: "03", title: "Loslegen", description: "Ab Tag 1 profitieren Sie von automatisierten Gutachten-Entwürfen und digitaler Beweissicherung.", items: ["Voller Funktionsumfang", "Support & Optimierung"] },
  ],
  timeline: [
    { day: "0", label: "Tag 0", sublabel: "Kick-off Meeting", isRocket: false },
    { day: "7", label: "Tag 1", sublabel: "Systemkonfiguration", isRocket: false },
    { day: "14", label: "Ab Tag 1", sublabel: "Mitarbeiter-Training", isRocket: false },
    { day: "", label: "Laufend", sublabel: "Skalierung & Updates", isRocket: true },
  ],
  trustItems: [
    { icon: "security", title: "Sicherheit & Datenschutz", description: "Ihre Daten verlassen niemals deutschen Boden. Unsere Server sind ISO 27001 zertifiziert und vollständig DSGVO-konform." },
    { icon: "settings_input_component", title: "Technische Integration", description: "Dank unserer modernen REST-API lässt sich gutachten-ai.de nahtlos in Ihre bestehende Branchensoftware integrieren." },
  ],
  ctaTitle: "Bereit für den digitalen Vorsprung?",
  ctaSubtext: "Sichern Sie sich jetzt ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihren Arbeitsalltag revolutionieren können.",
  ctaPrimaryButton: "Kostenloses Gespräch buchen",
  ctaSecondaryButton: "Funktionen ansehen",
};

export default async function Ablauf() {
  const cms = await getAblaufPage().catch(() => null);
  const d = { ...defaults, ...cms };

  return (
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center md:text-left">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="text-[#E8631A] font-medium tracking-widest text-xs uppercase mb-4 block">{d.heroLabel}</span>
            <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.1] mb-8 text-on-surface">
              {d.heroTitle} <span className="text-[#FFB596] italic">{d.heroTitleHighlight}</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">{d.heroSubtext}</p>
          </div>
          <div className="hidden md:block md:col-span-5 border-l-[0.5px] border-outline-variant pl-8 pb-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs text-on-surface-variant font-medium">
                <span>Ready for launch</span><span>100%</span>
              </div>
              <div className="w-full h-1 bg-surface-container-high overflow-hidden">
                <div className="h-full bg-[#EE671F] w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-px bg-outline-variant border-[0.5px] border-outline-variant overflow-hidden rounded-xl">
          {d.steps?.map((step: { number: string; title: string; description: string; items: string[] }, i: number) => (
            <div key={i} className="bg-surface p-8 flex flex-col h-full">
              <span className="text-4xl font-light text-[#FFB596] mb-6">{step.number}</span>
              <h3 className="text-2xl font-medium text-on-surface mb-4">{step.title}</h3>
              <p className="text-on-surface-variant mb-8 flex-grow leading-relaxed">{step.description}</p>
              <div className="p-6 bg-surface-container-low border-[0.5px] border-outline-variant rounded-lg">
                <ul className="space-y-3 text-sm text-on-surface">
                  {step.items?.map((item: string, j: number) => (
                    <li key={j} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-xs text-[#E8631A]">check_circle</span>{item}
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
        <h2 className="text-3xl font-medium text-on-surface mb-16 text-center">Zeitplan der Einführung</h2>
        <div className="relative">
          <div className="absolute top-6 left-0 w-full h-px bg-outline-variant hidden md:block"></div>
          <div className="grid md:grid-cols-4 gap-12 relative">
            {d.timeline?.map((item: { day: string; label: string; sublabel: string; isRocket: boolean }, i: number) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 z-10 ${item.isRocket ? "bg-[#EE671F] text-[#4D1900]" : i === 0 ? "bg-surface border-[0.5px] border-[#FFB596]" : "bg-surface border-[0.5px] border-outline-variant"}`}>
                  {item.isRocket
                    ? <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    : <span className={`font-medium ${i === 0 ? "text-[#FFB596]" : "text-on-surface-variant"}`}>{item.day}</span>
                  }
                </div>
                <h4 className="font-medium text-on-surface mb-2">{item.label}</h4>
                <p className="text-xs text-on-surface-variant uppercase tracking-widest">{item.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {d.trustItems?.map((item: { icon: string; title: string; description: string }, i: number) => (
            <div key={i} className="bg-surface-container-low p-10 border-[0.5px] border-outline-variant rounded-xl hover:border-[#FFB596] transition-colors">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-surface-container-high rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#FFB596]" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-on-surface mb-4">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-[#EE671F] p-12 md:p-20 rounded-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-normal text-[#4D1900] mb-6 tracking-tight">{d.ctaTitle}</h2>
            <p className="text-[#4D1900]/80 text-lg mb-10 leading-relaxed">{d.ctaSubtext}</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="bg-[#101319] text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-colors">{d.ctaPrimaryButton}</Link>
              <Link href="/funktionen" className="border-[0.5px] border-[#4D1900] text-[#4D1900] px-8 py-4 rounded-lg font-medium hover:bg-[#4D1900] hover:text-white transition-colors">{d.ctaSecondaryButton}</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
