# CLAUDE.md — Projektanweisungen für gutachten-ai

## Projekt

**gutachten-ai.de** — SaaS-Webanwendung für Bausachverständige zur KI-gestützten Gutachtenerstellung.
Stack: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS 3, Sanity CMS, Brevo (E-Mail).

## Projektstruktur

```
gutachten-ai/
├── app/                  # Next.js App Router (Pages, Layouts, API-Routes)
│   ├── api/              # Backend-Endpunkte (contact, seed)
│   ├── blog/             # Blog-Seiten (statisch + dynamisch via [slug])
│   ├── studio/           # Sanity CMS Studio (/studio)
│   └── [seite]/page.tsx  # Einzelne Seiten (funktionen, ablauf, kontakt, etc.)
├── components/
│   ├── layout/           # Navigation, Footer
│   └── ui/               # Wiederverwendbare UI-Komponenten (button, card, input, etc.)
├── lib/
│   ├── utils.ts          # cn() Hilfsfunktion (clsx + tailwind-merge)
│   └── sanity/           # Sanity Client, GROQ-Queries
├── sanity/               # Sanity Studio Config + Schemas
├── styles/globals.css    # Tailwind Base + CSS Custom Properties (Light/Dark)
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Regeln bei Änderungen

### Allgemein
- Sprache im Code: **Englisch** (Variablen, Funktionen, Kommentare)
- Sprache im UI/Content: **Deutsch**
- Nur die angeforderte Änderung umsetzen — kein Refactoring, keine "Verbesserungen" nebenbei
- Keine neuen Dateien erstellen, wenn eine bestehende Datei erweitert werden kann
- Keine Kommentare oder Docstrings hinzufügen, außer bei komplexer Logik

### Styling
- **Tailwind CSS** Utility-Klassen verwenden — kein inline CSS, kein CSS-Modules
- Farben: Brand-Orange `#E8631A`, helles Orange `#FFB596`, dunkle Hintergründe `#101319`, `#0B0E14`
- CSS Custom Properties aus `styles/globals.css` nutzen (`bg-surface`, `text-on-surface`, etc.)
- Dark Mode via `class`-Strategie — immer beide Modi berücksichtigen
- `cn()` aus `lib/utils.ts` für bedingte Klassen verwenden
- Borders: `0.5px` mit `border-[#2A3344]` oder `border-technical`
- Icons: **Material Symbols Outlined** (`<span className="material-symbols-outlined">icon_name</span>`)

### Komponenten
- PascalCase für Komponentendateien (`MeinKomponent.tsx`)
- camelCase für Utilities und Lib-Dateien
- `"use client"` nur bei interaktiven Komponenten (State, Events, Browser-APIs)
- Server Components sind Standard — async Data Fetching direkt in der Page
- UI-Primitives nutzen `forwardRef` und das CVA-Pattern (class-variance-authority)
- Props immer mit `...props` weiterreichen für Flexibilität

### CMS (Sanity)
- Content-Daten über GROQ-Queries in `lib/sanity/queries.ts` abrufen
- Fallback-Defaults in den Pages bereitstellen, falls CMS nicht erreichbar
- Neue Content-Typen als Schema in `sanity/schemas/` anlegen und in `index.ts` exportieren
- Bilder über `urlFor()` aus `lib/sanity/client.ts` laden

### API-Routes
- Unter `app/api/` ablegen
- Input validieren (E-Mail, Pflichtfelder)
- Umgebungsvariablen für externe Services (Brevo API Key, etc.)
- Keine Secrets hardcoden

### SEO
- Jede Seite braucht ein `metadata`-Objekt (title, description, openGraph)
- Canonical URLs setzen
- JSON-LD Schema wo sinnvoll

## Commands

```bash
npm run dev       # Entwicklungsserver starten
npm run build     # Production Build
npm run lint      # ESLint ausführen
npm run start     # Production Server starten
```

## Wichtige Abhängigkeiten

| Paket | Zweck |
|---|---|
| `next` 14.2.5 | Framework |
| `tailwindcss` 3.4.1 | Styling |
| `@sanity/client` | CMS-Zugriff |
| `next-sanity` | Sanity + Next.js Integration |
| `class-variance-authority` | Komponenten-Varianten |
| `clsx` + `tailwind-merge` | Klassen-Merging (`cn()`) |
| `lucide-react` | Icon-Bibliothek |
| `@radix-ui/react-slot` | Compound Component Pattern |

## Umgebungsvariablen

```
NEXT_PUBLIC_SANITY_PROJECT_ID   # Sanity Projekt-ID
NEXT_PUBLIC_SANITY_DATASET      # Sanity Dataset (default: production)
BREVO_API_KEY                   # Brevo/Sendinblue API Key
CONTACT_EMAIL                   # Empfänger-Adresse für Kontaktformular
```
