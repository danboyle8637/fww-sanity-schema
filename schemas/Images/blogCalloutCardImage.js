import { FaImage } from "react-icons/fa";

export default {
  name: "blogCalloutCardImage",
  title: "Blog Callout Card Image",
  icon: FaImage,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "Add a title so you know what card these are.",
      type: "string",
    },
    {
      name: "tinyImage",
      title: "Upload a Tiny Image:",
      description: "This is a tiny image for lazy loading. Width = 50",
      type: "image",
    },
    {
      name: "mainImage",
      title: "Main Image:",
      description: "This is your main image. 1200x680",
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
