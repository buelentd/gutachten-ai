import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B0E14] py-16 px-6" style={{ borderTop: "0.5px solid #2A3344" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-primary">architecture</span>
              <span className="text-lg font-medium tracking-tighter text-[#F0EDE6]">gutachter-ki.de</span>
            </div>
            <p className="text-[#E0C0B3] text-body-sm leading-relaxed max-w-xs">
              KI-gestützte Gutachtenerstellung für Bausachverständige. Weniger Büroarbeit. Mehr Zeit für das Wesentliche.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-label-sm font-medium text-[#F0EDE6] uppercase tracking-wider mb-4">Produkt</p>
            <ul className="space-y-3">
              {["Funktionen", "Ablauf", "Blog"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-[#E0C0B3] text-body-sm hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-label-sm font-medium text-[#F0EDE6] uppercase tracking-wider mb-4">Unternehmen</p>
            <ul className="space-y-3">
              {[{ label: "Kontakt", href: "/kontakt" }, { label: "Datenschutz", href: "/datenschutz" }, { label: "Impressum", href: "/impressum" }].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#E0C0B3] text-body-sm hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8" style={{ borderTop: "0.5px solid #2A3344" }}>
          <p className="text-[#A0AABB] text-label-sm">© {new Date().getFullYear()} gutachter-ki.de. Alle Rechte vorbehalten.</p>
          <p className="text-[#A0AABB] text-label-sm mt-2 md:mt-0">Made in Berlin 🇩🇪</p>
        </div>
      </div>
    </footer>
  );
}
