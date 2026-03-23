import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { post } from "./schemas/post";
import { author } from "./schemas/author";
import { category, blockContent } from "./schemas/index";

export default defineConfig({
  name: "gutachten-ai-studio",
  title: "gutachter-ki.de Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "67x2nc7r",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  basePath: "/studio",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [post, author, category, blockContent],
  },
});
