import { defineField, defineType } from "sanity";

export default defineType({
  name: "sample",
  title: "sample",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "desc",
      title: "Desc",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
