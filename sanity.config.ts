import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema as schemaTypes } from "./sanity/schema";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["hero", "about", "yearlyTheme"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schemaTypes,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content Configuration")
          .items([
            // Our singleton type has a list item with a custom child
            // Instead of rendering a list of documents, we render a single
            // document, specifying the `documentId` manually to ensure
            // that we're editing the single instance of the document
            S.listItem()
              .title("Hero")
              .id("hero")
              .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
              .title("About Section")
              .id("about")
              .child(S.document().schemaType("about").documentId("about")),
            S.listItem()
              .title("Yearly Theme")
              .id("yearlyTheme")
              .child(
                S.document().schemaType("yearlyTheme").documentId("yearlyTheme")
              ),

            // Regular document types
            S.documentTypeListItem("leader").title("Our Leaders"),
            S.documentTypeListItem("ministries").title("Ministries"),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes.types,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
