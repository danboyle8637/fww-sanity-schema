import { PlanSmartEatRealLogo } from "../../components/PlanSmartEatRealLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
  COPY_BLOCK_7,
  COPY_BLOCK_8,
  BACKGROUND_IMAGE_1,
  STANDARD_IMAGE_1,
  SOCIAL_SHARE_INFO,
  STANDARD_IMAGE_2,
  STANDARD_IMAGE_3,
} from "../constants"

export default {
  name: "planSmartEatRealBenefits",
  title: "Plan Smart Eat Real Benefits Page",
  icon: PlanSmartEatRealLogo,
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
      name: COPY_BLOCK_1,
      title: "Weekly Meal Plans Section",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_3,
      title: "Weekly Meal Plan Pictures",
      type: "inPageImage",
    },
    {
      name: COPY_BLOCK_2,
      title: "108 Total Recipes Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "Recipe Details Aside Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Weekly Coaching Calls Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "Coaching Access When You Need It Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Amazing Community Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_7,
      title: "Important Recipe Information Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_8,
      title: "Call To Action Section",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_2,
      title: "Plan Smart Eat Real PDF Cover Image",
      type: "inPageImage",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Video Preload Poster Image",
      type: "standardImage",
    },
  ],
  preview: {
    select: {},
    prepare: () => {
      return {
        title: "Plan Smart Eat Real Benefits Page",
        subtitle: "This is part of the mini-site",
      }
    },
  },
}
