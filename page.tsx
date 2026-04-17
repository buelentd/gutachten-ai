"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const HeroCrossfade = () => {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecond(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square">
      <Image
        src="/hero.webp"
        alt="Architektur-Blueprint — technische Zeichnung mit orangen Konstruktionslinien für Bausachverständige"
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 0px, 50vw"
        className="object-contain rounded-2xl border-[0.5px] border-[#2A3344]"
        style={{ opacity: showSecond ? 0 : 1, transition: "opacity 1.5s ease-in-out" }}
      />
      <Image
        src="/hero-sw.webp"
        alt="Baustellen-Illustration — Gebäude im Rohbau für Bausachverständige"
        fill
        sizes="(max-width: 768px) 0px, 50vw"
        className="object-contain rounded-2xl border-[0.5px] border-[#2A3344]"
        style={{ opacity: showSecond ? 1 : 0, transition: "opacity 1.5s ease-in-out" }}
      />
    </div>
  );
};

export default function Home() {
  return (
    <main>
      {/* 1. HERO — blur entfernt (war Ursache für forced reflow + schlechte Mobile Performance) */}
      <section className="relative min-h-[819px] flex items-center bg-[#0F1218] overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.1] mb-8 text-[#F0EDE6]">
              Der digitale Assistent für Bausachverständige.
            </h1>
            <p className="text-lg text-[#E0C0B3] leading-relaxed mb-10 max-w-lg">
              Vom Beweisbeschluss bis zum fertigen Gutachten — strukturiert, nachvollziehbar und rechtssicher. Entwickelt für die tägliche Arbeit vor Gericht und vor Ort.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/funktionen" className="bg-[#E8631A] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#E8631A]/90 transition-colors">
                Alle Funktionen entdecken
              </Link>
              <Link href="/ablauf" className="border-[0.5px] border-[#2A3344] text-[#F0EDE6] px-8 py-4 rounded-xl font-medium hover:bg-[#272A31] transition-colors">
                So funktioniert es
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block z-0">
            {/* blur-[120px] entfernt — war Ursache für forced reflow */}
            <HeroCrossfade />
          </div>
        </div>
      </section>

      {/* 2. TRUST-BANDEROLE */}
      <section className="bg-[#0D1017] border-y-[0.5px] border-[#2A3344] py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { icon: "shield", label: "DSGVO-konform" },
              { icon: "dns", label: "Deutsche Server" },
              { icon: "lock", label: "256-bit Verschlüsselung" },
              { icon: "policy", label: "EU AI Act ready" },
              { icon: "person_check", label: "Menschliche Kontrolle" },
              { icon: "verified", label: "Made in Germany" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[#8A9BB0]">
                <span className="material-symbols-outlined text-sm">{item.icon}</span>
                <span className="text-xs font-medium tracking-wider uppercase">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STATS */}
      <section className="bg-[#151B27] border-b-[0.5px] border-[#2A3344]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "18", label: "Beweisfragen strukturiert", highlight: true },
              { value: "3", label: "Exportformate (PDF, Word, Druck)", highlight: false },
              { value: "100%", label: "Datenhoheit beim Sachverständigen", highlight: false },
              { value: "< 1 Tag", label: "Einarbeitungszeit", highlight: false },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className={`text-3xl font-medium mb-1 ${stat.highlight ? "text-[#E8631A]" : "text-[#F0EDE6]"}`}>{stat.value}</div>
                <div className="text-xs text-[#8A9BB0] font-medium tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROBLEM/SOLUTION */}
      <section className="py-24 bg-[#101319]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-2xl">
            <h2 className="text-3xl font-medium text-[#F0EDE6] mb-4">Warum der bisherige Weg nicht mehr ausreicht.</h2>
            <p className="text-[#8A9BB0]">Gutachten entstehen heute noch überwiegend manuell — trotz hoher Fallzahlen, steigendem Termindruck und wachsender Dokumentationsanforderungen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border-[0.5px] border-[#2A3344] bg-[#151B27]">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-red-400">warning</span>
                <span className="font-medium text-[#F0EDE6]">Der klassische Weg</span>
              </div>
              <ul className="space-y-4">
                {["Beweisbeschlüsse manuell übertragen und strukturieren.", "Fotos vom Ortstermin unsortiert und ohne Fallbezug.", "Gutachten-Entwurf in Word — Layout-Frust inklusive."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#8A9BB0]">
                    <span className="material-symbols-outlined text-xs mt-1 text-red-400">close</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 rounded-2xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#E8631A]">auto_awesome</span>
                <span className="font-medium text-[#F0EDE6]">Mit dem Gutachten Assistenten</span>
              </div>
              <ul className="space-y-4">
                {["Beweisbeschluss hochladen — Struktur entsteht automatisch.", "Unterlagen, Fotos und Notizen fallbezogen in der digitalen Akte.", "Gutachten exportieren als PDF oder Word — strukturiert und fertig."].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#8A9BB0]">
                    <span className="material-symbols-outlined text-xs mt-1 text-[#E8631A]">check</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURE-TEASER */}
      <section className="py-24 bg-[#151B27]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">Was der Gutachten Assistent kann.</h2>
            <p className="text-[#8A9BB0] max-w-2xl mx-auto">Drei Kernbereiche, die den gesamten Workflow vom Eingang des Falls bis zum fertigen Dokument abdecken.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "folder_open", title: "Fallverwaltung", description: "Jeder Fall enthält Akte, Beweisbeschluss, Ortstermin und Gutachten als eigene Bereiche.", href: "/funktionen" },
              { icon: "inventory_2", title: "Digitale Akte", description: "Fotos, PDFs und Unterlagen werden fallbezogen abgelegt und nach Kategorie gefiltert.", href: "/funktionen" },
              { icon: "sim_card_download", title: "Gutachten-Export", description: "Das fertige Gutachten wird direkt als PDF oder Word exportiert — gegliedert nach Beweisfragen.", href: "/funktionen" },
            ].map((card, i) => (
              <Link key={i} href={card.href} className="group p-8 rounded-2xl border-[0.5px] border-[#2A3344] bg-[#1C2333] hover:border-[#E8631A]/40 transition-all">
                <span className="material-symbols-outlined text-[#E8631A] text-3xl mb-6 block">{card.icon}</span>
                <h3 className="text-xl font-medium text-[#F0EDE6] mb-3">{card.title}</h3>
                <p className="text-sm text-[#8A9BB0] leading-relaxed mb-6">{card.description}</p>
                <span className="text-xs text-[#E8631A] font-medium tracking-wider uppercase group-hover:underline">Mehr erfahren →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/funktionen" className="border-[0.5px] border-[#2A3344] text-[#F0EDE6] px-8 py-4 rounded-xl font-medium hover:bg-[#272A31] transition-colors inline-block">
              Alle Funktionen ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ABLAUF */}
      <section className="py-24 bg-[#0F1218]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">In drei Schritten zum fertigen Gutachten.</h2>
            <p className="text-[#8A9BB0] max-w-2xl mx-auto">Kein langer Einarbeitungsaufwand. Der Workflow folgt dem, was Sachverständige ohnehin tun — nur strukturierter.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-[0.5px] bg-[#2A3344]"></div>
            {[
              { step: "01", icon: "create_new_folder", title: "Fall anlegen", description: "Verfahrensdaten, Parteien und Beweisbeschluss erfassen. Der Fall ist sofort einsatzbereit." },
              { step: "02", icon: "upload_file", title: "Unterlagen & Fotos einpflegen", description: "Dokumente in die digitale Akte laden, Fotos vom Ortstermin zuordnen. Alles fallbezogen." },
              { step: "03", icon: "picture_as_pdf", title: "Gutachten generieren & exportieren", description: "Beweisfragen beantworten, KI-Assistenz nutzen. Export als PDF oder Word." },
            ].map((step, i) => (
              <div key={i} className="relative p-8 rounded-2xl border-[0.5px] border-[#2A3344] bg-[#151B27]">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl font-light text-[#E8631A]/30">{step.step}</span>
                  <span className="material-symbols-outlined text-[#E8631A]">{step.icon}</span>
                </div>
                <h3 className="text-xl font-medium text-[#F0EDE6] mb-3">{step.title}</h3>
                <p className="text-sm text-[#8A9BB0] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/ablauf" className="border-[0.5px] border-[#2A3344] text-[#F0EDE6] px-8 py-4 rounded-xl font-medium hover:bg-[#272A31] transition-colors inline-block">
              Den vollständigen Ablauf ansehen →
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FÜR WEN */}
      <section className="py-24 bg-[#151B27]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">Für wen ist der Gutachten Assistent?</h2>
            <p className="text-[#8A9BB0]">Entwickelt für Sachverständige, die gerichtliche Gutachten unter Zeitdruck und mit hohem Qualitätsanspruch erstellen.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "gavel", title: "Öffentlich bestellte und vereidigte Sachverständige", description: "Gerichtsgutachten nach Beweisbeschluss — strukturiert, nachvollziehbar und mit vollständiger Dokumentation." },
              { icon: "engineering", title: "Freie Bausachverständige", description: "Privatgutachten, Mängelrügen und Zustandsbeschreibungen effizienter erstellen." },
              { icon: "account_balance", title: "Gutachterbüros mit mehreren Sachverständigen", description: "Einheitliche Falldokumentation und nachvollziehbare Gutachtenhistorie für das gesamte Team." },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl border-[0.5px] border-[#2A3344] bg-[#1C2333]">
                <span className="material-symbols-outlined text-[#E8631A] text-3xl mb-6 block">{item.icon}</span>
                <h3 className="text-lg font-medium text-[#F0EDE6] mb-3">{item.title}</h3>
                <p className="text-sm text-[#8A9BB0] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROBLEM/LÖSUNG */}
      <section className="py-24 bg-[#0F1218]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">Die größten Zeitfresser — und wie wir sie lösen.</h2>
            <p className="text-[#8A9BB0] max-w-2xl mx-auto">Vier konkrete Probleme aus dem Alltag. Vier Antworten des Gutachten Assistenten.</p>
          </div>
          <div className="space-y-4">
            {[
              { problem: "Beweisbeschlüsse manuell in eine Gutachtenstruktur überführen.", solution: "Beweisbeschluss hochladen — die App extrahiert Beweisfragen und legt die Struktur automatisch an.", icon: "description" },
              { problem: "Hunderte Fotos vom Ortstermin ohne klare Zuordnung.", solution: "Fotos werden fallbezogen abgelegt und sind beim Ausfüllen der Beweisfragen abrufbar.", icon: "photo_library" },
              { problem: "Notizen und Diktate erst später ins Büro übertragen.", solution: "Diktate werden direkt im Ortstermin-Modus erfasst — kein Übertragen nötig.", icon: "mic" },
              { problem: "Gutachten in Word manuell formatieren.", solution: "Export auf Knopfdruck: strukturiert als PDF oder Word, mit allen Feststellungen.", icon: "sim_card_download" },
            ].map((pair, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border-[0.5px] border-[#2A3344]">
                <div className="p-8 bg-[#151B27] flex items-start gap-4">
                  <span className="material-symbols-outlined text-red-400 mt-1 flex-shrink-0">close</span>
                  <div>
                    <div className="text-xs text-red-400 font-medium tracking-wider uppercase mb-2">Das Problem</div>
                    <p className="text-[#8A9BB0] text-sm leading-relaxed">{pair.problem}</p>
                  </div>
                </div>
                <div className="p-8 bg-[#1C2333] border-l-[0.5px] border-[#2A3344] flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#E8631A] mt-1 flex-shrink-0">{pair.icon}</span>
                  <div>
                    <div className="text-xs text-[#E8631A] font-medium tracking-wider uppercase mb-2">Die Lösung</div>
                    <p className="text-[#8A9BB0] text-sm leading-relaxed">{pair.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FEATURES GRID */}
      <section className="py-24 bg-[#151B27]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">Alle Werkzeuge auf einen Blick.</h2>
            <p className="text-[#8A9BB0] max-w-xl mx-auto">Von der Fallanlage bis zum Export.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2A3344]">
            {[
              { icon: "folder_open", title: "Fallverwaltung", description: "Akte, Beweisbeschluss, Ortstermin und Gutachten als strukturierte Einheit." },
              { icon: "inventory_2", title: "Digitale Akte", description: "Unterlagen, Fotos und PDFs fallbezogen abgelegt und filterbar." },
              { icon: "quiz", title: "Beweisfragen-Editor", description: "18 Beweisfragen mit Behauptung, Hinweis und Feststellungen." },
              { icon: "mic", title: "Ortstermin-Modus", description: "Fotos, Diktate und Notizen direkt vor Ort erfassen." },
              { icon: "auto_awesome", title: "KI-Assistent", description: "Textvorschläge und Norm-Matching auf Basis des Beweisbeschlusses." },
              { icon: "sim_card_download", title: "Export PDF & Word", description: "Fertiges Gutachten strukturiert exportieren — bereit zur Einreichung." },
            ].map((f, i) => (
              <div key={i} className="p-10 bg-[#151B27] hover:bg-[#1C2333] transition-colors">
                <span className="material-symbols-outlined text-[#E8631A] mb-6 block">{f.icon}</span>
                <h3 className="text-xl font-medium text-[#F0EDE6] mb-4">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[#8A9BB0]">{f.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/funktionen" className="border-[0.5px] border-[#2A3344] text-[#F0EDE6] px-8 py-4 rounded-xl font-medium hover:bg-[#272A31] transition-colors inline-block">
              Alle Funktionen im Detail →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. BLOG-TEASER */}
      <section className="py-24 bg-[#0F1218]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">Aus dem Blog.</h2>
              <p className="text-[#8A9BB0]">Fachbeiträge rund um KI, Gutachtenwesen und digitale Prozesse.</p>
            </div>
            <Link href="/blog" className="hidden md:block text-[#E8631A] text-sm font-medium hover:underline">Alle Beiträge →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { category: "KI & Recht", title: "EU AI Act und Gutachtenwesen: Was Sachverständige jetzt wissen müssen.", excerpt: "Der EU AI Act klassifiziert KI-Systeme nach Risiko. Welche Anforderungen gelten für KI-gestützte Gutachtenassistenten?", href: "/blog/eu-ai-act-gutachtenwesen" },
              { category: "Praxis", title: "Digitale Akte statt Papierordner: Wie Sachverständige Zeit gewinnen.", excerpt: "Eine strukturierte digitale Fallakte spart nicht nur Zeit — sie macht Gutachten nachvollziehbarer.", href: "/blog/digitale-akte-sachverstaendige" },
              { category: "Technik", title: "Beweisbeschlüsse automatisch auswerten: Was KI heute schon kann.", excerpt: "Moderne Sprachmodelle können Beweisbeschlüsse analysieren und in strukturierte Gutachtenvorlagen überführen.", href: "/blog/beweisbeschluss-ki-auswertung" },
            ].map((post, i) => (
              <Link key={i} href={post.href} className="group p-8 rounded-2xl border-[0.5px] border-[#2A3344] bg-[#151B27] hover:border-[#E8631A]/40 transition-all">
                <span className="text-xs text-[#E8631A] font-medium tracking-wider uppercase mb-4 block">{post.category}</span>
                <h3 className="text-lg font-medium text-[#F0EDE6] mb-3 group-hover:text-[#E8631A] transition-colors leading-snug">{post.title}</h3>
                <p className="text-sm text-[#8A9BB0] leading-relaxed">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. OFFER CARD */}
      <section className="py-32 bg-[#101319]">
        <div className="max-w-7xl mx-auto px-6 flex justify-center">
          <div className="w-full max-w-2xl p-12 rounded-3xl border-[0.5px] border-[#E8631A]/40 bg-[#151921] relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8631A] text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-1 rounded-full">Früher Zugang</div>
            <div className="text-center mb-10">
              <h2 className="text-4xl font-medium text-[#F0EDE6] mb-4">Jetzt mit dem Gutachten Assistenten starten.</h2>
              <p className="text-[#E0C0B3]">Testen Sie den vollen Funktionsumfang unverbindlich.</p>
            </div>
            <div className="space-y-6 mb-12">
              {["Vollständige Fallverwaltung inklusive", "Digitale Akte mit Filterung", "Gutachten-Export als PDF und Word"].map((item, i) => (
                <div key={i} className={`flex items-center justify-between pb-4 ${i < 2 ? "border-b-[0.5px] border-[#2A3344]" : ""}`}>
                  <span className="text-[#E0C0B3]">{item}</span>
                  <span className="material-symbols-outlined text-[#E8631A]">done_all</span>
                </div>
              ))}
            </div>
            <Link href="/kontakt" className="block w-full bg-[#E8631A] text-white py-5 rounded-xl font-medium text-lg text-center hover:shadow-[0_0_20px_rgba(232,99,26,0.3)] transition-all">
              Zugang anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-24 bg-[#0F1218] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-[#F0EDE6] mb-8">Bereit für strukturierte Gutachtenarbeit?</h2>
          <p className="text-lg text-[#E0C0B3] mb-12">Weniger manuelle Arbeit, mehr Nachvollziehbarkeit.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="bg-[#E8631A] text-white px-10 py-4 rounded-xl font-medium text-lg hover:opacity-90 transition-all">Zugang anfragen</Link>
            <Link href="/funktionen" className="border-[0.5px] border-[#2A3344] text-[#F0EDE6] px-10 py-4 rounded-xl font-medium text-lg hover:bg-[#272A31] transition-all">Alle Funktionen ansehen</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
