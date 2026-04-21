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
];

function ArchitectureIcon() {
  return (
    <svg width="20" height="20" viewBox="0 -960 960 960" fill="#C54F0E" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="m270-120-10-88 114-314q15 14 32.5 23.5T444-484L334-182l-64 62Zm420 0-64-62-110-302q20-5 37.5-14.5T586-522l114 314-10 88ZM480-520q-50 0-85-35t-35-85q0-39 22.5-69.5T440-752v-88h80v88q35 12 57.5 42.5T600-640q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Z"/>
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();
  return (
    <footer className="bg-[#101319] border-t-[0.5px] border-[#2A3344]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <ArchitectureIcon />
            <span className="text-lg font-medium text-[#F0EDE6]">gutachten-ai.de</span>
          </div>
          <p className="font-normal text-xs leading-relaxed text-[#A0AABB] max-w-xs text-center md:text-left">
            Die Zukunft der professionellen Gutachtenerstellung. Präzise, sicher und effizient.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href}
              className={`font-normal text-xs hover:text-[#C54F0E] transition-colors ${pathname === link.href ? "text-[#F0EDE6]" : "text-[#A0AABB]"}`}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pb-8 text-center">
        <span className="font-normal text-xs text-[#A0AABB]">
          © 2026 gutachten-ai.de • Server in Deutschland • DSGVO-konform • Made in Germany
        </span>
      </div>
    </footer>
  );
}
