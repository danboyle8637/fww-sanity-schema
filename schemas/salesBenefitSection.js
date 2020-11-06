import {
  COPY_BLOCK_1,
  HEADINE_LINE_1,
  NUMBER_1,
  STANDARD_IMAGE_1,
  STRING_1,
  STRING_2,
} from "./constants"

export default {
  name: "salesBenefitSection",
  title: "Sales Page Benefit Section",
  type: "object",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Section Headline",
      description:
        "The headline for the benefit section. Think about what type of section you're building.",
      type: "string",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Section Image",
      description:
        "This is an optional image or images that will be used in this section.",
      type: "inPageImage",
    },
    {
      name: NUMBER_1,
      title: "Video Id",
      description:
        "If the section has a video, this is the video id from Vimeo.",
      type: "number",
    },
    {
      name: STRING_1,
      title: "Button Text",
      description: "If the section has a cta button. Enter it's text.",
      type: "string",
    },
    {
      name: STRING_2,
      title: "Button Slug",
      description: "If the button goes to another page, enter the slug here.",
      type: "url",
    },
    {
      name: COPY_BLOCK_1,
      title: "Benefit Copy",
      description:
        "Enter the copy for this benefit section. Solve a problem and keep things on point.",
      type: "blockContent",
    },
  ],
}
