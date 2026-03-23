"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/funktionen", label: "Funktionen" },
  { href: "/ablauf", label: "Ablauf" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
];

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-[#101319] border-t-[0.5px] border-[#2A3344]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#E8631A]">architecture</span>
            <span className="text-lg font-medium text-[#F0EDE6]">gutachter-ki.de</span>
          </div>
          <p className="font-normal text-xs leading-relaxed text-[#A0AABB] max-w-xs text-center md:text-left">
            Die Zukunft der professionellen Gutachtenerstellung. Präzise, sicher und effizient.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-normal text-xs hover:text-[#E8631A] transition-colors ${
                pathname === link.href ? "text-[#F0EDE6]" : "text-[#A0AABB]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pb-8 text-center">
        <span className="font-normal text-xs leading-relaxed text-[#594238]">
          © 2026 gutachter-ki.de • Server in Deutschland • DSGVO-konform • Made in Germany
        </span>
      </div>
    </footer>
  );
}
