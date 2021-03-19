import { HabitLogo } from "../../components/HabitLogo"
import {
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  BACKGROUND_IMAGE_1,
  SOCIAL_SHARE_INFO,
} from "../constants"

export default {
  name: "fwwHabitPricing",
  title: "FWW Habit Pricing Page",
  icon: HabitLogo,
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
      name: COPY_BLOCK_2,
      title: "Get Started for FREE Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "Purchase Programs Individually Section",
      type: "copyBlock",
    },
  ],
  preview: {
    select: {},
    prepare: () => {
      return {
        title: "FWW Habit Pricing Page",
        subtitle: "This is part of the mini-site",
      }
    },
  },
}
