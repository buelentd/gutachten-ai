"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 border-b-[0.5px] border-[#2A3344] transition-all duration-300 ${
          scrolled ? "bg-[#101319]/95 backdrop-blur-md" : "bg-[#101319]"
        }`}
      >
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#E8631A]">architecture</span>
            <span className="text-xl font-medium tracking-tighter text-[#F0EDE6]">
              gutachten-ai.de
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-tight">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`transition-colors duration-200 hover:text-[#E8631A] ${
                  pathname === link.href ? "text-[#E8631A]" : "text-[#E0C0B3]"
                }`}>
                {link.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/kontakt"
              className="bg-[#E8631A] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all">
              Anfrage stellen
            </Link>
          </div>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 text-[#F0EDE6]"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menü öffnen"
          >
            <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </header>

      <div className={`fixed inset-0 z-40 bg-[#101319]/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}
            className={`text-2xl font-medium tracking-tight transition-colors duration-200 hover:text-[#E8631A] ${
              pathname === link.href ? "text-[#E8631A]" : "text-[#F0EDE6]"
            }`}>
            {link.label}
          </Link>
        ))}
        <Link href="/kontakt"
          className="mt-4 bg-[#E8631A] text-white px-8 py-3 rounded-lg text-base font-medium hover:opacity-90 active:scale-95 transition-all">
          Anfrage stellen
        </Link>
      </div>
    </>
  );
}
