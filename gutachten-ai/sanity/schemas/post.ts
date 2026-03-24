import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blogbeitrag",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string" }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "author", title: "Autor", type: "reference", to: [{ type: "author" }] }),
    defineField({ name: "mainImage", title: "Hauptbild", type: "image" }),
    defineField({ name: "publishedAt", title: "Veröffentlicht am", type: "datetime" }),
    defineField({ name: "excerpt", title: "Teaser", type: "text" }),
    defineField({ name: "body", title: "Inhalt", type: "blockContent" }),
  ],
});
