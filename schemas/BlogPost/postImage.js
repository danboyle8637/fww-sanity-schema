export default {
  name: "postImage",
  title: "Post Image",
  type: "object",
  fields: [
    {
      name: "tinyImage",
      title: "Upload a Tiny Image:",
      description: "This is a tiny image for lazy loading. Width = 50",
      type: "image",
    },
    {
      name: "mainImage",
      title: "Main Image:",
      description: "This is your main image.",
      type: "image",
    },
    {
      name: "imageTitle",
      title: "Image Title:",
      description: "Give this image a short title.",
      type: "string",
    },
    {
      name: "imageAltTag",
      title: "Image Alt Tag:",
      description: "Describe what this image is for people who cannot see it.",
      type: "string",
    },
  ],
};
