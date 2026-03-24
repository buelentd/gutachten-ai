import type { Metadata } from "next";
import "../styles/globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://gutachten-ai.de"),
  title: {
    default: "gutachten-ai.de | KI-Gutachtenerstellung für Bausachverständige",
    template: "%s | gutachten-ai.de",
  },
  description: "KI-gestützte Gutachtenerstellung für Bausachverständige. Automatisierte Berichte, DIN-normkonform, DSGVO-konform. 85% Zeitersparnis.",
  keywords: ["KI Gutachten", "Bausachverständiger Software", "Gutachtenerstellung automatisieren", "KI Baugutachten", "Gutachten Software Deutschland"],
  authors: [{ name: "gutachten-ai.de" }],
  creator: "gutachten-ai.de",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://gutachten-ai.de",
    siteName: "gutachten-ai.de",
    title: "KI-Gutachtenerstellung für Bausachverständige",
    description: "Automatisierte, rechtssichere Gutachten in wenigen Minuten. DIN-normkonform, DSGVO-konform, Made in Germany.",
  },
  twitter: {
    card: "summary_large_image",
    title: "gutachten-ai.de | KI-Gutachtenerstellung",
    description: "85% Zeitersparnis bei der Gutachtenerstellung. KI-gestützt, rechtssicher, DSGVO-konform.",
  },
  alternates: {
    canonical: "https://gutachten-ai.de",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "gutachten-ai.de",
              "description": "KI-gestützte Gutachtenerstellung für Bausachverständige",
              "url": "https://gutachten-ai.de",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "EUR",
                "description": "Auf Anfrage"
              },
              "provider": {
                "@type": "Organization",
                "name": "gutachten-ai.de",
                "url": "https://gutachten-ai.de"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Germany"
              }
            })
          }}
        />
      </head>
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
