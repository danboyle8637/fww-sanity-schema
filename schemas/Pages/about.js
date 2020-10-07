import { FaRegHeart } from "react-icons/fa"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  TESTIMONIAL_1,
  TESTIMONIAL_2,
  TESTIMONIAL_3,
  BACKGROUND_IMAGE_1,
  BACKGROUND_IMAGE_2,
  BACKGROUND_IMAGE_3,
  BACKGROUND_IMAGE_4,
} from "../constants"

export default {
  name: "aboutPage",
  title: "About Page",
  icon: FaRegHeart,
  type: "document",
  fieldsets: [{ name: "videoSection", title: "Video Section:" }],
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Headline Section Image",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: "socialShareInformation",
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: COPY_BLOCK_1,
      title: "About Main Headline and Lead Copy:",
      type: "copyBlock",
    },
    {
      name: "coreBeliefsHeadline",
      title: "Core Beleifs Headline:",
      description:
        "This headline introduces the video where we share our style and beliefs about training as a busy woman.",
      type: "string",
      fieldset: "videoSection",
    },
    {
      name: "videoId",
      title: "Vimeo Video Id:",
      type: "number",
      fieldset: "videoSection",
    },
    {
      name: COPY_BLOCK_2,
      title: "Kindal Certifications:",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "Dan Certifications:",
      type: "copyBlock",
    },
    {
      name: BACKGROUND_IMAGE_2,
      title: "Kindal Mobile Background Image:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: BACKGROUND_IMAGE_3,
      title: "Dan Mobile Background Image:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: BACKGROUND_IMAGE_4,
      title: "Kindal and Dan Tablet/Laptop Background Image:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: TESTIMONIAL_1,
      title: "Testimonial:",
      description:
        "This testimonial heeps praise on us as people and trainers, not about programs.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
    {
      name: TESTIMONIAL_2,
      title: "Testimonial:",
      description:
        "This testimonial heeps praise on us as people and trainers, not about programs.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
    {
      name: TESTIMONIAL_3,
      title: "Testimonial:",
      description:
        "This testimonial heeps praise on us as people and trainers, not about programs.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
  ],
}
