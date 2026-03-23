import { defineField, defineType, defineArrayMember } from "sanity";

export const category = defineType({
  name: "category",
  title: "Kategorie",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string" }),
    defineField({ name: "description", title: "Beschreibung", type: "text" }),
  ],
});

export const blockContent = defineType({
  name: "blockContent",
  title: "Block Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "Quote", value: "blockquote" },
      ],
      marks: {
        decorators: [
          { title: "Bold", value: "strong" },
          { title: "Italic", value: "em" },
          { title: "Code", value: "code" },
        ],
      },
    }),
    defineArrayMember({ type: "image", options: { hotspot: true } }),
  ],
});
