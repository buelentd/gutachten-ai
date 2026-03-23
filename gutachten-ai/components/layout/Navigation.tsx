"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/funktionen", label: "Funktionen" },
  { href: "/ablauf", label: "Ablauf" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full z-50 bg-[#101319]/95 dark:bg-[#101319]/95 light:bg-white/95 backdrop-blur-md border-b-[0.5px] border-[#2A3344]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-[52px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="material-symbols-outlined text-[#E8631A] text-xl">architecture</span>
          <span className="text-base font-medium tracking-tighter text-[#F0EDE6]">gutachter-ki.de</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-normal text-[#A0AABB]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 hover:text-[#E8631A] ${
                pathname === link.href ? "text-[#E8631A]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right: Toggle + CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/kontakt"
            className="bg-[#E8631A] text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
          >
            Anfrage stellen
          </Link>
        </div>
      </nav>
    </header>
  );
}
