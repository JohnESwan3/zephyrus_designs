export default {
  name: "template",
  title: "Template",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "mobileImage",
      title: "Mobile Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "desktopImage",
      title: "Desktop Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "imageGallery",
      title: "Image Gallery",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  orderings: [
    {
      title: "Alphabetical",
      name: "alphabetical",
      by: [{ field: "title", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },

    prepare(project, viewOptions = {}) {
      const title =
        viewOptions.ordering && viewOptions.order.name === "alphabetical"
          ? `${project.title} (${project.title})`
          : project.title;
      return { title: title };
    },
  },
};
