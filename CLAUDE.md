# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt

**gutachten-ai.de** — Marketing-Website für den *Gutachten Assistenten*, eine KI-gestützte SaaS-Lösung für Bausachverständige (Betreiber: intersignum UG, Berlin). Auto-Deploy auf Vercel bei Push auf `master`.

Stack: Next.js 14.2.5 (App Router) · React 18 · TypeScript (strict) · Tailwind CSS 3.4 · Sanity v3 (Studio unter `/studio`) · Brevo (Kontaktformular-E-Mail) · GA4.

## Repo-Layout — WICHTIG

Die Next.js-App liegt **nicht** im Git-Root, sondern in einem gleichnamigen Unterordner:

```
gutachten-ai/                 ← Git-Repo-Root (.git, README, deploy.ps1, CLAUDE.md)
└── gutachten-ai/             ← Next.js App Root (package.json, tsconfig, tailwind.config)
    ├── app/                  ← App Router: pages, api/, studio/, blog/[slug]
    ├── components/           ← Icon.tsx, KontaktForm.tsx, HeroCrossfade.tsx, BlogCarousel.tsx, layout/, ui/
    ├── lib/sanity/           ← client.ts (+ urlFor), queries.ts (GROQ)
    ├── sanity/               ← sanity.config.ts, schemas/
    ├── public/icons/         ← SVG-Icon-Set (Quelle für <Icon />)
    └── styles/globals.css    ← Tailwind + CSS Custom Properties (Light/Dark) + .icon-* Filter
```

- Alle npm/Next-Befehle **aus dem inneren** `gutachten-ai/` ausführen.
- TS-Alias `@/*` zeigt auf das innere App-Root (`./*` relativ zu `gutachten-ai/gutachten-ai/`).
- Im Git-Root liegen außerdem "Staging"-Dateien (`page-final.tsx`, `Navigation-perf.tsx`, `layout-ga.tsx`, …). Das sind Vorlagen für `deploy.ps1`, **kein** aktiver Code — nie von dort importieren und nicht als Quelle für Analysen heranziehen, wenn es um den Live-Stand geht.

## Commands

Immer erst in die App wechseln (`cd gutachten-ai` vom Repo-Root):

```bash
npm run dev       # Dev-Server auf http://localhost:3000 (Studio: /studio)
npm run build     # Production Build
npm run lint      # next lint (eslint-config-next)
npm run start     # Production Server
```

Deploy: `git push` auf `master` → Vercel deployt automatisch. Optional Helper im Repo-Root: `.\deploy.ps1 -src <datei> -dest <pfad> -message "..."` kopiert eine Datei, committet und pushed.

## Sprache & Code-Stil

- **Code** (Variablen, Funktionen, Kommentare): Englisch.
- **UI/Content**: Deutsch.
- Nur die angeforderte Änderung umsetzen — kein Refactoring nebenbei, keine neuen Dateien, wenn eine bestehende erweitert werden kann.
- Keine Kommentare/Docstrings außer bei komplexer Logik.
- `"use client"` nur für interaktive Komponenten; alles andere bleibt Server Component mit `async` Data Fetching in der Page.
- UI-Primitives unter `components/ui/` nutzen `forwardRef` + CVA (class-variance-authority); Props mit `...props` durchreichen.
- PascalCase für Komponenten, camelCase für Utilities/Lib.

## Styling

- Tailwind Utility-Klassen — kein Inline-Style, keine CSS-Modules.
- Dark Mode via `class`-Strategie; `<html>` startet mit `className="dark"`, ein Inline-Script im Layout schaltet bei `localStorage.theme === 'light'` um. Immer beide Modi berücksichtigen.
- **CSS Custom Properties** aus `styles/globals.css` nutzen: `bg-surface`, `bg-surface-container{,-low,-high}`, `text-on-surface`, `text-on-surface-variant`, `border-technical` (0.5px), `border-outline-variant`.
- **Brand-Farben** (in `tailwind.config.ts` fixiert): `brand-orange #E8631A`, `primary-container #EE671F`, `on-primary-container #4D1900`, `primary #FFB596`, `outline-variant` (CSS-Var).
- Dunkle Hintergründe: `#101319` (surface dark) und `#0B0E14`.
- Klassen-Merging via `cn()` aus `lib/utils.ts` (clsx + tailwind-merge).
- Font: Inter (via `next/font/google`, CSS-Variable `--font-inter`).

## Icons

**Immer** die `<Icon />`-Komponente aus `components/Icon.tsx` verwenden. Sie rendert `<img src="/icons/{name}.svg" />` aus `public/icons/`.

```tsx
<Icon name="shield" size={24} className="icon-orange" />
```

Farb-Utilities (SVG-`<img>` wird per CSS-`filter` eingefärbt, definiert in `globals.css`): `icon-orange`, `icon-gray`, `icon-white`, `icon-red`, `icon-dark`.

Material Symbols, `lucide-react` und inline-SVG sind **nicht** mehr im Einsatz — neue Icons als SVG in `public/icons/` ablegen (siehe `download-icons.ps1` für den Bulk-Download von Material-Symbols-Quellen).

## Sanity CMS

Client & Queries: `lib/sanity/client.ts` (`client`, `urlFor`), Queries als GROQ in `lib/sanity/queries.ts`. Schemas: `sanity/schemas/*.ts`, exportiert in `sanity/schemas/index.ts`.

**Singletons** (in `sanity/sanity.config.ts` registriert — keine Duplikate, kein Löschen im Studio): `homePage`, `funktionenPage`, `ablaufPage`, `kontaktPage`, `navigation`, `impressum`.

**Neuer Content-Typ — feste Reihenfolge** (aus `README.md`, nie einen Schritt überspringen):

1. Schema in `sanity/schemas/<typ>.ts` anlegen + in `sanity/schemas/index.ts` registrieren (bei Singletons zusätzlich in die `singletons`-Liste in `sanity.config.ts` aufnehmen).
2. Page `app/<pfad>/page.tsx` mit Sanity-Fetch bauen — niemals statischer Content, immer mit Fallback-Defaults falls CMS nicht erreichbar.
3. Seed-Eintrag in `app/api/seed/route.ts` via `client.createOrReplace(...)` ergänzen.
4. Deployen, dann `https://gutachten-ai.de/api/seed` aufrufen und im Studio verifizieren.

Bilder: via `urlFor(source)`; `cdn.sanity.io` ist in `next.config.mjs` als Remote-Pattern whitelisted.

## API-Routes

- `app/api/contact/route.ts`: POST, validiert `email` + `nachricht`, escaped alle Strings (`escapeHtml`), registriert Kontakt + sendet Mail via Brevo (`/v3/contacts`, `/v3/smtp/email`). Empfänger via `CONTACT_EMAIL` (Fallback `b.duezguen@intersignum.com`).
- `app/api/seed/route.ts`: GET, nutzt `SANITY_WRITE_TOKEN` und `createOrReplace` für alle Seiten-Dokumente.

## SEO

- Jede Page braucht ein `metadata`-Objekt (title, description, openGraph). Root-`metadata` steht in `app/layout.tsx` mit `metadataBase`, Title-Template und Default-OG.
- `app/sitemap.ts` und `app/robots.ts` pflegen die Suchmaschinen-Metadaten.
- JSON-LD (`WebSite` + `SoftwareApplication`) wird im Root-Layout eingebettet.
- GA4 (`G-MZNP1LYCPH`) wird via `next/script` mit `strategy="lazyOnload"` geladen.

## Umgebungsvariablen

In Vercel gesetzt, nicht im Repo:

```
NEXT_PUBLIC_SANITY_PROJECT_ID   # 67x2nc7r (auch als Fallback hardcoded)
NEXT_PUBLIC_SANITY_DATASET      # production
NEXT_PUBLIC_SANITY_API_VERSION  # 2024-01-01 (Fallback)
SANITY_WRITE_TOKEN              # nur für /api/seed
BREVO_API_KEY                   # Kontaktformular
CONTACT_EMAIL                   # Empfänger Kontaktformular
NEXT_PUBLIC_GA_ID               # GA4 (Default G-MZNP1LYCPH)
```

## Wichtige Abhängigkeiten

| Paket | Zweck |
|---|---|
| `next` 14.2.5 | Framework (App Router) |
| `tailwindcss` 3.4.1 | Styling |
| `@sanity/client`, `next-sanity`, `sanity` 3.53 | Headless CMS + eingebettetes Studio |
| `@sanity/image-url` | `urlFor()` für Bilder |
| `@portabletext/react` | Rendering für Sanity-Rich-Text |
| `class-variance-authority`, `clsx`, `tailwind-merge` | UI-Varianten + `cn()` |
| `@radix-ui/react-slot` | Compound-Component-Pattern in UI-Primitives |
