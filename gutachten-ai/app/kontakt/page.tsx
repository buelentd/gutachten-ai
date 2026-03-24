"use client";

import { useState } from "react";

const defaults = {
  heroLabel: "Kontakt",
  heroTitle: "Präzision beginnt beim ersten Gespräch.",
  contactName: "Thomas Müller",
  contactRole: "Leiter Kundenerfolg",
  contactQuote: "Wir verstehen, dass im Gutachterwesen jedes Detail zählt. Unser Team steht Ihnen zur Seite.",
  trustItems: [
    { icon: "verified_user", title: "DSGVO-konform", description: "Alle Daten werden ausschließlich auf deutschen Servern verarbeitet." },
    { icon: "timer", title: "Reaktionszeit", description: "Rückmeldung innerhalb von 24 Stunden an Werktagen." },
    { icon: "map", title: "Standort Berlin", description: "Technologie entwickelt in Deutschland für den lokalen Markt." },
  ],
};

export default function Kontakt() {
  const d = defaults;
  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", betreff: "Produktanfrage", nachricht: "", datenschutz: false });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.datenschutz) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ vorname: "", nachname: "", email: "", betreff: "Produktanfrage", nachricht: "", datenschutz: false });
    } catch { setStatus("error"); }
  };

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-12 mb-12">
          <span className="text-[#E8631A] text-sm font-medium tracking-widest uppercase mb-4 block">{d.heroLabel}</span>
          <h1 className="text-5xl md:text-6xl font-normal tracking-tight leading-tight max-w-3xl text-on-surface">{d.heroTitle}</h1>
        </div>

        <div className="md:col-span-7">
          <div className="bg-surface-container-low p-10 rounded-xl border-[0.5px] border-technical-line">
            {status === "success" ? (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-[#E8631A] text-5xl mb-4 block">check_circle</span>
                <h3 className="text-2xl font-medium text-on-surface mb-2">Anfrage gesendet</h3>
                <p className="text-on-surface-variant">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Vorname</label>
                    <input name="vorname" value={form.vorname} onChange={handleChange} className="w-full bg-surface border-[0.5px] border-technical-line rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-[#E8631A] transition-colors" placeholder="Max" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Nachname</label>
                    <input name="nachname" value={form.nachname} onChange={handleChange} className="w-full bg-surface border-[0.5px] border-technical-line rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-[#E8631A] transition-colors" placeholder="Mustermann" type="text"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">E-Mail *</label>
                  <input name="email" value={form.email} onChange={handleChange} required className="w-full bg-surface border-[0.5px] border-technical-line rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-[#E8631A] transition-colors" placeholder="max@beispiel.de" type="email"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Betreff</label>
                  <select name="betreff" value={form.betreff} onChange={handleChange} className="w-full bg-surface border-[0.5px] border-technical-line rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-[#E8631A] transition-colors">
                    <option>Produktanfrage</option>
                    <option>Technischer Support</option>
                    <option>Partnerschaft</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">Nachricht *</label>
                  <textarea name="nachricht" value={form.nachricht} onChange={handleChange} required rows={5} className="w-full bg-surface border-[0.5px] border-technical-line rounded-lg px-4 py-3 text-on-surface focus:outline-none focus:border-[#E8631A] transition-colors resize-none" placeholder="Wie können wir Ihnen helfen?"/>
                </div>
                <div className="flex items-start gap-3">
                  <input name="datenschutz" checked={form.datenschutz} onChange={handleChange} className="mt-1" id="privacy" type="checkbox" required/>
                  <label className="text-sm text-on-surface-variant leading-relaxed" htmlFor="privacy">
                    Ich stimme der Verarbeitung meiner Daten gemäß der <a className="text-[#E8631A] hover:underline" href="/datenschutz">Datenschutzerklärung</a> zu.
                  </label>
                </div>
                {status === "error" && <p className="text-red-400 text-sm">Fehler beim Senden. Bitte versuchen Sie es erneut.</p>}
                <button type="submit" disabled={status === "loading" || !form.datenschutz}
                  className="w-full bg-[#E8631A] text-white py-4 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50">
                  {status === "loading" ? "Wird gesendet..." : <>Anfrage senden <span className="material-symbols-outlined text-sm">send</span></>}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="md:col-span-5 space-y-12">
          <div className="space-y-6">
            <div className="h-16 w-16 rounded-full overflow-hidden grayscale contrast-125 border-[0.5px] border-[#E8631A]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-full h-full object-cover" alt="Support" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IwzJ71Te-aDcwhFw-Er9ELQqUbyVk2xwaVsc-0PoyB30rhwznDRTA1tgMkIKpPNX7qC6o20hpLtrWDFJo9dJWNbBrKNBGCjh7ebDlLzWupo_RkHeTsX9yF_Q3V2k3kU1DVKzvuAZd2eqbaaL_63nDtUN-zy9etPvJXAYlfzAoyMOawzCP28NILxPbejZxiT5VuzOwbVcG_mP0PHxzG4kH8s22ewjhTfgRxza0C7nFvEjfmlapqs_mo_IuzYcemwWx_iuB0UMytJX"/>
            </div>
            <div>
              <h3 className="text-xl font-medium text-on-surface mb-2">{d.contactName}</h3>
              <p className="text-xs font-medium text-[#E8631A] uppercase tracking-widest mb-3">{d.contactRole}</p>
              <p className="text-on-surface-variant leading-relaxed text-sm">{d.contactQuote}</p>
            </div>
          </div>
          <div className="pt-12 border-t-[0.5px] border-technical-line space-y-8">
            {d.trustItems?.map((item: { icon: string; title: string; description: string }, i: number) => (
              <div key={i} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#E8631A]">{item.icon}</span>
                <div>
                  <h4 className="text-sm font-medium text-on-surface">{item.title}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
