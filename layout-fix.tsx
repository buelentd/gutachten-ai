import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gutachten-ai.de"),
  title: {
    default: "Gutachtensoftware für Bausachverständige | gutachten-ai.de",
    template: "%s | gutachten-ai.de",
  },
  description: "KI-gestützte Gutachtenerstellung für Bausachverständige. Fallverwaltung, digitale Akte und rechtssicherer Export — strukturiert vom Beweisbeschluss bis zum fertigen Gutachten.",
  keywords: ["Gutachtensoftware Bausachverständige", "KI Gutachten", "Beweisbeschluss Software", "Gutachtenerstellung automatisieren", "Gutachten Software Deutschland"],
  authors: [{ name: "gutachten-ai.de" }],
  creator: "gutachten-ai.de",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website", locale: "de_DE", url: "https://gutachten-ai.de",
    siteName: "gutachten-ai.de",
    title: "Gutachtensoftware für Bausachverständige | gutachten-ai.de",
    description: "Fallverwaltung, digitale Akte und rechtssicherer Export — strukturiert vom Beweisbeschluss bis zum fertigen Gutachten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutachtensoftware für Bausachverständige | gutachten-ai.de",
    description: "KI-gestützte Gutachtenerstellung — strukturiert, nachvollziehbar, rechtssicher.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        {/* Material Symbols — async via dangerouslySetInnerHTML um TypeScript-Fehler zu vermeiden */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(){
            var l=document.createElement('link');
            l.rel='stylesheet';
            l.href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@400,0&display=swap';
            document.head.appendChild(l);
          })();
        `}} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "WebSite",
          "name": "gutachten-ai.de", "url": "https://gutachten-ai.de",
          "description": "KI-gestützte Gutachtenerstellung für Bausachverständige",
          "inLanguage": "de-DE",
          "publisher": { "@type": "Organization", "name": "gutachten-ai.de", "url": "https://gutachten-ai.de" }
        })}}/>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "SoftwareApplication",
          "name": "Gutachten Assistent",
          "description": "KI-gestützte Gutachtenerstellung für Bausachverständige — Fallverwaltung, digitale Akte, Beweisfragen-Editor und Export als PDF oder Word.",
          "url": "https://gutachten-ai.de", "applicationCategory": "BusinessApplication", "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR", "description": "Auf Anfrage" },
          "provider": { "@type": "Organization", "name": "gutachten-ai.de", "url": "https://gutachten-ai.de" },
          "areaServed": { "@type": "Country", "name": "Germany" }
        })}}/>
      </head>
      <body className={inter.variable}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
