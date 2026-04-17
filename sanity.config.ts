import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas/index";

const singletons = ["homePage", "funktionenPage", "ablaufPage", "kontaktPage", "navigation", "impressum"];

export default defineConfig({
  name: "gutachten-ai-studio",
  title: "gutachten-ai.de Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "67x2nc7r",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Inhalte")
          .items([
            S.listItem().title("Home").id("homePage").child(
              S.document().schemaType("homePage").documentId("homePage")
            ),
            S.listItem().title("Funktionen").id("funktionenPage").child(
              S.document().schemaType("funktionenPage").documentId("funktionenPage")
            ),
            S.listItem().title("Ablauf").id("ablaufPage").child(
              S.document().schemaType("ablaufPage").documentId("ablaufPage")
            ),
            S.listItem().title("Kontakt").id("kontaktPage").child(
              S.document().schemaType("kontaktPage").documentId("kontaktPage")
            ),
            S.listItem().title("Navigation & Footer").id("navigation").child(
              S.document().schemaType("navigation").documentId("navigation")
            ),
            S.listItem().title("Impressum").id("impressum").child(
              S.document().schemaType("impressum").documentId("impressum")
            ),
            S.divider(),
            S.documentTypeListItem("post").title("Blogbeiträge"),
            S.documentTypeListItem("author").title("Autoren"),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
  document: {
    // Verhindert das Erstellen mehrerer Dokumente für Singletons
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter((template) => !singletons.includes(template.templateId));
      }
      return prev;
    },
    actions: (prev, { schemaType }) => {
      if (singletons.includes(schemaType)) {
        return prev.filter(({ action }) => action !== "duplicate" && action !== "delete");
      }
      return prev;
    },
  },
});
