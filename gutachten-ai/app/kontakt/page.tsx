"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Kontakt() {
  const [form, setForm] = useState({
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    unternehmen: "",
    betreff: "Produktanfrage",
    nachricht: "",
    datenschutz: false,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.datenschutz) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ vorname: "", nachname: "", email: "", telefon: "", unternehmen: "", betreff: "Produktanfrage", nachricht: "", datenschutz: false });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <Badge className="mb-6">Kontakt</Badge>
          <h1 className="text-5xl md:text-6xl font-normal tracking-tight leading-tight max-w-3xl text-on-surface">
            Präzision beginnt beim ersten Gespräch.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* Form */}
          <div className="md:col-span-7">
            <Card className="p-10">
              {status === "success" ? (
                <div className="text-center py-12">
                  <span className="material-symbols-outlined text-[#E8631A] text-5xl mb-4 block">check_circle</span>
                  <h3 className="text-2xl font-medium text-on-surface mb-2">Anfrage gesendet</h3>
                  <p className="text-on-surface-variant">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>

                  {/* Name row */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vorname">Vorname</Label>
                      <Input id="vorname" name="vorname" value={form.vorname} onChange={handleChange} placeholder="Max" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nachname">Nachname</Label>
                      <Input id="nachname" name="nachname" value={form.nachname} onChange={handleChange} placeholder="Mustermann" />
                    </div>
                  </div>

                  {/* Email + Telefon */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" required>E-Mail</Label>
                      <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="max@beispiel.de" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefon">Telefon</Label>
                      <Input id="telefon" name="telefon" type="tel" value={form.telefon} onChange={handleChange} placeholder="+49 30 ..." />
                    </div>
                  </div>

                  {/* Unternehmen */}
                  <div className="space-y-2">
                    <Label htmlFor="unternehmen">Unternehmen</Label>
                    <Input id="unternehmen" name="unternehmen" value={form.unternehmen} onChange={handleChange} placeholder="Sachverstaendigenbuero GmbH" />
                  </div>

                  {/* Betreff */}
                  <div className="space-y-2">
                    <Label htmlFor="betreff">Betreff</Label>
                    <Select id="betreff" name="betreff" value={form.betreff} onChange={handleChange}>
                      <option>Produktanfrage</option>
                      <option>Demo vereinbaren</option>
                      <option>Technischer Support</option>
                      <option>Partnerschaft</option>
                      <option>Sonstiges</option>
                    </Select>
                  </div>

                  {/* Nachricht */}
                  <div className="space-y-2">
                    <Label htmlFor="nachricht" required>Nachricht</Label>
                    <Textarea id="nachricht" name="nachricht" required rows={5} value={form.nachricht} onChange={handleChange} placeholder="Wie können wir Ihnen helfen?" />
                  </div>

                  {/* Datenschutz */}
                  <div className="flex items-start gap-3">
                    <input
                      name="datenschutz"
                      checked={form.datenschutz}
                      onChange={handleChange}
                      className="mt-1"
                      id="privacy"
                      type="checkbox"
                      required
                    />
                    <label className="text-sm text-on-surface-variant leading-relaxed" htmlFor="privacy">
                      Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
                      <a className="text-[#E8631A] hover:underline" href="/datenschutz">Datenschutzerklärung</a> zu.
                    </label>
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm">Fehler beim Senden. Bitte versuchen Sie es erneut.</p>
                  )}

                  <Button type="submit" size="lg" className="w-full" disabled={status === "loading" || !form.datenschutz}>
                    {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
                    {status !== "loading" && <span className="material-symbols-outlined text-sm">send</span>}
                  </Button>

                </form>
              )}
            </Card>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="h-16 w-16 rounded-full overflow-hidden grayscale contrast-125 border-[0.5px] border-[#E8631A]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover" alt="Support" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6IwzJ71Te-aDcwhFw-Er9ELQqUbyVk2xwaVsc-0PoyB30rhwznDRTA1tgMkIKpPNX7qC6o20hpLtrWDFJo9dJWNbBrKNBGCjh7ebDlLzWupo_RkHeTsX9yF_Q3V2k3kU1DVKzvuAZd2eqbaaL_63nDtUN-zy9etPvJXAYlfzAoyMOawzCP28NILxPbejZxiT5VuzOwbVcG_mP0PHxzG4kH8s22ewjhTfgRxza0C7nFvEjfmlapqs_mo_IuzYcemwWx_iuB0UMytJX"/>
              </div>
              <div>
                <h3 className="text-xl font-medium text-on-surface mb-2">Thomas Müller</h3>
                <p className="text-xs font-medium text-[#E8631A] uppercase tracking-widest mb-3">Leiter Kundenerfolg</p>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Wir verstehen, dass im Gutachterwesen jedes Detail zählt. Unser Team steht Ihnen zur Seite.
                </p>
              </div>
            </div>

            <div className="pt-12 border-t-[0.5px] border-technical-line space-y-8">
              {[
                { icon: "verified_user", title: "DSGVO-konform", desc: "Alle Daten werden ausschließlich auf deutschen Servern verarbeitet." },
                { icon: "timer", title: "Reaktionszeit", desc: "Rückmeldung innerhalb von 24 Stunden an Werktagen." },
                { icon: "map", title: "Standort Berlin", desc: "Technologie entwickelt in Deutschland für den lokalen Markt." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#E8631A]">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-medium text-on-surface">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant mt-1">{item.desc}</p>
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
