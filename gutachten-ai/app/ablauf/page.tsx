import Link from "next/link";

export default function Ablauf() {
  return (
    <main className="pt-32 pb-24">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24 text-center md:text-left">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7">
            <span className="text-[#E8631A] font-medium tracking-widest text-xs uppercase mb-4 block">Implementierung</span>
            <h1 className="text-5xl md:text-7xl font-normal tracking-tight leading-[1.1] mb-8 text-[#F0EDE6]">
              Vom Erstkontakt <br/> zur fertigen <span className="text-[#FFB596] italic">Expertise.</span>
            </h1>
            <p className="text-[#E0C0B3] text-lg max-w-xl leading-relaxed">
              Effizienz beginnt bei der Einführung. Wir haben einen strukturierten Prozess entwickelt, der Ihre bestehenden Workflows respektiert und digital transformiert.
            </p>
          </div>
          <div className="hidden md:block md:col-span-5 border-l-[0.5px] border-[#594238] pl-8 pb-4">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-xs text-[#E0C0B3] font-medium">
                <span>Ready for launch</span>
                <span>100%</span>
              </div>
              <div className="w-full h-1 bg-[#272A31] overflow-hidden">
                <div className="h-full bg-[#EE671F] w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-px bg-[#594238] border-[0.5px] border-[#594238] overflow-hidden rounded-xl">
          {/* Step 1 */}
          <div className="bg-[#101319] p-8 flex flex-col h-full">
            <span className="text-4xl font-light text-[#FFB596] mb-6">01</span>
            <h3 className="text-2xl font-medium text-[#F0EDE6] mb-4">Anfrage</h3>
            <p className="text-[#E0C0B3] mb-8 flex-grow leading-relaxed">
              Wir analysieren Ihren aktuellen Bedarf und prüfen die Kompatibilität Ihrer Datenstruktur mit unserer KI-Engine.
            </p>
            <div className="p-6 bg-[#191C22] border-[0.5px] border-[#594238] rounded-lg">
              <ul className="space-y-3 text-sm text-[#E1E2EB]">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  Erstgespräch &amp; Bedarfsanalyse
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  Daten-Checkup
                </li>
              </ul>
            </div>
          </div>
          {/* Step 2 */}
          <div className="bg-[#101319] p-8 flex flex-col h-full">
            <span className="text-4xl font-light text-[#FFB596] mb-6">02</span>
            <h3 className="text-2xl font-medium text-[#F0EDE6] mb-4">Onboarding</h3>
            <p className="text-[#E0C0B3] mb-8 flex-grow leading-relaxed">
              Integration der Schnittstellen und Training Ihres Teams auf die spezifischen Module Ihres Fachbereichs.
            </p>
            <div className="p-6 bg-[#191C22] border-[0.5px] border-[#594238] rounded-lg">
              <ul className="space-y-3 text-sm text-[#E1E2EB]">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  Setup &amp; Integration
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  Live-Schulung via Web-App
                </li>
              </ul>
            </div>
          </div>
          {/* Step 3 */}
          <div className="bg-[#101319] p-8 flex flex-col h-full">
            <span className="text-4xl font-light text-[#FFB596] mb-6">03</span>
            <h3 className="text-2xl font-medium text-[#F0EDE6] mb-4">Loslegen</h3>
            <p className="text-[#E0C0B3] mb-8 flex-grow leading-relaxed">
              Ab Tag 1 profitieren Sie von automatisierten Gutachten-Entwürfen und digitaler Beweissicherung.
            </p>
            <div className="p-6 bg-[#191C22] border-[0.5px] border-[#594238] rounded-lg">
              <ul className="space-y-3 text-sm text-[#E1E2EB]">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  Voller Funktionsumfang
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                  Support &amp; Optimierung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-medium text-[#F0EDE6] mb-16 text-center">Zeitplan der Einführung</h2>
        <div className="relative">
          <div className="absolute top-6 left-0 w-full h-px bg-[#594238] hidden md:block"></div>
          <div className="grid md:grid-cols-4 gap-12 relative">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#101319] border-[0.5px] border-[#FFB596] rounded-full flex items-center justify-center mb-6 z-10">
                <span className="text-[#FFB596] font-medium">0</span>
              </div>
              <h4 className="font-medium text-[#F0EDE6] mb-2">Tag 0</h4>
              <p className="text-xs text-[#E0C0B3] uppercase tracking-widest">Kick-off Meeting</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#101319] border-[0.5px] border-[#594238] rounded-full flex items-center justify-center mb-6 z-10">
                <span className="text-[#E0C0B3] font-medium">7</span>
              </div>
              <h4 className="font-medium text-[#F0EDE6] mb-2">Woche 1</h4>
              <p className="text-xs text-[#E0C0B3] uppercase tracking-widest">Systemkonfiguration</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#101319] border-[0.5px] border-[#594238] rounded-full flex items-center justify-center mb-6 z-10">
                <span className="text-[#E0C0B3] font-medium">14</span>
              </div>
              <h4 className="font-medium text-[#F0EDE6] mb-2">Woche 2</h4>
              <p className="text-xs text-[#E0C0B3] uppercase tracking-widest">Mitarbeiter-Training</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#EE671F] text-[#4D1900] rounded-full flex items-center justify-center mb-6 z-10">
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h4 className="font-medium text-[#F0EDE6] mb-2">Laufend</h4>
              <p className="text-xs text-[#E0C0B3] uppercase tracking-widest">Skalierung &amp; Updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Tech */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#191C22] p-10 border-[0.5px] border-[#594238] rounded-xl hover:border-[#FFB596] transition-colors">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-[#272A31] rounded flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#FFB596]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#F0EDE6] mb-4">Sicherheit &amp; Datenschutz</h3>
                <p className="text-[#E0C0B3] leading-relaxed">
                  Ihre Daten verlassen niemals deutschen Boden. Unsere Server sind ISO 27001 zertifiziert und vollständig DSGVO-konform. Wir nutzen Ende-zu-Ende Verschlüsselung für alle Gutachten-Entwürfe.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#191C22] p-10 border-[0.5px] border-[#594238] rounded-xl hover:border-[#FFB596] transition-colors">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-[#272A31] rounded flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#FFB596]" style={{ fontVariationSettings: "'FILL' 1" }}>settings_input_component</span>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-[#F0EDE6] mb-4">Technische Integration</h3>
                <p className="text-[#E0C0B3] leading-relaxed">
                  Dank unserer modernen REST-API lässt sich gutachter-ki.de nahtlos in Ihre bestehende Branchensoftware integrieren. Keine doppelten Datenpflegestufen, volle Synchronisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="bg-[#EE671F] p-12 md:p-20 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="w-full h-full object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4zwA0Z8o68rnEWq09-bwcZltyElCQkcTK7vu3I9f3BlOTFeRdKI5_u6lEaM0a-vrQk7oh-WhsjWtyXpviXSWv4eHdXBUumXvYTmsDBY5ipfujFdQr1mct3WbFUGETPeBqIsekG92s96GSK5l996g_Id_oBIae0StlOFDl6F-JOK3ilqMpgH924KVEOijtDpFN88dtC3lvgD4sD1H7V6V6wH3MnBK_hmpYqt_pb95cgIdOTJfCIZ4vc6W1mnPdpHG40hEHcSosV6xe"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-normal text-[#4D1900] mb-6 tracking-tight">Bereit für den digitalen Vorsprung?</h2>
            <p className="text-[#4D1900]/80 text-lg mb-10 leading-relaxed">
              Sichern Sie sich jetzt ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir Ihren Arbeitsalltag revolutionieren können.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/kontakt" className="bg-[#101319] text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-colors">
                Kostenloses Gespräch buchen
              </Link>
              <Link href="/funktionen" className="border-[0.5px] border-[#4D1900] text-[#4D1900] px-8 py-4 rounded-lg font-medium hover:bg-[#4D1900] hover:text-white transition-colors">
                Funktionen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
