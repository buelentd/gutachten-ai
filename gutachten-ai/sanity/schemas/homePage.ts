import { defineField, defineType } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home",
  type: "document",
  fields: [
    defineField({ name: "heroBadge", title: "Hero Badge Text", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero Titel", type: "string" }),
    defineField({ name: "heroSubtext", title: "Hero Subtext", type: "text" }),
    defineField({ name: "heroPrimaryButton", title: "Button 1 Text", type: "string" }),
    defineField({ name: "heroSecondaryButton", title: "Button 2 Text", type: "string" }),
    defineField({
      name: "stats",
      title: "Stats Bar",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "value", title: "Wert", type: "string" },
        { name: "label", title: "Label", type: "string" },
        { name: "highlight", title: "Orange hervorheben?", type: "boolean" },
      ]}],
    }),
    defineField({
      name: "problemTitle", title: "Problem/Solution Titel", type: "string"
    }),
    defineField({
      name: "problemSubtext", title: "Problem/Solution Subtext", type: "text"
    }),
    defineField({
      name: "problemItems", title: "Klassischer Weg (Punkte)", type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "solutionItems", title: "Mit gutachten-ai.de (Punkte)", type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "features",
      title: "Features Grid",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "icon", title: "Material Symbol Name", type: "string" },
        { name: "title", title: "Titel", type: "string" },
        { name: "description", title: "Beschreibung", type: "text" },
      ]}],
    }),
    defineField({ name: "offerTitle", title: "Offer Card Titel", type: "string" }),
    defineField({ name: "offerSubtext", title: "Offer Card Subtext", type: "string" }),
    defineField({
      name: "offerItems", title: "Offer Card Punkte", type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "ctaTitle", title: "Final CTA Titel", type: "string" }),
    defineField({ name: "ctaSubtext", title: "Final CTA Subtext", type: "string" }),
  ],
});
