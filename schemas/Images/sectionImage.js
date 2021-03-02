export default {
  name: "sectionImage",
  title: "Section Image",
  options: { collapsible: true },
  type: "object",
  fields: [
    {
      name: "mainStandardImage",
      title: "Main Standard Image:",
      description: "This is your main image. Dimensions are custom.",
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
}
