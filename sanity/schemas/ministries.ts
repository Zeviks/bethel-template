import { defineField, defineType, Rule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";
import { RiCrossFill } from "react-icons/ri";

interface ImageFieldValue {
  asset: {
    _ref: string;
  };
}

interface Fields {
  name: string;
  desc: string;
  mainImage: string;
}

export default defineType({
  name: "ministries",
  title: "Our Ministries",
  type: "document",
  icon: RiCrossFill,
  fields: [
    defineField({
      name: "name",
      title: "Ministry's Name",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(5).max(80),
      description: "Enter the Ministry's name",
    }),
    defineField({
      name: "desc",
      title: "Ministry's Description",
      type: "string",
      validation: (Rule: Rule) => Rule.required().min(5).max(80),
      description: "Enter the Ministry's description",
    }),
    defineField({
      name: "mainImage",
      title: "Ministry's image",
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
  ],
  validation: (Rule: Rule) => [
    Rule.custom((fields: Fields) => {
      const missingFields: string[] = [];
      if (!fields.name) {
        missingFields.push("Ministry's Name");
      }
      if (!fields.desc) {
        missingFields.push("Ministry's Description");
      }
      if (!fields.mainImage) {
        missingFields.push("Ministry's Main Image");
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
      title: "name",
    },
  },
});
