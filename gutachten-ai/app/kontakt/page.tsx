export default function Kontakt() {
  return (
    <main className="pt-32 pb-24">
      <section className="max-w-3xl mx-auto px-6">
        <span className="text-[#E8631A] font-medium tracking-widest text-xs uppercase mb-4 block">Kontakt</span>
        <h1 className="text-5xl font-normal tracking-tight leading-tight mb-6 text-[#F0EDE6]">
          Sprechen Sie mit uns.
        </h1>
        <p className="text-[#E0C0B3] text-lg mb-12 leading-relaxed">
          Wir melden uns innerhalb von 24 Stunden bei Ihnen. Schildern Sie kurz Ihr Anliegen – wir finden die passende Lösung.
        </p>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-[#E0C0B3] uppercase tracking-wider mb-2">Vorname</label>
              <input
                type="text"
                className="w-full bg-[#191C22] border-[0.5px] border-[#2A3344] rounded-lg px-4 py-3 text-[#F0EDE6] text-sm focus:outline-none focus:border-[#E8631A] transition-colors"
                placeholder="Max"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#E0C0B3] uppercase tracking-wider mb-2">Nachname</label>
              <input
                type="text"
                className="w-full bg-[#191C22] border-[0.5px] border-[#2A3344] rounded-lg px-4 py-3 text-[#F0EDE6] text-sm focus:outline-none focus:border-[#E8631A] transition-colors"
                placeholder="Mustermann"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[#E0C0B3] uppercase tracking-wider mb-2">E-Mail</label>
            <input
              type="email"
              className="w-full bg-[#191C22] border-[0.5px] border-[#2A3344] rounded-lg px-4 py-3 text-[#F0EDE6] text-sm focus:outline-none focus:border-[#E8631A] transition-colors"
              placeholder="max@gutachter.de"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-[#E0C0B3] uppercase tracking-wider mb-2">Nachricht</label>
            <textarea
              rows={6}
              className="w-full bg-[#191C22] border-[0.5px] border-[#2A3344] rounded-lg px-4 py-3 text-[#F0EDE6] text-sm focus:outline-none focus:border-[#E8631A] transition-colors resize-none"
              placeholder="Wie können wir Ihnen helfen?"
            />
          </div>
          <button className="w-full bg-[#E8631A] text-white py-4 rounded-xl font-medium hover:opacity-90 transition-all">
            Nachricht senden
          </button>
          <p className="text-center text-xs text-[#E0C0B3]/60">
            Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
          </p>
        </div>
      </section>
    </main>
  );
}
