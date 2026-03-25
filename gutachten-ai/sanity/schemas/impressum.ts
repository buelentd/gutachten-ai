import { defineField, defineType } from "sanity";

export default defineType({
  name: "impressum",
  title: "Impressum",
  type: "document",
  fields: [
    defineField({ name: "firmenname", title: "Firmenname", type: "string" }),
    defineField({ name: "strasse", title: "Straße und Hausnummer", type: "string" }),
    defineField({ name: "plz", title: "PLZ", type: "string" }),
    defineField({ name: "ort", title: "Ort", type: "string" }),
    defineField({ name: "registergericht", title: "Registergericht", type: "string" }),
    defineField({ name: "registernummer", title: "Registernummer (HRB)", type: "string" }),
    defineField({ name: "geschaeftsfuehrer", title: "Geschäftsführer", type: "string" }),
    defineField({ name: "telefon", title: "Telefon", type: "string" }),
    defineField({ name: "email", title: "E-Mail", type: "string" }),
    defineField({ name: "verantwortlich", title: "Verantwortlich gemäß § 55 RStV", type: "string" }),
  ],
});
