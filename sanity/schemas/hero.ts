import { defineField, defineType, Rule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";
import { BsPersonCircle } from "react-icons/bs";

interface ImageFieldValue {
  asset: {
    _ref: string;
  };
}

interface Fields {
  mainImage: ImageFieldValue;
  mainHeading: string;
  mainHighlightHeading: string;
  subHeading: string;
}

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: BsPersonCircle,
  fields: [
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      validation: (rule: Rule) =>
        rule.custom((value: ImageFieldValue) => {
          if (!value) {
            return "Image field cannot be left empty";
          }

          const filetype = getExtension(value.asset._ref);

          if (filetype !== "jpg" && filetype !== "png" && filetype !== "webp") {
            return "Image must be a JPG or PNG";
          }

          const { width, height } = getImageDimensions(value.asset._ref);

          if (width < 1200 || height < 630) {
            return "Image must be at least 1200x630 pixels";
          }

          return true;
        }),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "mainHeading",
      title: "Main Heading",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
      description: "Enter the main heading",
    }),
    defineField({
      name: "mainHighlightHeading",
      title: "Main Heading Highlight",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(4),
      description: "Enter the main heading",
    }),

    defineField({
      name: "subHeading",
      title: "Sub Heading",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(200),
      description: "Enter the sub heading",
    }),
  ],
  validation: (Rule: Rule) => [
    Rule.custom((fields: Fields) => {
      const missingFields: string[] = [];
      if (!fields.mainImage) {
        missingFields.push("Main image");
      }
      if (!fields.mainHeading) {
        missingFields.push("Main heading");
      }
      if (!fields.subHeading) {
        missingFields.push("Sub heading");
      }
      if (!fields.mainHighlightHeading) {
        missingFields.push("Sub heading");
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
      title: "mainHeading",
    },
  },
});
