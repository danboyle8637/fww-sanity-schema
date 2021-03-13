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
  BACKGROUND_IMAGE_2,
  STANDARD_IMAGE_1,
  SOCIAL_SHARE_INFO,
  STANDARD_IMAGE_2,
  STANDARD_IMAGE_3,
} from "../constants"

export default {
  name: "planSmartEatRealAbout",
  title: "Plan Smart Eat Real About",
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
      title: "Problem Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "No More Confusion Section Part 1",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_8,
      title: "No More Confusion Section Part 2",
      type: "copyBlock",
    },
    {
      name: BACKGROUND_IMAGE_2,
      title: "The Hard Truth Background",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: COPY_BLOCK_3,
      title: "The Hard Truth Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Coaching and Community Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "No False News Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Plus More Section Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_7,
      title: "Call To Action Section",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_3,
      title: "Plan Smart Eat App Cover Image",
      type: "inPageImage",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Plan Smart Eat Real PDF Image",
      type: "inPageImage",
    },
    {
      name: STANDARD_IMAGE_2,
      title: "Video Preload Poster Image",
      type: "standardImage",
    },
  ],
  preview: {
    select: {},
    prepare: () => {
      return {
        title: "Plan Smart Eat Real About Page",
        subtitle: "This is part of the mini-site",
      }
    },
  },
}
