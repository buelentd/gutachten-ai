import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#101319] border-t-[0.5px] border-[#2A3344]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-12 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col gap-4">
          <div className="text-lg font-medium text-[#F0EDE6]">gutachter-ki.de</div>
          <p className="text-[#A0AABB] font-normal text-xs leading-relaxed">
            © 2026 gutachter-ki.de • Server in Deutschland • DSGVO-konform • Made in Germany
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {[
            { href: "/funktionen", label: "Funktionen" },
            { href: "/ablauf", label: "Ablauf" },
            { href: "/blog", label: "Blog" },
            { href: "/kontakt", label: "Kontakt" },
            { href: "/impressum", label: "Impressum" },
            { href: "/datenschutz", label: "Datenschutz" },
            { href: "/agb", label: "AGB" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#A0AABB] font-normal text-xs hover:text-[#E8631A] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
