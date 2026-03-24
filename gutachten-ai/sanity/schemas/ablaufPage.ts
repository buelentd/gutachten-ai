import { defineField, defineType } from "sanity";

export default defineType({
  name: "ablaufPage",
  title: "Ablauf",
  type: "document",
  fields: [
    defineField({ name: "heroLabel", title: "Hero Label (orange)", type: "string" }),
    defineField({ name: "heroTitle", title: "Hero Titel", type: "string" }),
    defineField({ name: "heroTitleHighlight", title: "Hero Titel Highlight (kursiv)", type: "string" }),
    defineField({ name: "heroSubtext", title: "Hero Subtext", type: "text" }),
    defineField({
      name: "steps",
      title: "3 Schritte",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "number", title: "Nummer (01, 02, 03)", type: "string" },
        { name: "title", title: "Titel", type: "string" },
        { name: "description", title: "Beschreibung", type: "text" },
        { name: "items", title: "Checkliste", type: "array", of: [{ type: "string" }] },
      ]}],
    }),
    defineField({
      name: "timeline",
      title: "Zeitplan",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "day", title: "Tag/Nummer", type: "string" },
        { name: "label", title: "Label", type: "string" },
        { name: "sublabel", title: "Sublabel (uppercase)", type: "string" },
        { name: "isRocket", title: "Raketen-Icon?", type: "boolean" },
      ]}],
    }),
    defineField({
      name: "trustItems",
      title: "Sicherheit & Integration",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "icon", title: "Material Symbol Name", type: "string" },
        { name: "title", title: "Titel", type: "string" },
        { name: "description", title: "Beschreibung", type: "text" },
      ]}],
    }),
    defineField({ name: "ctaTitle", title: "CTA Titel", type: "string" }),
    defineField({ name: "ctaSubtext", title: "CTA Subtext", type: "text" }),
    defineField({ name: "ctaPrimaryButton", title: "CTA Button 1", type: "string" }),
    defineField({ name: "ctaSecondaryButton", title: "CTA Button 2", type: "string" }),
  ],
});
