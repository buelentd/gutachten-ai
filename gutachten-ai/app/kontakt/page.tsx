import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { KontaktForm } from "@/components/KontaktForm";
import { Icon } from "@/components/Icon";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Kontakt — Gutachten Assistent anfragen",
  description: "Nehmen Sie Kontakt mit uns auf. Wir melden uns innerhalb von 24 Stunden.",
  alternates: { canonical: "https://gutachten-ai.de/kontakt" },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://gutachten-ai.de/kontakt",
    siteName: "gutachten-ai.de",
    title: "Kontakt — Gutachten Assistent anfragen",
    description: "Nehmen Sie Kontakt mit uns auf. Wir melden uns innerhalb von 24 Stunden.",
  },
};

async function getKontaktPage() {
  return await client.fetch(groq`*[_type == "kontaktPage"][0]{
    heroTitle, heroSubtext, contactName, contactRole, contactText,
    trustItems[] { icon, title, description },
    zielgruppenLabel, zielgruppenTitle, zielgruppenSubtext,
    zielgruppen[] { icon, title, description }
  }`);
}

export default async function Kontakt() {
  const d = await getKontaktPage();

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Breadcrumb items={[{ label: "Startseite", href: "/" }, { label: "Kontakt", href: "/kontakt" }]} />
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-normal tracking-tight leading-tight max-w-3xl text-on-surface">
            {d?.heroTitle || "Präzision beginnt beim ersten Gespräch."}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-7">
            <KontaktForm />
          </div>
          <div className="md:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="h-16 w-16 rounded-full overflow-hidden grayscale contrast-125 border-[0.5px] border-primary">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover" alt={`${d?.contactName || "Thomas Müller"}, ${d?.contactRole || "Leiter Kundenerfolg"}`} src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IwzJ71Te-aDcwhFw-Er9ELQqUbyVk2xwaVsc-0PoyB30rhwznDRTA1tgMkIKpPNX7qC6o20hpLtrWDFJo9dJWNbBrKNBGCjh7ebDlLzWupo_RkHeTsX9yF_Q3V2k3kU1DVKzvuAZd2eqbaaL_63nDtUN-zy9etPvJXAYlfzAoyMOawzCP28NILxPbejZxiT5VuzOwbVcG_mP0PHxzG4kH8s22ewjhTfgRxza0C7nFvEjfmlapqs_mo_IuzYcemwWx_iuB0UMytJX"/>
              </div>
              <div>
                <h2 className="text-xl font-medium text-on-surface mb-2">{d?.contactName || "Thomas Müller"}</h2>
                <p className="text-xs font-medium text-primary uppercase tracking-widest mb-3">{d?.contactRole || "Leiter Kundenerfolg"}</p>
                <p className="text-on-surface-variant leading-relaxed text-sm">{d?.contactText || "Wir verstehen, dass im Gutachterwesen jedes Detail zählt. Unser Team steht Ihnen zur Seite."}</p>
              </div>
            </div>
            <div className="pt-12 border-t-[0.5px] border-technical-line space-y-8">
              {(d?.trustItems || [
                { icon: "verified_user", title: "DSGVO-konform", description: "Alle Daten werden ausschließlich auf deutschen Servern verarbeitet." },
                { icon: "timer", title: "Reaktionszeit", description: "Rückmeldung innerhalb von 24 Stunden an Werktagen." },
                { icon: "map", title: "Standort Berlin", description: "Technologie entwickelt in Deutschland für den lokalen Markt." },
              ]).map((item: { icon: string; title: string; description: string }, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  <Icon name={item.icon} size={24} className="icon-orange" />
                  <div>
                    <h3 className="text-sm font-medium text-on-surface">{item.title}</h3>
                    <p className="text-xs text-on-surface-variant mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-32 pt-16 border-t-[0.5px] border-technical-line">
        <p className="text-xs uppercase tracking-widest text-primary mb-4">{d?.zielgruppenLabel || "Für professionelle Bausachverständige"}</p>
        <h2 className="text-3xl md:text-4xl font-normal text-on-surface mb-12">{d?.zielgruppenTitle || "Anfragen — wir melden uns innerhalb von 24 Stunden"}</h2>
        <p className="text-on-surface-variant mb-12 max-w-2xl">{d?.zielgruppenSubtext || "Gutachten Assistent ist spezialisiert auf die Anforderungen professioneller Bausachverständiger."}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(d?.zielgruppen || [
            { icon: "verified", title: "Öffentlich bestellte und vereidigte Bausachverständige", description: "Als ö.b.u.v. Bausachverständiger tragen Sie gegenüber Gericht und Parteien volle Verantwortung für Methodik und Quellenangabe. Der Gutachten Assistent dokumentiert jeden Arbeitsschritt nachvollziehbar — normkonform, revisionssicher, gerichtstauglich." },
            { icon: "gavel", title: "Baugutachter im selbständigen Beweisverfahren", description: "Beweisbeschlüsse nach § 485 ZPO haben ein festes Schema. Die Software strukturiert Ihre Beweisfragen, führt Sie durch jeden Feststellungspunkt und bereitet den Gutachten-Export für die Gerichtseinreichung vor." },
            { icon: "home_repair_service", title: "Spezialgutachter für Bauschäden und Baumängel", description: "Schimmel, Feuchte, Wärmebrücken, Risse, Bauausführungsmängel — jede Schadensart erfordert spezifische Normen. Der Assistent stellt relevante DIN- und WTA-Merkblätter kontextbezogen bereit, ohne manuelle Recherche." },
            { icon: "groups", title: "Sachverständigenbüros im Bauwesen", description: "Mehrere Bausachverständige, gemeinsame Entwürfe, getrennte Aufträge. Strikter Mehrbenutzer-Zugang mit Auftragsisolierung — kein geteiltes Laufwerk, keine Versionskonflikte." },
          ]).map((item: { icon: string; title: string; description: string }, i: number) => (
            <div key={i} className="bg-surface-container-low rounded-xl p-8 border-[0.5px] border-outline-variant">
              <Icon name={item.icon} size={32} className="icon-orange mb-4 block" />
              <h3 className="text-lg font-medium text-on-surface mb-3">{item.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
