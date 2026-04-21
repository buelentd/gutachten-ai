"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

function isValidPhone(value: string): boolean {
  const cleaned = value.replace(/[\s\-().]/g, "");
  return /^(\+|00)?[1-9]\d{6,14}$/.test(cleaned);
}

export function KontaktForm() {
  const [form, setForm] = useState({
    vorname: "", nachname: "", email: "", telefon: "",
    unternehmen: "", betreff: "Produktanfrage", nachricht: "", datenschutz: false,
  });
  const [phoneError, setPhoneError] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
    if (name === "telefon") {
      setPhoneError(!value ? "Bitte geben Sie Ihre Telefonnummer ein." : !isValidPhone(value) ? "Bitte geben Sie eine gültige Telefonnummer ein (z.B. +49 30 12345678)." : "");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.datenschutz) return;
    if (!form.telefon || !isValidPhone(form.telefon)) {
      setPhoneError("Bitte geben Sie eine gültige Telefonnummer ein (z.B. +49 30 12345678).");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ vorname: "", nachname: "", email: "", telefon: "", unternehmen: "", betreff: "Produktanfrage", nachricht: "", datenschutz: false });
    } catch { setStatus("error"); }
  };

  return (
    <Card className="p-10">
      {status === "success" ? (
        <div className="text-center py-12">
          <span className="material-symbols-outlined text-[#C54F0E] text-5xl mb-4 block">check_circle</span>
          <h3 className="text-2xl font-medium text-on-surface mb-2">Anfrage gesendet</h3>
          <p className="text-on-surface-variant">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
        </div>
      ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
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
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail *</Label>
              <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="max@beispiel.de" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefon">Telefon *</Label>
              <Input id="telefon" name="telefon" type="tel" required value={form.telefon} onChange={handleChange} placeholder="+49 30 12345678" className={phoneError ? "border-red-400 focus:border-red-400" : ""} />
              {phoneError && <p className="text-red-400 text-xs mt-1">{phoneError}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="unternehmen">Unternehmen</Label>
            <Input id="unternehmen" name="unternehmen" value={form.unternehmen} onChange={handleChange} placeholder="Sachverständigenbüro GmbH" />
          </div>
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
          <div className="space-y-2">
            <Label htmlFor="nachricht">Nachricht *</Label>
            <Textarea id="nachricht" name="nachricht" required rows={5} value={form.nachricht} onChange={handleChange} placeholder="Wie können wir Ihnen helfen?" />
          </div>
          <div className="flex items-start gap-3">
            <input name="datenschutz" checked={form.datenschutz} onChange={handleChange} className="mt-1" id="privacy" type="checkbox" required />
            <label className="text-sm text-on-surface-variant leading-relaxed" htmlFor="privacy">
              Ich stimme der Verarbeitung meiner Daten gemäß der{" "}
              <a className="text-[#C54F0E] hover:underline" href="/datenschutz">Datenschutzerklärung</a> zu.
            </label>
          </div>
          <p className="text-xs text-[#8A9BB0]">* Pflichtfelder</p>
          {status === "error" && <p className="text-red-400 text-sm">Fehler beim Senden. Bitte versuchen Sie es erneut.</p>}
          <Button type="submit" size="lg" className="w-full" disabled={status === "loading" || !form.datenschutz}>
            {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
            {status !== "loading" && <span className="material-symbols-outlined text-sm">send</span>}
          </Button>
        </form>
      )}
    </Card>
  );
}
