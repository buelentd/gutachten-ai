import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
    default: "Gutachtensoftware für Bausachverständige",
    template: "%s",
  },
  description: "KI-gestützte Gutachtenerstellung für Bausachverständige. Fallverwaltung, digitale Akte und rechtssicherer Export bis zum fertigen Gutachten.",
  keywords: ["Gutachtensoftware Bausachverständige", "KI Gutachten", "Beweisbeschluss Software", "Gutachtenerstellung automatisieren", "Gutachten Software Deutschland"],
  authors: [{ name: "gutachten-ai.de" }],
  creator: "gutachten-ai.de",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website", locale: "de_DE", url: "https://gutachten-ai.de",
    siteName: "gutachten-ai.de",
    title: "Gutachtensoftware für Bausachverständige",
    description: "Fallverwaltung, digitale Akte und rechtssicherer Export — strukturiert vom Beweisbeschluss bis zum fertigen Gutachten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gutachtensoftware für Bausachverständige",
    description: "KI-gestützte Gutachtenerstellung — strukturiert, nachvollziehbar, rechtssicher.",
  },
};

export const viewport: Viewport = {
  themeColor: "#101319",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://consent.cookiebot.com" />
        <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="47368974-d32e-42ef-9015-2635f0457cb4" data-blockingmode="auto" strategy="afterInteractive" />
        <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('theme')==='light'){document.documentElement.classList.remove('dark')}}catch(e){}` }} />
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MZNP1LYCPH"
          strategy="afterInteractive"
          type="text/plain"
          data-cookieconsent="statistics"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          type="text/plain"
          data-cookieconsent="statistics"
        >
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-MZNP1LYCPH');`}
        </Script>
      </body>
    </html>
  );
}
