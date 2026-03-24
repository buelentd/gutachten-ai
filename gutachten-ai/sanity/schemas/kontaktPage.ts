import { defineField, defineType } from "sanity";

export default defineType({
  name: "kontaktPage",
  title: "Kontakt",
  type: "document",
  fields: [
    defineField({ name: "heroLabel", title: "Label (orange)", type: "string" }),
    defineField({ name: "heroTitle", title: "Titel", type: "string" }),
    defineField({ name: "contactName", title: "Ansprechpartner Name", type: "string" }),
    defineField({ name: "contactRole", title: "Ansprechpartner Rolle", type: "string" }),
    defineField({ name: "contactQuote", title: "Zitat", type: "text" }),
    defineField({
      name: "trustItems",
      title: "Vertrauens-Elemente",
      type: "array",
      of: [{ type: "object", fields: [
        { name: "icon", title: "Material Symbol Name", type: "string" },
        { name: "title", title: "Titel", type: "string" },
        { name: "description", title: "Beschreibung", type: "text" },
      ]}],
    }),
  ],
});
