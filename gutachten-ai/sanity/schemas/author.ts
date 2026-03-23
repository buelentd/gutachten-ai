import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Autor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "image", title: "Bild", type: "image", options: { hotspot: true } }),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] }),
  ],
  preview: { select: { title: "name", media: "image" } },
});
