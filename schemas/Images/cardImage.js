export default {
  name: "cardImage",
  title: "Card Image",
  type: "object",
  fields: [
    {
      name: "cardImage",
      title: "Card Image:",
      description: "This is your main image. Dimensions are custom.",
      type: "image",
    },
    {
      name: "imageAltTag",
      title: "Image Alt Tag:",
      description: "Describe what this image is for people who cannot see it.",
      type: "string",
    },
    {
      name: "imageTitle",
      title: "Image Title:",
      description: "Give this image a short title.",
      type: "string",
    },
  ],
}
