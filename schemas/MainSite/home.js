import { FWWLogo } from "../../components/FWWLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  BACKGROUND_IMAGE_1,
  BACKGROUND_IMAGE_3,
  SOCIAL_SHARE_INFO,
  STANDARD_IMAGE_1,
  STANDARD_IMAGE_2,
  STANDARD_IMAGE_3,
  STANDARD_IMAGE_4,
} from "../constants"

export default {
  name: "mainSiteHome",
  title: "Home Page",
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
      name: COPY_BLOCK_1,
      title: "FWW LIVE Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "FWW Habit Section:",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Nutrition Card Recipe Image 1",
      type: "sectionImage",
    },
    {
      name: STANDARD_IMAGE_2,
      title: "Nutrition Card Recipe Image 2",
      type: "sectionImage",
    },
    {
      name: COPY_BLOCK_3,
      title: "Plan Smart Eat Real Section:",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_3,
      title: "Kettlebell Crunch Image",
      type: "sectionImage",
    },
    {
      name: COPY_BLOCK_4,
      title: "Kettlebell Crunch Section:",
      type: "copyBlock",
    },
    {
      name: BACKGROUND_IMAGE_3,
      title: "Private Coaching Image",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: COPY_BLOCK_5,
      title: "Private Coaching Section:",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_4,
      title: "Video Preload Poster Image",
      type: "standardImage",
    },
  ],
  preview: {
    select: {},
    prepare: () => {
      return {
        title: "Home Page",
        subtitle: "Main site home page",
      }
    },
  },
}
