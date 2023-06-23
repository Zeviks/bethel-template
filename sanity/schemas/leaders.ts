import { defineField, defineType } from "sanity";

export default defineType({
  name: "leader",
  title: "Our Leaders",
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
      name: "fullname",
      title: "Full Name",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
});
