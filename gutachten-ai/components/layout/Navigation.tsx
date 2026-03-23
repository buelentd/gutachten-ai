"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Startseite" },
  { href: "/funktionen", label: "Funktionen" },
  { href: "/ablauf", label: "Ablauf" },
  { href: "/blog", label: "Blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navigation() {
  const pathname = usePathname();

  // Don't show marketing nav in studio
  if (pathname?.startsWith("/studio")) return null;

  return (
    <header className="fixed top-0 w-full z-50 bg-[#101319]/90 backdrop-blur-md" style={{ borderBottom: "0.5px solid #2A3344" }}>
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
          <span className="text-xl font-medium tracking-tighter text-[#F0EDE6]">gutachter-ki.de</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-tight transition-colors duration-200 ${
                pathname === link.href ? "text-primary" : "text-[#E0C0B3] hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link href="/kontakt" className="hidden md:inline-flex btn-primary text-sm">
            Demo anfragen
          </Link>
          {/* Mobile menu placeholder */}
          <button className="md:hidden text-on-surface p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
