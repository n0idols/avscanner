import { defineField, defineType } from "sanity";

export default defineType({
  name: "code",
  title: "Code",
  type: "document",
  fields: [
    defineField({
      name: "code",
      title: "Code",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "code",
      subtitle: "title",
    },
  },
});
