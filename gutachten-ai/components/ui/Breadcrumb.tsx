import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://gutachten-ai.de${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-xs text-[#8A9BB0]">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index < items.length - 1 ? (
                <>
                  <Link href={item.href} className="hover:text-[#E8631A] transition-colors">
                    {item.label}
                  </Link>
                  <span className="text-[#2A3344]">›</span>
                </>
              ) : (
                <span className="text-[#F0EDE6]">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
