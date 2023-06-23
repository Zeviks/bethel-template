import { defineField, defineType } from "sanity";

export default defineType({
  name: "ministries",
  title: "Ministires",
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
    defineField({
      name: "ministryName",
      title: "Name of ministry",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Minsitry description",
      type: "string",
    }),
  ],
});
