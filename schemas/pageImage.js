export default {
  name: "pageImage",
  title: "Page Image",
  type: "object",
  fields: [
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
