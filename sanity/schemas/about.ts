import { defineField, defineType, Rule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";
import { BiChurch } from "react-icons/bi";

interface ImageFieldValue {
  asset: {
    _ref: string;
  };
}

interface Fields {
  leftImage: string;
  address: string;
  sectionHeading: string;
  rightImage: string;
  serviceTime1: string;
  serviceTime2: string;
}

export default defineType({
  name: "about",
  title: "About Section",
  type: "document",
  icon: BiChurch,
  fields: [
    defineField({
      name: "sectionHeading",
      title: "Section Heading",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(200),
      description: "Enter the section heading here",
    }),
    defineField({
      name: "leftImage",
      title: "Left image",
      type: "image",
      validation: (rule: Rule) =>
        rule.custom((value: ImageFieldValue | undefined) => {
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
      name: "address",
      title: "Address",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
      description: "Enter the address",
    }),

    defineField({
      name: "rightImage",
      title: "Right image",
      type: "image",
      validation: (rule: Rule) =>
        rule.custom((value: ImageFieldValue | undefined) => {
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
      name: "serviceTime1",
      title: "Service Time 1",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
      description: "Enter a service, for example Wednesdays at 7pm",
    }),
    defineField({
      name: "serviceTime2",
      title: "Service Time 2",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(80),
      description: "Enter a service, for example Sundays at 10am",
    }),
  ],

  validation: (Rule: Rule) => [
    Rule.custom((fields: Fields) => {
      const missingFields: string[] = [];
      if (!fields.rightImage) {
        missingFields.push("Left image is missing");
      }
      if (!fields.leftImage) {
        missingFields.push("Right image is missing");
      }
      if (!fields.address) {
        missingFields.push("Address is missing");
      }
      if (!fields.serviceTime1) {
        missingFields.push("Service 1 is missing");
      }
      if (!fields.serviceTime2) {
        missingFields.push("Service 2 is missing");
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
      title: "about",
    },
  },
});
