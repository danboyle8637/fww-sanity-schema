export default {
  name: "inPageImage",
  title: "In Page Images",
  type: "object",
  options: { collapsible: true },
  fields: [
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
    {
      name: "standardImage",
      title: "Upload Standard Image:",
      description:
        "This is a standard image that will work on all devices regarless of size.",
      type: "standardImage",
    },
    {
      name: "mobileImage",
      title: "Upload Mobile Image:",
      description: "This is the image that will show on phones.",
      type: "mobileImage",
    },
    {
      name: "iPadImage",
      title: "Upload iPad Image:",
      description: "This is the image that will show on iPads and tablets.",
      type: "iPadImage",
    },
    {
      name: "laptopImage",
      title: "Upload Laptop Image:",
      description: "This is the image that will show on laptops and bigger.",
      type: "laptopImage",
    },
  ],
};
