import { defineField, defineType, Rule } from "sanity";

interface Fields {
  leadersTitle: string;
  leadersDescription: string;
}

export default defineType({
  name: "leadersHeading",
  title: "Leaders Section Heading",
  type: "document",
  fields: [
    defineField({
      name: "leadersTitle",
      title: "Leaders Title",
      type: "string",
      validation: (Rule) => Rule.required().min(2).max(50),
      description: "Enter the leaders title",
    }),

    defineField({
      name: "leadersDescription",
      title: "Leaders Description",
      type: "string",
      validation: (Rule) => Rule.required().min(10).max(500),
      description: "Enter the leaders description",
    }),
  ],
  validation: (Rule: Rule) => [
    Rule.custom((fields: Fields) => {
      const missingFields: string[] = [];

      if (!fields.leadersTitle) {
        missingFields.push("Leaders title");
      }
      if (!fields.leadersDescription) {
        missingFields.push("Leaders description");
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
      title: "leadersTitle",
    },
  },
});
