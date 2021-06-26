import { FWWLogo } from "../../components/FWWLogo"
import {
  HEADINE_LINE_1,
  BACKGROUND_IMAGE_1,
  BACKGROUND_IMAGE_2,
  BACKGROUND_IMAGE_3,
  NUMBER_1,
  NUMBER_2,
  NUMBER_3,
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
  COPY_BLOCK_7,
  COPY_BLOCK_8,
  COPY_BLOCK_9,
  COPY_BLOCK_10,
  STANDARD_IMAGE_1,
  STANDARD_IMAGE_2,
  STANDARD_IMAGE_3,
  STANDARD_IMAGE_4,
} from "../constants"

export default {
  name: "fwwSalesPage",
  title: "FWW Sales Page",
  icon: FWWLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Landing Page Headline",
      description: "What is this landing page for?",
      type: "string",
    },
    {
      name: "socialShareInformation",
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Headline Background:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: BACKGROUND_IMAGE_2,
      title: "Background Image:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: BACKGROUND_IMAGE_3,
      title: "Background Image:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: NUMBER_1,
      title: "Video Id:",
      type: "number",
    },
    {
      name: NUMBER_2,
      title: "Video Id:",
      type: "number",
    },
    {
      name: NUMBER_3,
      title: "Video Id:",
      type: "number",
    },
    {
      name: COPY_BLOCK_1,
      title: "Copy Block 1",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "Copy Block 2",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "Copy Block 3",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Copy Block 4",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "Copy Block 5",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Copy Block 6",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_7,
      title: "Copy Block 7",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_8,
      title: "Copy Block 8",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_9,
      title: "Copy Block 9",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_10,
      title: "Copy Block 10",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Images",
      type: "inPageImage",
    },
    {
      name: STANDARD_IMAGE_2,
      title: "Images",
      type: "inPageImage",
    },
    {
      name: STANDARD_IMAGE_3,
      title: "Images",
      type: "inPageImage",
    },
    {
      name: STANDARD_IMAGE_4,
      title: "Images",
      type: "inPageImage",
    },
  ],
  preview: {
    select: {
      title: HEADINE_LINE_1,
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "This is the base landing page for copy.",
      }
    },
  },
}
