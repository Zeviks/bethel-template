import { defineField, defineType } from "sanity";

export default defineType({
  name: "yearlyTheme",
  title: "Yearly Section",
  type: "document",
  description:
    "Enter the yearly theme below, ensure to fill in all of the fields.",
  fields: [
    defineField({
      name: "themeTitle",
      title: "Theme Title",
      type: "string",
    }),
    defineField({
      name: "themeYear",
      title: "Theme Year",
      type: "number",
    }),
    defineField({
      name: "themeVerse",
      title: "Theme's Verse",
      type: "string",
    }),
    defineField({
      name: "themeVerseSource",
      title: "Theme's Verse Source",
      type: "string",
    }),
  ],
});
