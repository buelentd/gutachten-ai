import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JVEG Honorar berechnen: So rechnen Sachverständige korrekt ab",
  description: "Wie Sachverständige ihr Honorar nach JVEG korrekt berechnen — Stundensätze, Nebenkosten, Fahrtkosten und häufige Fehler bei der Abrechnung.",
  alternates: { canonical: "https://gutachten-ai.de/blog/jveg-honorar-berechnen" },
  openGraph: { url: "https://gutachten-ai.de/blog/jveg-honorar-berechnen" },
};

export default function BlogJveg() {
  return (
    <main className="pt-32 pb-24">
      <article className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#E8631A] text-xs font-medium tracking-widest uppercase">Abrechnung</span>
            <span className="text-on-surface-variant text-xs">•</span>
            <time className="text-on-surface-variant text-xs">25. März 2026</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-tight text-on-surface mb-6">
            JVEG Honorar berechnen: So rechnen Sachverständige korrekt ab
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed">
            Das Justizvergütungs- und -entschädigungsgesetz (JVEG) regelt die Vergütung gerichtlich bestellter Sachverständiger in Deutschland. Fehler bei der Abrechnung kosten bares Geld — oder führen zu Kürzungen durch das Gericht. Ein vollständiger Leitfaden.
          </p>
        </div>

        <div className="space-y-8 text-on-surface">

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Was ist das JVEG?</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Das Justizvergütungs- und -entschädigungsgesetz (JVEG) gilt seit 2004 und regelt die Entschädigung von Zeugen, Sachverständigen, Dolmetschern und Dritten, die im Auftrag von Gerichten, Staatsanwaltschaften und anderen Justizbehörden tätig werden. Für Sachverständige ist vor allem §9 JVEG maßgeblich, der die Vergütungshöhe nach Honorargruppen festlegt.
          </p>
          <p className="text-on-surface-variant leading-relaxed">
            Wichtig: Das JVEG gilt ausschließlich für gerichtlich beauftragte Gutachten. Für privatrechtliche Gutachten — also Aufträge von Versicherungen, Privatpersonen oder Unternehmen — gelten die frei verhandelten Honorare. Viele Sachverständige orientieren sich dabei ebenfalls am JVEG als Kalkulationsbasis.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">JVEG Honorargruppen: Welche Gruppe gilt für Bausachverständige?</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Das JVEG unterscheidet 13 Honorargruppen (H1 bis H13), die nach dem erforderlichen Fachwissen und der Schwierigkeit der Gutachtenaufgabe gestaffelt sind. Für Bausachverständige sind typischerweise folgende Gruppen relevant:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-sm border-[0.5px] border-technical-line rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface-container">
                  <th className="text-left px-4 py-3 text-on-surface font-medium border-b-[0.5px] border-technical-line">Honorargruppe</th>
                  <th className="text-left px-4 py-3 text-on-surface font-medium border-b-[0.5px] border-technical-line">Stundensatz (2026)</th>
                  <th className="text-left px-4 py-3 text-on-surface font-medium border-b-[0.5px] border-technical-line">Typische Aufgaben</th>
                </tr>
              </thead>
              <tbody className="text-on-surface-variant">
                {[
                  { gruppe: "H8", satz: "95 €/Std.", aufgaben: "Allgemeine Bausachverständige, Baumängel" },
                  { gruppe: "H9", satz: "105 €/Std.", aufgaben: "Spezielle Bauschadensfragen, Statik einfach" },
                  { gruppe: "H10", satz: "115 €/Std.", aufgaben: "Komplexe Baukonstruktionen, Sonderbau" },
                  { gruppe: "H12", satz: "135 €/Std.", aufgaben: "Hochspezialisierte Fachfragen, Forschungsnähe" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-surface" : "bg-surface-container-low"}>
                    <td className="px-4 py-3 font-medium text-on-surface">{row.gruppe}</td>
                    <td className="px-4 py-3 text-[#E8631A] font-medium">{row.satz}</td>
                    <td className="px-4 py-3">{row.aufgaben}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-on-surface-variant leading-relaxed text-sm italic">
            Hinweis: Die genauen Stundensätze wurden zuletzt durch das Kostenrechtsänderungsgesetz 2021 angepasst. Sachverständige sollten stets die aktuelle Fassung des §9 JVEG prüfen oder beim zuständigen Gericht nachfragen.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Was kann zusätzlich abgerechnet werden?</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Neben dem Zeithonorar können Sachverständige nach JVEG verschiedene Nebenkosten geltend machen. Fahrtkosten werden pauschal nach §7 JVEG erstattet: 0,42 Euro pro gefahrenem Kilometer bei Nutzung des eigenen PKW. Alternativ können öffentliche Verkehrsmittel der 1. Klasse abgerechnet werden. Schreibauslagen für die Erstellung des Gutachtens werden pauschal nach §12 JVEG erstattet: 0,90 Euro pro angefangener 1.000 Anschläge für das Gutachten selbst, 0,30 Euro für weitere Kopien. Porto- und Telekommunikationskosten können nach §12 Abs. 1 JVEG pauschal mit 20 Prozent der Schreibauslagen angesetzt werden, maximal jedoch 15 Euro. Übernachtungskosten für mehrtägige Einsätze werden bis zu 20 Euro pro Nacht erstattet, sofern keine günstigere Unterkunft zumutbar war.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Häufige Fehler bei der JVEG-Abrechnung</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Falsche Honorargruppe: Der häufigste Fehler ist die Zuordnung zu einer zu niedrigen Honorargruppe. Sachverständige sollten sich beim beauftragenden Gericht vorab bestätigen lassen, welche Gruppe für den konkreten Auftrag gilt. Fehlende Zeitaufzeichnung: Gerichte verlangen eine nachvollziehbare Aufschlüsselung des Zeitaufwands. Pauschalangaben wie "Gutachtenerstellung: 8 Stunden" werden häufig als nicht ausreichend belegt angesehen und gekürzt. Veraltete Fahrkostenpauschalen: Der Kilometersatz wurde mehrfach angepasst — immer die aktuelle Fassung des §7 JVEG prüfen. Nicht abgerechnete Nebenkosten: Viele Sachverständige vergessen Schreibauslagen und Telekommunikationspauschalen — Geld, das ihnen rechtlich zusteht.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">JVEG-Abrechnung automatisiert erstellen</h2>
          <p className="text-on-surface-variant leading-relaxed">
            KI-gestützte Gutachtensoftware wie gutachten-ai.de unterstützt Sachverständige auch bei der Abrechnung. Auf Basis der erfassten Zeitaufzeichnungen, Fahrten und Auslagen erstellt das System automatisch eine JVEG-konforme Kostenrechnung — mit korrekter Honorargruppe, aktuellem Kilometersatz und allen abrechenbaren Nebenkosten. Was früher 30-60 Minuten Nacharbeit bedeutete, dauert damit wenige Minuten.
          </p>

          <h2 className="text-2xl font-medium text-on-surface mt-12 mb-4">Fazit: JVEG-Kenntnisse sind bares Geld</h2>
          <p className="text-on-surface-variant leading-relaxed">
            Die korrekte JVEG-Abrechnung ist keine Nebensache — sie entscheidet darüber, ob Sachverständige für ihre Arbeit angemessen entschädigt werden. Wer die relevanten Paragraphen kennt, alle Nebenkosten konsequent abrechnet und Zeitaufwand sauber dokumentiert, schöpft seinen rechtlichen Vergütungsanspruch vollständig aus. Digitale Tools helfen dabei, diesen Prozess zu standardisieren und Fehler zu vermeiden.
          </p>

          <div className="mt-16 p-8 rounded-xl border-[0.5px] border-[#E8631A]/40 bg-[#E8631A]/5">
            <h3 className="text-xl font-medium text-on-surface mb-3">JVEG-Abrechnung automatisieren?</h3>
            <p className="text-on-surface-variant mb-6">gutachten-ai.de erstellt JVEG-konforme Kostenrechnungen automatisch — aus Ihren Zeitaufzeichnungen und Fahrten.</p>
            <Link href="/kontakt" className="inline-block bg-[#E8631A] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all">
              Kostenlos anfragen
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-[0.5px] border-technical-line">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#E8631A] hover:gap-4 transition-all">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Zurück zum Blog</span>
          </Link>
        </div>
      </article>
    </main>
  );
}
