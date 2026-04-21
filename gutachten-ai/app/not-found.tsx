import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Seite nicht gefunden — gutachten-ai.de" },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-[#0F1218]">
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-4xl md:text-5xl font-normal tracking-tight leading-[1.1] mb-6 text-[#F0EDE6]">
          404 — Seite nicht gefunden
        </h1>
        <p className="text-lg text-[#E0C0B3] leading-relaxed mb-10">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#C54F0E] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#C54F0E]/90 transition-colors"
          >
            Zur Startseite
          </Link>
          <Link
            href="/kontakt"
            className="border-[0.5px] border-[#2A3344] text-[#F0EDE6] px-8 py-4 rounded-xl font-medium hover:bg-[#272A31] transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </main>
  );
}
