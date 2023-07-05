import { defineField, defineType, Rule } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";

interface ImageFieldValue {
  asset: {
    _ref: string;
  };
}

interface Fields {
  eventPageImage: ImageFieldValue;
  eventCalendarImage: ImageFieldValue;
}

export default defineType({
  name: "event",
  title: "Events Page",
  type: "document",
  fields: [
    defineField({
      name: "eventPageImage",
      title: "Event's Page Image",
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
      name: "eventCalendarImage",
      title: "Event's Calendar Image",
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
  ],
  validation: (Rule: Rule) => [
    Rule.custom((fields: Fields) => {
      const missingFields: string[] = [];
      if (!fields.eventPageImage) {
        missingFields.push("Event's Page Image");
      }
      if (!fields.eventCalendarImage) {
        missingFields.push("Event's Calendar Image");
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
      title: "event",
    },
  },
});
