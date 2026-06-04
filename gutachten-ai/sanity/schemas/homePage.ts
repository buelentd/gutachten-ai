import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Startseite",
  type: "document",
  preview: {
    prepare: () => ({ title: "Startseite" }),
  },
  fields: [
    // Hero
    defineField({ name: "heroTitle", title: "Hero Titel", type: "string" }),
    defineField({ name: "heroSubtext", title: "Hero Subtext", type: "text" }),
    defineField({ name: "heroPrimaryButton", title: "Button 1 Text", type: "string" }),
    defineField({ name: "heroSecondaryButton", title: "Button 2 Text", type: "string" }),

    // Trust-Banderole
    defineField({
      name: "trustItems",
      title: "Trust-Banderole",
      type: "array",
      of: [{
        type: "object",
        preview: { select: { title: "label" } },
        fields: [
          { name: "icon", title: "Material Symbol Name", type: "string" },
          { name: "label", title: "Label", type: "string" },
        ],
      }],
    }),

    // Stats
    defineField({
      name: "stats",
      title: "Stats Bar",
      type: "array",
      of: [{
        type: "object",
        preview: { select: { title: "value", subtitle: "label" } },
        fields: [
          { name: "value", title: "Wert", type: "string" },
          { name: "label", title: "Label", type: "string" },
          { name: "highlight", title: "Orange hervorheben?", type: "boolean" },
        ],
      }],
    }),

    // Problem/Solution
    defineField({ name: "problemTitle", title: "Problem/Solution Titel", type: "string" }),
    defineField({ name: "problemSubtext", title: "Problem/Solution Subtext", type: "text" }),
    defineField({ name: "problemItems", title: "Klassischer Weg (Punkte)", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "solutionItems", title: "Mit gutachten-ai.de (Punkte)", type: "array", of: [{ type: "string" }] }),

    // Features Grid (Position 5)
    defineField({ name: "featuresTitle", title: "Features Grid Titel", type: "string" }),
    defineField({ name: "featuresSubtext", title: "Features Grid Subtext", type: "string" }),
    defineField({
      name: "features",
      title: "Features Grid",
      type: "array",
      of: [{
        type: "object",
        preview: { select: { title: "title", subtitle: "description" } },
        fields: [
          { name: "icon", title: "Material Symbol Name", type: "string" },
          { name: "title", title: "Titel", type: "string" },
          { name: "description", title: "Beschreibung", type: "text" },
        ],
      }],
    }),

    // Ablauf
    defineField({ name: "ablaufTitle", title: "Ablauf Titel", type: "string" }),
    defineField({ name: "ablaufSubtext", title: "Ablauf Subtext", type: "text" }),
    defineField({
      name: "ablaufSteps",
      title: "Ablauf Schritte",
      type: "array",
      of: [{
        type: "object",
        preview: { select: { title: "title" } },
        fields: [
          { name: "step", title: "Nummer (z.B. 01)", type: "string" },
          { name: "icon", title: "Material Symbol Name", type: "string" },
          { name: "title", title: "Titel", type: "string" },
          { name: "description", title: "Beschreibung", type: "text" },
        ],
      }],
    }),
    defineField({ name: "ablaufButtonText", title: "Ablauf Button Text", type: "string" }),

    // Für wen
    defineField({ name: "fuerWenTitle", title: "Für wen Titel", type: "string" }),
    defineField({ name: "fuerWenSubtext", title: "Für wen Subtext", type: "text" }),
    defineField({
      name: "fuerWenItems",
      title: "Für wen Karten",
      type: "array",
      of: [{
        type: "object",
        preview: { select: { title: "title" } },
        fields: [
          { name: "icon", title: "Material Symbol Name", type: "string" },
          { name: "title", title: "Titel", type: "string" },
          { name: "description", title: "Beschreibung", type: "text" },
        ],
      }],
    }),

    // Blog Section
    defineField({ name: "blogTitle", title: "Blog Section Titel", type: "string" }),
    defineField({ name: "blogSubtext", title: "Blog Section Subtext", type: "string" }),
    defineField({ name: "blogLinkText", title: "Blog Link Text", type: "string" }),

    // Offer Card
    defineField({ name: "offerBadge", title: "Offer Card Badge Text", type: "string" }),
    defineField({ name: "offerTitle", title: "Offer Card Titel", type: "string" }),
    defineField({ name: "offerSubtext", title: "Offer Card Subtext", type: "string" }),
    defineField({ name: "offerItems", title: "Offer Card Punkte", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "offerButtonText", title: "Offer Card Button Text", type: "string" }),

    // Final CTA
    defineField({ name: "ctaTitle", title: "Final CTA Titel", type: "string" }),
    defineField({ name: "ctaSubtext", title: "Final CTA Subtext", type: "string" }),
    defineField({ name: "ctaPrimaryButtonText", title: "CTA Button 1 Text", type: "string" }),
    defineField({ name: "ctaPrimaryButtonLink", title: "CTA Button 1 Link", type: "string" }),
    defineField({ name: "ctaSecondaryButtonText", title: "CTA Button 2 Text", type: "string" }),
    defineField({ name: "ctaSecondaryButtonLink", title: "CTA Button 2 Link", type: "string" }),

    // Blog Post CTA
    defineField({ name: "blogPostCtaTitle", title: "Blog Artikel CTA Titel", type: "string" }),
    defineField({ name: "blogPostCtaText", title: "Blog Artikel CTA Text", type: "string" }),
    defineField({ name: "blogPostCtaButton", title: "Blog Artikel CTA Button Text", type: "string" }),
    defineField({ name: "blogWeitereArtikelTitle", title: "Blog 'Weitere Artikel' Überschrift", type: "string" }),
  ],
});
