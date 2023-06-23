import { defineField, defineType } from "sanity";

export default defineType({
  name: "yearlyTheme",
  title: "Yearly Section",
  type: "document",
  fields: [
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
