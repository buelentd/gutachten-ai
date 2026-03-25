import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";

export const metadata: Metadata = {
  title: "Impressum — gutachten-ai.de",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 TMG.",
  alternates: { canonical: "https://gutachten-ai.de/impressum" },
  robots: { index: false },
};

async function getImpressum() {
  try {
    return await client.fetch(groq`*[_type == "impressum"][0]`);
  } catch { return null; }
}

const defaults = {
  firmenname: "[Firmenname GmbH]",
  strasse: "[Straße und Hausnummer]",
  plz: "[PLZ]",
  ort: "[Ort]",
  land: "Deutschland",
  registergericht: "[Amtsgericht Stadt]",
  registernummer: "[HRB XXXXX]",
  geschaeftsfuehrer: "[Geschäftsführer]",
  telefon: "[+49 XXX XXXXXXXX]",
  email: "[kontakt@domain.de]",
  verantwortlich: "[Name der verantwortlichen Person]",
};

export default async function Impressum() {
  const cms = await getImpressum();
  const d = { ...defaults, ...cms };

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-normal tracking-tight text-on-surface mb-12">Impressum</h1>

        <div className="space-y-10 text-on-surface">

          <section>
            <h2 className="text-sm font-medium text-on-surface-variant uppercase tracking-widest mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-on-surface leading-relaxed">
              {d.firmenname}<br />
              {d.strasse}<br />
              {d.plz} {d.ort}<br />
              {d.land}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium text-on-surface-variant uppercase tracking-widest mb-4">Handelsregister</h2>
            <p className="text-on-surface leading-relaxed">
              Registergericht: {d.registergericht}<br />
              Registernummer: {d.registernummer}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium text-on-surface-variant uppercase tracking-widest mb-4">Vertreten durch</h2>
            <p className="text-on-surface">{d.geschaeftsfuehrer}</p>
          </section>

          <section>
            <h2 className="text-sm font-medium text-on-surface-variant uppercase tracking-widest mb-4">Kontakt</h2>
            <p className="text-on-surface leading-relaxed">
              Telefon: {d.telefon}<br />
              E-Mail: {d.email}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium text-on-surface-variant uppercase tracking-widest mb-4">Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV</h2>
            <p className="text-on-surface">{d.verantwortlich}</p>
          </section>

          <section>
            <h2 className="text-sm font-medium text-on-surface-variant uppercase tracking-widest mb-4">EU-Streitschlichtung</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" className="text-[#E8631A] hover:underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-medium text-on-surface-variant uppercase tracking-widest mb-4">Verbraucherstreitbeilegung</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
