import { FaPizzaSlice } from "react-icons/fa"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  BACKGROUND_IMAGE_1,
} from "../constants"

export default {
  name: "privateNutritionCoaching",
  title: "Private Nutrition Coaching",
  icon: FaPizzaSlice,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: "mainHeadline",
      title: "Main Headline:",
      description: "This is the main headline for the landing page.",
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
      name: "salesVideoId",
      title: "Sales Video Id:",
      type: "number",
    },
    {
      name: "purchaseButtonText1",
      title: "First Purchase Button Text",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Audience Call Out Section:",
      description:
        "Copy that calls out to the audience we want to target with this offer.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "How Private Coaching Works:",
      description:
        "Explain with great bullets how private coaching works and what they get.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "Recap Copy:",
      description: "Explain why this is so important and try to hit it hard.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Call To Action to Fill Out The Form:",
      description:
        "Tell them to fill out the form there is nothing to lose right now.",
      type: "copyBlock",
    },
  ],
}
