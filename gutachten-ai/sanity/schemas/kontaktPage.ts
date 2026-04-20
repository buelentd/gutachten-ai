import { defineField, defineType } from "sanity";

export default defineType({
  name: "kontaktPage",
  title: "Kontakt",
  type: "document",
  preview: {
    prepare: () => ({ title: "Kontaktseite" }),
  },
  fields: [
    defineField({ name: "heroTitle", title: "Hero Titel", type: "string" }),
    defineField({ name: "heroSubtext", title: "Hero Subtext", type: "text" }),
    defineField({ name: "contactName", title: "Kontaktperson Name", type: "string" }),
    defineField({ name: "contactRole", title: "Kontaktperson Rolle", type: "string" }),
    defineField({ name: "contactText", title: "Kontaktperson Text", type: "text" }),
    defineField({
      name: "trustItems",
      title: "Vertrauens-Punkte",
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
  ],
});
