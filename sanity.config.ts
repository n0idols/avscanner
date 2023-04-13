import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemaTypes from "./sanity/schemas";

const config = defineConfig({
  projectId: "",
  dataset: "production",
  title: "",
  apiVersion: "2023-04-13",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemaTypes },
});

export default config;
