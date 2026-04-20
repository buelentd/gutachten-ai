import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blogbeitrag",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({
      name: "category",
      title: "Kategorie",
      type: "string",
      options: {
        list: [
          "Praxis",
          "Technologie",
          "Technik",
          "Recht & Normen",
          "KI & Recht",
          "Vergleich",
          "Fachthema",
          "Abrechnung",
        ]
      }
    }),
    defineField({ name: "publishedAt", title: "Veröffentlicht am", type: "datetime" }),
    defineField({ name: "excerpt", title: "Teaser (kurze Zusammenfassung)", type: "text", rows: 3 }),
    defineField({ name: "body", title: "Inhalt", type: "blockContent" }),
  ],
  preview: {
    select: { title: "title", subtitle: "category" },
  },
});
