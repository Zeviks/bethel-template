import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema as schemaTypes } from "./sanity/schema";

import { BiChurch } from "react-icons/bi";
import { AiFillHome, AiFillEdit } from "react-icons/ai";
import { BsGlobeAmericas, BsImage } from "react-icons/bs";
import { MdTitle } from "react-icons/md";

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
            S.listItem()
              .title("Hero")
              .id("hero")
              .icon(AiFillHome)
              .child(S.document().schemaType("hero").documentId("hero")),
            S.listItem()
              .title("Our Church Section")
              .icon(BiChurch)
              .id("about")
              .child(S.document().schemaType("about").documentId("about")),
            S.listItem()
              .title("Yearly Theme")
              .id("yearlyTheme")
              .icon(AiFillEdit)
              .child(
                S.document().schemaType("yearlyTheme").documentId("yearlyTheme")
              ),
            S.listItem()
              .title("Mission Section")
              .id("mission")
              .icon(BsGlobeAmericas)
              .child(S.document().schemaType("mission").documentId("mission")),
            // Regular document types
            S.documentTypeListItem("leader").title("Our Leaders"),
            S.documentTypeListItem("ministries").title("Our Ministries"),
            S.listItem()
              .title("Leaders Heading")
              .id("leadersHeading")
              .icon(MdTitle)
              .child(
                S.document()
                  .schemaType("leadersHeading")
                  .documentId("leadersHeading")
              ),

            S.listItem()
              .title("Ministries Page")
              .id("ministriesPageImage")
              .icon(BsImage)
              .child(
                S.document()
                  .schemaType("ministriesPageImage")
                  .documentId("ministriesPageImage")
              ),
            S.listItem()
              .title("Events Page")
              .id("event")
              .icon(BsImage)
              .child(S.document().schemaType("event").documentId("event")),
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
