import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — gutachten-ai.de",
  description: "Datenschutzerklärung gemäß DSGVO für gutachten-ai.de",
  alternates: { canonical: "https://gutachten-ai.de/datenschutz" },
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-normal tracking-tight text-on-surface mb-12">Datenschutzerklärung</h1>

        <div className="space-y-10 text-on-surface">

          <section>
            <h2 className="text-lg font-medium text-on-surface mb-4">1. Verantwortlicher</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Verantwortlicher im Sinne der DSGVO ist:<br /><br />
              [Firmenname GmbH]<br />
              [Straße und Hausnummer]<br />
              [PLZ] [Ort]<br />
              E-Mail: [kontakt@domain.de]
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-on-surface mb-4">2. Hosting</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Diese Website wird gehostet bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, USA. Vercel ist zertifiziert nach dem EU-US Data Privacy Framework. Bei jedem Aufruf unserer Website werden automatisch Verbindungsdaten (IP-Adresse, Datum, Uhrzeit, aufgerufene Seite) verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb der Website).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-on-surface mb-4">3. Kontaktformular</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Wenn Sie uns über das Kontaktformular eine Nachricht übermitteln, werden Ihre Angaben (Name, E-Mail-Adresse, Telefonnummer, Unternehmen, Nachricht) zur Bearbeitung Ihrer Anfrage verarbeitet. Die Daten werden über den Dienst Brevo (Sendinblue SAS, 7 rue de Madrid, 75008 Paris, Frankreich) übermittelt und gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-on-surface mb-4">4. Content Management System</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Für die Verwaltung von Website-Inhalten nutzen wir Sanity (Sanity Inc., 548 Market St PMB 49607, San Francisco, CA 94104, USA). Sanity ist zertifiziert nach dem EU-US Data Privacy Framework. Die Inhalte der Website (Texte, Bilder) werden über die Sanity API abgerufen. Dabei werden keine personenbezogenen Daten der Website-Besucher an Sanity übermittelt.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-on-surface mb-4">5. Cookies</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Diese Website verwendet ausschließlich technisch notwendige Cookies. Ein Cookie wird gesetzt, um Ihre Einstellung zum Dark/Light Mode zu speichern (localStorage). Dieses Cookie ist für den Betrieb der Website erforderlich und enthält keine personenbezogenen Daten. Es ist kein Consent erforderlich (§ 25 Abs. 2 TTDSG).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-on-surface mb-4">6. Ihre Rechte</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
            </p>
            <ul className="text-on-surface-variant text-sm mt-3 space-y-2 list-none">
              {[
                "Recht auf Auskunft (Art. 15 DSGVO)",
                "Recht auf Berichtigung (Art. 16 DSGVO)",
                "Recht auf Löschung (Art. 17 DSGVO)",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
              ].map((right, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#E8631A] mt-0.5">—</span>
                  {right}
                </li>
              ))}
            </ul>
            <p className="text-on-surface-variant leading-relaxed text-sm mt-4">
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde für Berlin ist der Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstr. 219, 10969 Berlin.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-medium text-on-surface mb-4">7. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p className="text-on-surface-variant leading-relaxed text-sm">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
