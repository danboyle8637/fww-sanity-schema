import {
  STANDARD_IMAGE_1,
  STANDARD_IMAGE_2,
  STANDARD_IMAGE_3,
} from "../constants";

export default {
  name: "articleSchema",
  title: "Article Schema",
  type: "object",
  options: { collapsible: true },
  fields: [
    {
      name: STANDARD_IMAGE_1,
      title: "Image 16 : 9",
      description: "The 16 : 9 image ratio",
      type: "image",
    },
    {
      name: STANDARD_IMAGE_2,
      title: "Image 4 : 3",
      description: "The 4 : 3 image ratio",
      type: "image",
    },
    {
      name: STANDARD_IMAGE_3,
      title: "Image 1 : 1",
      description: "The 1 : 1 image ratio",
      type: "image",
    },
  ],
};
