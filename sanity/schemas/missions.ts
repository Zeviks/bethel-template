import { defineField, defineType, Rule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";

interface ImageFieldValue {
  asset: {
    _ref: string;
  };
}

interface Fields {
  mainImage: ImageFieldValue;
  missionTitle: string;
  missionDescription: string;
}

export default defineType({
  name: "mission",
  title: "Missions Section",
  type: "document",
  fields: [
    defineField({
      name: "mainImage",
      title: "Background image",
      type: "image",
      validation: (rule: Rule) =>
        rule.custom((value: ImageFieldValue) => {
          if (!value) {
            return "Image field cannot be left empty";
          }

          const filetype = getExtension(value.asset._ref);

          if (filetype !== "jpg" && filetype !== "png" && filetype !== "webp") {
            return "Image must be a JPG or PNG or webp";
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
      name: "missionTitle",
      title: "Missions Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(50),
      description: "Enter the main heading",
    }),

    defineField({
      name: "missionDescription",
      title: "Missions Description",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(500),
      description: "Enter the sub heading",
    }),
  ],
  validation: (Rule: Rule) => [
    Rule.custom((fields: Fields) => {
      const missingFields: string[] = [];
      if (!fields.mainImage) {
        missingFields.push("Background image");
      }
      if (!fields.missionTitle) {
        missingFields.push("Missions title");
      }
      if (!fields.missionDescription) {
        missingFields.push("Missions description");
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
      title: "missionTitle",
    },
  },
});
