import Link from "next/link";

export default function Blog() {
  return (
    <main className="pt-32 pb-24 max-w-7xl mx-auto px-6">

      {/* Hero */}
      <div className="mb-20">
        <h1 className="text-5xl md:text-6xl font-normal tracking-tight text-[#F0EDE6] mb-6 max-w-3xl">Expertise im digitalen Zeitalter.</h1>
        <p className="text-[#E0C0B3] text-lg max-w-2xl leading-relaxed">
          Aktuelle Einblicke in die Welt der KI-gestützten Immobilienbegutachtung, rechtliche Rahmenbedingungen und technologische Fortschritte.
        </p>
      </div>

      {/* Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

        {/* Article 1 Large */}
        <article className="md:col-span-8 group">
          <div className="relative aspect-[16/9] mb-8 overflow-hidden rounded-xl border-[0.5px] border-[#2A3344]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Abstract representation of artificial intelligence in architectural design"
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2J-Pw6A5QD45SVIuuXKpDF7bwRIzivwcBtFBfMKbJe8yC4WWiNZA8oTxMRFrgtOsH53-AvzsQCSLZiZhtKqA6W9aQ3ypfwqzKPn0poRrpPnsJ6AEHflJWCKdvX5Zgmrbt1Oi-PvrlRmdsBZNvUezHFIzhL8bCeB2Ex34SlTMaSJm9HSPyxqx4tAxrMHcA5VodjjxfHnYwrRBcSnt-Q6v-V7Ks65IOhR1oTa3UUWbUcIJbD2g4cYKyGGZfUmXg2iagrN3f8Of9xQi7"
            />
          </div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">Technologie</span>
            <span className="text-[#E0C0B3]/40 text-xs">•</span>
            <time className="text-[#E0C0B3] text-xs">14. Mai 2026</time>
          </div>
          <h2 className="text-3xl font-medium text-[#F0EDE6] mb-4 group-hover:text-[#E8631A] transition-colors">KI im Alltag: Der neue Standard für Baugutachter</h2>
          <p className="text-[#E0C0B3] leading-relaxed text-lg mb-6 max-w-2xl">
            Wie automatisierte Bilderkennung und LLMs die Dokumentationsgeschwindigkeit verdreifachen, ohne die juristische Belastbarkeit zu gefährden.
          </p>
          <Link className="inline-flex items-center gap-2 text-[#E8631A] font-medium hover:gap-4 transition-all" href="/blog/ki-im-alltag">
            <span>Weiterlesen</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </article>

        {/* Sidebar Articles */}
        <div className="md:col-span-4 flex flex-col gap-12">
          <article className="group">
            <div className="aspect-[4/3] mb-6 overflow-hidden rounded-xl border-[0.5px] border-[#2A3344]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Legal documents and gavel on a desk"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfsx-wxwWb8G3yd-wA96shdblsuhECekaFRHRStaWgtxzxaXYk6sQlnME8HLxIBod3Rf5DiChTNrs-mFK3KOXwJtZ5lJo0as57pM9QElVflRdla15rB1arr7xjFCERyD3XesmKl2kpYjIDh7tcSdg9jcTGu5jRDzNQg26M0bN3OVWtWbAu7F3STN9LMIaSfX0MNX8s1wgdbFewbeRZFaadhc78794IglDpSZOpeSM9KRKezydBKfLgcXkdv4jkaGGyTgzaLLLpqcmu"
              />
            </div>
            <time className="text-[#E0C0B3] text-xs mb-3 block">08. Mai 2026</time>
            <h3 className="text-xl font-medium text-[#F0EDE6] mb-3 group-hover:text-[#E8631A] transition-colors">DIN-Normen und KI: Rechtssichere Dokumentation</h3>
            <p className="text-[#E0C0B3] text-sm leading-relaxed mb-4">
              Die Einhaltung aktueller DIN-Normen ist das Fundament jedes Gutachtens. Erfahren Sie, wie unsere KI-Modelle diese Standards in Echtzeit validieren.
            </p>
            <Link className="text-[#E8631A] text-sm font-medium hover:underline underline-offset-4" href="/blog/din-normen">Weiterlesen</Link>
          </article>

          <div className="h-px bg-[#2A3344] w-full"></div>

          <article className="group">
            <div className="aspect-[4/3] mb-6 overflow-hidden rounded-xl border-[0.5px] border-[#2A3344]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Cybersecurity data encryption visualization"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe-HdOhQvPVC4MECIgCPVM2Ha2rxmV-Ddhy2YSVALX9HwBaFuHJbJlgrUGQnvLRejQ0cCIIJm96bE5NugHl-dbccwZ5RTFWqTK5p5WtTmCYoJlxPlMAuzNHikEID6OCuLwgg0m_BH7S-sojLTZ9aiPvElplWkjqkqbNe-mTdS6vfxZx-LYKSU0sEBJl_bJZ1tIwJd8HAd6uw99KYvxHa9i0t_ebxFt-BUjdWXzr6c902XXeiJf7T_fbxc2G4Inuq1GIL_rjfxAGJXb"
              />
            </div>
            <time className="text-[#E0C0B3] text-xs mb-3 block">02. Mai 2026</time>
            <h3 className="text-xl font-medium text-[#F0EDE6] mb-3 group-hover:text-[#E8631A] transition-colors">DSGVO-konform: Datensicherheit bei Hausbegehungen</h3>
            <p className="text-[#E0C0B3] text-sm leading-relaxed mb-4">
              Datenschutz beginnt bei der ersten Aufnahme. Wie wir sensible Objektdaten auf deutschen Servern verschlüsseln und verarbeiten.
            </p>
            <Link className="text-[#E8631A] text-sm font-medium hover:underline underline-offset-4" href="/blog/dsgvo">Weiterlesen</Link>
          </article>
        </div>
      </div>

      {/* Newsletter */}
      <section className="mt-32 p-12 bg-[#191C22] rounded-xl border-[0.5px] border-[#2A3344] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-md">
          <h4 className="text-2xl font-normal text-[#F0EDE6] mb-2">Fachwissen abonnieren</h4>
          <p className="text-[#E0C0B3] text-sm">Erhalten Sie monatlich Updates zu technologischen Trends im Bauwesen und neuen KI-Funktionen.</p>
        </div>
        <form className="flex w-full md:w-auto gap-4">
          <input className="bg-[#1D2026] text-[#E1E2EB] px-6 py-3 rounded-lg border-[0.5px] border-[#2A3344] focus:border-[#E8631A] focus:outline-none w-full md:w-64 text-sm" placeholder="E-Mail Adresse" type="email"/>
          <button className="bg-[#FFB596] text-[#4D1900] px-8 py-3 rounded-lg text-sm font-medium hover:bg-[#EE671F] hover:text-white transition-colors whitespace-nowrap" type="submit">Anmelden</button>
        </form>
      </section>

    </main>
  );
}
