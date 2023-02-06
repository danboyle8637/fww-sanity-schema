import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "fit_womens_weekly",
  title: "fit_womens_weekly",
  projectId: "ie5weekx",
  dataset: "production",
  plugins: [deskTool(), visionTool(), media()],
  schema: {
    types: schemaTypes,
  },
});
