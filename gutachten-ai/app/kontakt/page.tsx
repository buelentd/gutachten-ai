import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import { KontaktForm } from "@/components/KontaktForm";
import { Icon } from "@/components/Icon";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Kontakt — gutachten-ai.de",
  description: "Nehmen Sie Kontakt mit uns auf. Wir melden uns innerhalb von 24 Stunden.",
  alternates: { canonical: "https://gutachten-ai.de/kontakt" },
};

async function getKontaktPage() {
  return await client.fetch(groq`*[_type == "kontaktPage"][0]{
    heroTitle, heroSubtext, contactName, contactRole, contactText,
    trustItems[] { icon, title, description }
  }`);
}

export default async function Kontakt() {
  const d = await getKontaktPage();

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
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
                <img className="w-full h-full object-cover" alt="Support" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IwzJ71Te-aDcwhFw-Er9ELQqUbyVk2xwaVsc-0PoyB30rhwznDRTA1tgMkIKpPNX7qC6o20hpLtrWDFJo9dJWNbBrKNBGCjh7ebDlLzWupo_RkHeTsX9yF_Q3V2k3kU1DVKzvuAZd2eqbaaL_63nDtUN-zy9etPvJXAYlfzAoyMOawzCP28NILxPbejZxiT5VuzOwbVcG_mP0PHxzG4kH8s22ewjhTfgRxza0C7nFvEjfmlapqs_mo_IuzYcemwWx_iuB0UMytJX"/>
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
    </main>
  );
}
