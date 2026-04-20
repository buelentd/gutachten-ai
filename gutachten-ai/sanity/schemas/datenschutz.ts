import { defineField, defineType } from "sanity";

export default defineType({
  name: "datenschutz",
  title: "Datenschutzerklärung",
  type: "document",
  preview: {
    prepare: () => ({ title: "Datenschutzerklärung" }),
  },
  fields: [
    defineField({
      name: "sections",
      title: "Abschnitte",
      type: "array",
      of: [{
        type: "object",
        preview: { select: { title: "title" } },
        fields: [
          { name: "title", title: "Überschrift", type: "string" },
          { name: "content", title: "Inhalt", type: "text", rows: 6 },
        ],
      }],
    }),
  ],
});
