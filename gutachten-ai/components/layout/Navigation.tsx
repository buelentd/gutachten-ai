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
    <header className="fixed top-0 w-full z-50 bg-[#101319]/90 dark:bg-[#101319]/90 backdrop-blur-md border-b-[0.5px] border-[#2A3344]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#E8631A]">architecture</span>
          <span className="text-xl font-medium tracking-tighter text-[#F0EDE6]">gutachter-ki.de</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-tight text-[#E0C0B3]">
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

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/kontakt"
            className="bg-[#E8631A] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 active:scale-95 transition-all"
          >
            Anfrage stellen
          </Link>
        </div>
      </nav>
    </header>
  );
}
