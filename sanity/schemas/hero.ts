import { defineField, defineType } from "sanity";
import defaultImage from "@/utils/defaultImage";

const defaultImageValidation = (rule, context) => {
  if (!context.document.mainImage) {
    context.parent.mainImage = defaultImage;
  }
  return { valid: true };
};

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.custom(defaultImageValidation),
    }),
  ],
});
