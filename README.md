# gutachten-ai.de

Marketing-Website für den **Gutachten Assistenten** — einer KI-gestützten Software für Bausachverständige zur automatisierten Gutachtenerstellung auf Basis von Beweisbeschlüssen.

**Live:** [https://gutachten-ai.de](https://gutachten-ai.de)

**Betreiber:** intersignum UG (haftungsbeschränkt), Berlin

---

## Tech-Stack

- **Framework:** Next.js 14.2.5 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **CMS:** Sanity v3 (headless, Studio unter `/studio`)
- **Hosting:** Vercel (Auto-Deploy bei Push auf `master`)
- **Analytics:** Google Analytics 4 (GA4)

---

## Lokale Entwicklung

### Voraussetzungen

- Node.js 18+
- npm
- GitHub CLI (`gh`) für Push-Workflow

### Setup

```bash
cd gutachten-ai
npm install
npm run dev
```

Die App läuft unter [http://localhost:3000](http://localhost:3000), das Sanity Studio unter [http://localhost:3000/studio](http://localhost:3000/studio).

### Build & Lint

```bash
npm run build
npm run lint
```

---

## Projektstruktur

```
gutachten-ai/                    ← Git-Repo-Root (.git liegt hier)
├── gutachten-ai/                ← Next.js App
│   ├── app/                     ← Pages (App Router)
│   │   ├── api/seed/            ← Sanity Seed Route
│   │   ├── blog/[slug]/         ← Dynamische Blog-Routen
│   │   └── studio/              ← Sanity Studio
│   ├── components/              ← React Components
│   ├── lib/sanity/              ← Sanity Client & Queries
│   ├── public/                  ← Bilder & statische Assets
│   └── sanity/schemas/          ← Sanity Content-Schemas
└── README.md
```

---

## Content-Management via Sanity

Alle Seiten-Inhalte werden im **Sanity Studio** (`/studio`) gepflegt.

### Neuen Content-Typ hinzufügen

Immer in dieser Reihenfolge (niemals einen Schritt überspringen):

1. **Schema** in `sanity/schemas/<typ>.ts` anlegen und in `sanity/schemas/index.ts` registrieren
2. **Page** (`app/<pfad>/page.tsx`) mit Sanity-Fetch — niemals statischer Content
3. **Seed-Eintrag** in `app/api/seed/route.ts` ergänzen (`createOrReplace`)

Dann pushen und die Seed-URL aufrufen:

```
https://gutachten-ai.de/api/seed
```

Im Studio verifizieren, dass das Dokument existiert und editierbar ist.

---

## Deploy-Workflow

```bash
cd gutachten-ai            # Git-Repo-Root
git add <files>
git commit -m "feat: beschreibung"
git push
```

Vercel deployt automatisch bei Push auf `master`.

---

## Umgebungsvariablen

In Vercel hinterlegt, nicht im Repo:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — `67x2nc7r`
- `NEXT_PUBLIC_SANITY_DATASET` — `production`
- `SANITY_WRITE_TOKEN` — für Seed-Route
- `NEXT_PUBLIC_GA_ID` — `G-MZNP1LYCPH`

---

## Lizenz & Kontakt

© intersignum UG (haftungsbeschränkt), Berlin. Alle Rechte vorbehalten.

Kontakt: [info@intersignum.com](mailto:info@intersignum.com)
