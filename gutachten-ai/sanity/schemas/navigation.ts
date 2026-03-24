import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation & Footer",
  type: "document",
  fields: [
    defineField({ name: "logoText", title: "Logo Text", type: "string" }),
    defineField({ name: "ctaButton", title: "CTA Button Text", type: "string" }),
    defineField({ name: "footerTagline", title: "Footer Tagline", type: "string" }),
    defineField({ name: "footerCopyright", title: "Footer Copyright", type: "string" }),
  ],
});
