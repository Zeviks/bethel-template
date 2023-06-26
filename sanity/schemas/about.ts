import { defineField, defineType } from "sanity";
import { getExtension, getImageDimensions } from "@sanity/asset-utils";

export default defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    defineField({
      name: "leftImage",
      title: "Left image",
      type: "image",
      validation: (rule) =>
        rule.custom((value) => {
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
      name: "rightImage",
      title: "Right image",
      type: "image",
      validation: (rule) =>
        rule.custom((value) => {
          if (!value) {
            return "Image field cannot be left empty";
          }

          const filetype = getExtension(value.asset._ref);

          if (filetype !== "jpg" && filetype !== "png") {
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
});
