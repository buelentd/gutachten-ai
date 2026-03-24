import { defineField, defineType } from "sanity";

export default defineType({
  name: "funktionenPage",
  title: "Funktionen",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero Titel", type: "string" }),
    defineField({ name: "heroSubtext", title: "Hero Subtext", type: "text" }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "icon", title: "Material Symbol Name", type: "string" },
        { name: "title", title: "Titel", type: "string" },
        { name: "description", title: "Beschreibung", type: "text" },
        { name: "example", title: "Praxis-Beispiel", type: "text" },
        { name: "imageAlt", title: "Bild Alt-Text", type: "string" },
        { name: "imageSrc", title: "Bild URL", type: "url" },
        { name: "reverse", title: "Layout umkehren?", type: "boolean" },
      ]}],
    }),
    defineField({
      name: "faq",
      title: "FAQ",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "question", title: "Frage", type: "string" },
        { name: "answer", title: "Antwort", type: "text" },
      ]}],
    }),
  ],
});
