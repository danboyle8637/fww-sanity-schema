import { FWWLogo } from "../../components/FWWLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
  COPY_BLOCK_7,
  BACKGROUND_IMAGE_1,
  STANDARD_IMAGE_1,
  SOCIAL_SHARE_INFO,
  HEADINE_LINE_1,
} from "../constants"

export default {
  name: "baseLandingPage",
  title: "Base Landing Page",
  icon: FWWLogo,
  type: "document",
  fields: [
    {
      name: BACKGROUND_IMAGE_1,
      title: "Header Section Image",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: HEADINE_LINE_1,
      title: "Landing Page Headline",
      description: "What is this landing page for?",
      type: "string",
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
      name: STANDARD_IMAGE_1,
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
