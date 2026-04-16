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

// Architecture Icon als inline SVG — kein Font-Request nötig, sofort verfügbar
function ArchitectureIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#E8631A" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M11.25 22L11 20H9L6.5 13Q5.9 12.85 5.45 12.4Q5 11.95 5 11.25Q5 10.45 5.525 9.9Q6.05 9.35 6.875 9.35Q7.5 9.35 8 9.75Q8.5 10.15 8.725 10.75L11 13H13L15.275 10.75Q15.5 10.15 16 9.75Q16.5 9.35 17.125 9.35Q17.95 9.35 18.475 9.9Q19 10.45 19 11.25Q19 11.95 18.55 12.4Q18.1 12.85 17.5 13L15 20H13L12.75 22ZM12 9Q11.175 9 10.588 8.413Q10 7.825 10 7Q10 6.175 10.588 5.588Q11.175 5 12 5Q12.825 5 13.413 5.588Q14 6.175 14 7Q14 7.825 13.413 8.413Q12.825 9 12 9Z"/>
    </svg>
  );
}

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
            <ArchitectureIcon />
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
