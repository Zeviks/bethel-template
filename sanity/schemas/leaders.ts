import { defineField, defineType, Rule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";
import { BsPersonCircle } from "react-icons/bs";

interface ImageFieldValue {
  asset: {
    _ref: string;
  };
}

interface Fields {
  fullname: string;
  title: string;
}

export default defineType({
  name: "leader",
  title: "Our Leaders",
  type: "document",
  icon: BsPersonCircle,
  fields: [
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      validation: (rule: Rule) =>
        rule.custom((value: ImageFieldValue | undefined) => {
          if (!value) {
            return "Image field cannot be left empty";
          }

          const filetype = getExtension(value.asset._ref);

          if (filetype !== "jpg" && filetype !== "png" && filetype !== "webp") {
            return "Image must be a JPG or PNG or Webp";
          }

          const { width, height } = getImageDimensions(value.asset._ref);

          if (width < 200 || height < 400) {
            return "Image must be at least 200x400 pixels";
          }

          return true;
        }),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "fullname",
      title: "Full Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(10).max(80),
      description: "Enter leader's fullname",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(10).max(80),
      description: "Enter leader's title",
    }),
  ],
  validation: (Rule: Rule) => [
    Rule.custom((fields: Fields) => {
      const missingFields: string[] = [];
      if (!fields.fullname) {
        missingFields.push("Leader's fullname");
      }
      if (!fields.title) {
        missingFields.push("Leader's title");
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
      title: "fullname",
    },
  },
});
