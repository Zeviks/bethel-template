import { defineField, defineType } from "sanity";

export default defineType({
  name: "ministries",
  title: "Ministires",
  type: "document",
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
