import type { Metadata } from "next";
import Link from "next/link";
import { getHomePage } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "KI-Gutachtenerstellung für Bausachverständige",
  description: "Automatisieren Sie Ihre Gutachtenerstellung mit KI. 85% Zeitersparnis, DIN-normkonform, DSGVO-konform.",
  alternates: { canonical: "https://gutachten-ai.de" },
};

// Default content (Fallback wenn Sanity leer)
const defaults = {
  heroBadge: "KI-GESTÜTZTE PRÄZISION",
  heroTitle: "Die Zukunft der Bau-Gutachten.",
  heroSubtext: "Automatisieren Sie Ihre Dokumentationsprozesse mit künstlicher Intelligenz. Schnellere Berichte, präzisere Analysen und rechtssichere Ergebnisse für professionelle Bausachverständige.",
  heroPrimaryButton: "Jetzt kostenlos testen",
  heroSecondaryButton: "Demo vereinbaren",
  stats: [
    { value: "85%", label: "Zeitersparnis", highlight: true },
    { value: "2.4k+", label: "Gutachten erstellt", highlight: false },
    { value: "100%", label: "Rechtssicher (DSGVO)", highlight: false },
    { value: "< 5min", label: "Erstellungsdauer", highlight: false },
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
    { icon: "description", title: "KI-Texterstellung", description: "Präzise Fachformulierungen auf Knopfdruck, angepasst an Ihren individuellen Schreibstil." },
    { icon: "photo_library", title: "Bild-KI-Analyse", description: "Automatische Schadenserkennung und Klassifizierung direkt in Ihren Fotos." },
    { icon: "cloud_sync", title: "Cloud Synchronisation", description: "Echtzeit-Abgleich Ihrer Daten zwischen Baustelle und Büro ohne Datenverlust." },
    { icon: "gavel", title: "Rechtssicherheit", description: "Ständige Aktualisierung auf Basis geltender Normen und Verordnungen." },
    { icon: "shield", title: "DSGVO Konform", description: "Verschlüsselte Datenhaltung ausschließlich auf deutschen Servern." },
    { icon: "api", title: "Schnittstellen", description: "Einfacher Export in Word, PDF oder direkt in Ihre Branchensoftware." },
  ],
  offerTitle: "Starten Sie digital durch.",
  offerSubtext: "Testen Sie die volle Funktionalität 14 Tage lang unverbindlich.",
  offerItems: ["Unbegrenzte Gutachten", "KI-Text-Assistent inkl.", "Premium-Support 24/7"],
  ctaTitle: "Bereit für das nächste Level?",
  ctaSubtext: "Schließen Sie sich über 500 Sachverständigen an, die ihre Arbeit bereits mit unserer KI optimieren.",
};

export default async function Home() {
  const cms = await getHomePage().catch(() => null);
  const d = { ...defaults, ...cms };

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[819px] flex items-center bg-[#0F1218] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 mb-6 border-[0.5px] border-[#E8631A]/30 text-[#E8631A] text-xs font-medium tracking-widest rounded-full bg-[#E8631A]/5">
              {d.heroBadge}
            </span>
            <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.1] mb-8 text-[#F0EDE6]">
              {d.heroTitle}
            </h1>
            <p className="text-lg text-[#E0C0B3] leading-relaxed mb-10 max-w-lg">{d.heroSubtext}</p>
            <div className="flex items-center gap-4">
              <Link href="/kontakt" className="bg-[#E8631A] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#E8631A]/90 transition-colors">
                {d.heroPrimaryButton}
              </Link>
              <Link href="/ablauf" className="border-[0.5px] border-[#2A3344] text-[#F0EDE6] px-8 py-4 rounded-xl font-medium hover:bg-[#272A31] transition-colors">
                {d.heroSecondaryButton}
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block z-0">
            <div className="absolute -inset-20 bg-[#E8631A]/10 blur-[120px] rounded-full"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt="Modern architecture drawing" className="relative rounded-2xl border-[0.5px] border-[#2A3344] grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5] w-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSreBcnnEQnNd69Biiu6784mLwxbXbXuw2sOR4XHSjQSa8eRAn5mMQB9CizSeq_wHg4ejofBCRARWEX55XelgK4JPej5Yrv-1FLjoREtHIiedaLWJuex3lhMN0muziOLf_8WtJftur3PDceYNWzri8AUijFsWLpP9aZCBfJYUyGgriZYZUHmAjvVn7v2_k_ntOKcoJ_O87YqQwQ85m9q4N9flCU4kNRXvjRy_lcAoiyeUkkVAgmHSrQ4S9Z1PIHRiXnPrILdEnfKrX"/>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface-container-low border-y-[0.5px] border-technical-line">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {d.stats?.map((stat: { value: string; label: string; highlight: boolean }, i: number) => (
              <div key={i} className="text-center md:text-left">
                <div className={`text-3xl font-medium mb-1 ${stat.highlight ? "text-[#E8631A]" : "text-on-surface"}`}>{stat.value}</div>
                <div className="text-xs text-on-surface-variant font-medium tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-3xl font-medium text-on-surface mb-4">{d.problemTitle}</h2>
            <p className="text-on-surface-variant">{d.problemSubtext}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border-[0.5px] border-technical-line bg-surface-container">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-red-400">warning</span>
                <span className="font-medium text-on-surface">Der klassische Weg</span>
              </div>
              <ul className="space-y-4">
                {d.problemItems?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-xs mt-1 text-red-400">close</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#E8631A]">auto_awesome</span>
                <span className="font-medium text-on-surface">Mit gutachten-ai.de</span>
              </div>
              <ul className="space-y-4">
                {d.solutionItems?.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-xs mt-1 text-[#E8631A]">check</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-technical-line">
            {d.features?.map((f: { icon: string; title: string; description: string }, i: number) => (
              <div key={i} className="p-10 bg-surface hover:bg-surface-container transition-colors">
                <span className="material-symbols-outlined text-[#E8631A] mb-6 block">{f.icon}</span>
                <h3 className="text-xl font-medium text-on-surface mb-4">{f.title}</h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer Card */}
      <section className="py-32 bg-[#101319] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="w-full max-w-2xl p-12 rounded-3xl border-[0.5px] border-[#E8631A]/40 bg-[#151921] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8631A] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1 rounded-full">Exklusives Angebot</div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">{d.offerTitle}</h2>
              <p className="text-[#E0C0B3]">{d.offerSubtext}</p>
            </div>
            <div className="space-y-6 mb-12">
              {d.offerItems?.map((item: string, i: number) => (
                <div key={i} className={`flex items-center justify-between pb-4 ${i < (d.offerItems?.length - 1) ? "border-b-[0.5px] border-[#2A3344]" : ""}`}>
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

      {/* Support Strip */}
      <section className="py-12 bg-[#272A31] border-y-[0.5px] border-[#2A3344]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-sm font-medium text-[#F0EDE6]">Unser Team aus Experten berät Sie persönlich.</p>
          <div className="flex items-center gap-12">
            <div className="text-right">
              <div className="text-xs text-[#E0C0B3] uppercase tracking-widest mb-1">E-Mail</div>
              <div className="text-[#F0EDE6] font-medium">hallo@gutachten-ai.de</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0F1218] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#F0EDE6] mb-8">{d.ctaTitle}</h2>
          <p className="text-lg text-[#E0C0B3] mb-12">{d.ctaSubtext}</p>
          <Link href="/kontakt" className="bg-[#E8631A] text-white px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all">
            Kostenlos starten
          </Link>
        </div>
      </section>
    </main>
  );
}
