export default function Kontakt() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">

        {/* Hero */}
        <div className="md:col-span-12 mb-12">
          <span className="text-[#E8631A] text-sm font-medium tracking-widest uppercase mb-4 block">Kontakt</span>
          <h1 className="text-5xl md:text-6xl font-normal tracking-tight leading-tight max-w-3xl text-[#F0EDE6]">
            Präzision beginnt beim <br/>ersten Gespräch.
          </h1>
        </div>

        {/* Form */}
        <div className="md:col-span-7">
          <div className="bg-[#191C22] p-10 rounded-xl border-[0.5px] border-[#2A3344]">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#E0C0B3] uppercase tracking-wider">Vorname</label>
                  <input className="w-full bg-[#101319] border-[0.5px] border-[#2A3344] rounded-lg px-4 py-3 text-[#E1E2EB] focus:outline-none focus:border-[#E8631A] transition-colors placeholder:text-[#594238]" placeholder="Max" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-[#E0C0B3] uppercase tracking-wider">Nachname</label>
                  <input className="w-full bg-[#101319] border-[0.5px] border-[#2A3344] rounded-lg px-4 py-3 text-[#E1E2EB] focus:outline-none focus:border-[#E8631A] transition-colors placeholder:text-[#594238]" placeholder="Mustermann" type="text"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#E0C0B3] uppercase tracking-wider">E-Mail Adresse</label>
                <input className="w-full bg-[#101319] border-[0.5px] border-[#2A3344] rounded-lg px-4 py-3 text-[#E1E2EB] focus:outline-none focus:border-[#E8631A] transition-colors placeholder:text-[#594238]" placeholder="max@beispiel.de" type="email"/>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#E0C0B3] uppercase tracking-wider">Betreff</label>
                <select className="w-full bg-[#101319] border-[0.5px] border-[#2A3344] rounded-lg px-4 py-3 text-[#E1E2EB] focus:outline-none focus:border-[#E8631A] transition-colors">
                  <option>Produktanfrage</option>
                  <option>Technischer Support</option>
                  <option>Partnerschaft</option>
                  <option>Sonstiges</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-[#E0C0B3] uppercase tracking-wider">Ihre Nachricht</label>
                <textarea className="w-full bg-[#101319] border-[0.5px] border-[#2A3344] rounded-lg px-4 py-3 text-[#E1E2EB] focus:outline-none focus:border-[#E8631A] transition-colors placeholder:text-[#594238] resize-none" placeholder="Wie können wir Ihnen helfen?" rows={5}></textarea>
              </div>
              <div className="flex items-start gap-3">
                <input className="mt-1 bg-[#101319] border-[#2A3344] rounded" id="privacy" type="checkbox"/>
                <label className="text-sm text-[#E0C0B3] leading-relaxed" htmlFor="privacy">
                  Ich stimme der Verarbeitung meiner Daten gemäß der <a className="text-[#E8631A] hover:underline" href="/datenschutz">Datenschutzerklärung</a> zu.
                </label>
              </div>
              <button className="w-full bg-[#E8631A] text-white py-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2" type="submit">
                Anfrage senden
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>

        {/* Trust Section */}
        <div className="md:col-span-5 space-y-12">
          <div className="space-y-6">
            <div className="h-16 w-16 rounded-full overflow-hidden grayscale contrast-125 border-[0.5px] border-[#E8631A]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover" alt="Portrait photo of our lead support engineer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IwzJ71Te-aDcwhFw-Er9ELQqUbyVk2xwaVsc-0PoyB30rhwznDRTA1tgMkIKpPNX7qC6o20hpLtrWDFJo9dJWNbBrKNBGCjh7ebDlLzWupo_RkHeTsX9yF_Q3V2k3kU1DVKzvuAZd2eqbaaL_63nDtUN-zy9etPvJXAYlfzAoyMOawzCP28NILxPbejZxiT5VuzOwbVcG_mP0PHxzG4kH8s22ewjhTfgRxza0C7nFvEjfmlapqs_mo_IuzYcemwWx_iuB0UMytJX"/>
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#F0EDE6] mb-2">Persönliche Unterstützung</h3>
              <p className="text-[#E0C0B3] leading-relaxed text-sm">
                „Wir verstehen, dass im Gutachterwesen jedes Detail zählt. Unser Team aus Experten und KI-Spezialisten steht Ihnen zur Seite, um Ihre Prozesse effizienter und rechtssicher zu gestalten."
              </p>
              <p className="mt-4 text-xs font-medium text-[#E8631A] uppercase tracking-widest">Thomas Müller — Leiter Kundenerfolg</p>
            </div>
          </div>

          <div className="pt-12 border-t-[0.5px] border-[#2A3344] space-y-8">
            {[
              { icon: "verified_user", title: "DSGVO-konform", desc: "Alle Daten werden ausschließlich auf deutschen Servern verarbeitet und verschlüsselt." },
              { icon: "timer", title: "Reaktionszeit", desc: "Wir garantieren eine Rückmeldung innerhalb von 24 Stunden an Werktagen." },
              { icon: "map", title: "Standort Berlin", desc: "Technologie entwickelt in Deutschland für den lokalen Markt." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#E8631A]">{item.icon}</span>
                <div>
                  <h4 className="text-sm font-medium text-[#F0EDE6]">{item.title}</h4>
                  <p className="text-xs text-[#E0C0B3] mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-48 w-full bg-[#272A31] rounded-xl border-[0.5px] border-[#2A3344] relative overflow-hidden flex items-center justify-center grayscale opacity-50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="absolute inset-0 w-full h-full object-cover mix-blend-overlay" alt="Abstract minimal map representation of Berlin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADKqVNfxLIXbXz144KHaiR7lXctHJZjav42NaRDhzDDHDoEQ3g9mnCMVWblpXaAqkrvUW5jM0kwWKhg_vO0TfRs5hvt7w9OyS9yaCALzN8iSWXepCigzbaOobiQ_1w3gm2s3Ol9TrIwLPcNBfYgdbnM2Cb1h3s3X1wwnSwhjGFrfgDXTFjvLz5B9Vt1cklDiSuQ4whW8LOtX0UsuJRnG-1Ny_QH_rinr9h6YU-Kt8uxgj37l5qANdit4sj6jApz2JsaO60CFZkvvTs"/>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <span className="material-symbols-outlined text-[#E0C0B3] text-4xl">location_on</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#E0C0B3]">Office Berlin • Mitte</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
