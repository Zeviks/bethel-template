import { defineField, defineType } from "sanity";

export default defineType({
  name: "yearlyTheme",
  title: "Yearly Section",
  type: "document",

  fields: [
    defineField({
      name: "themeTitle",
      title: "Theme Title",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
      description: "Enter the yearly theme's title",
    }),
    defineField({
      name: "themeYear",
      title: "Theme Year",
      type: "number",
      validation: (Rule) => Rule.required(),
      description: "Enter the yearly theme's year",
    }),
    defineField({
      name: "themeVerse",
      title: "Theme's Verse",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(500),
      description: "Enter the yearly theme's verse",
    }),
    defineField({
      name: "themeVerseSource",
      title: "Theme's Verse Source",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(35),
      description: "Enter the yearly theme's verse source",
    }),
  ],
  validation: (Rule) => [
    Rule.custom((fields) => {
      const missingFields = [];
      if (!fields.themeTitle) {
        missingFields.push("Theme Title");
      }
      if (!fields.themeYear) {
        missingFields.push("2023");
      }
      if (!fields.themeVerse) {
        missingFields.push("Theme's Verse");
      }
      if (!fields.themeVerseSource) {
        missingFields.push("Theme's Verse Source");
      }
      if (missingFields.length > 0) {
        return `The following fields must be filled: ${missingFields.join(
          ", "
        )}`;
      }
      return true;
    }),
  ],
  preview: {
    select: {
      title: "themeTitle",
    },
  },
});
