import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Autor",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "image", title: "Bild", type: "image" }),
    defineField({ name: "bio", title: "Bio", type: "text" }),
  ],
});
