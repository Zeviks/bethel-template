import { defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "leftImage",
      title: "Left image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "rightImage",
      title: "Right image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
