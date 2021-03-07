import FWWLiveLogo from "../../components/FWWLiveLogo"
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
} from "../constants"

export default {
  name: "fwwHabitAbout",
  title: "FWW Habit About Page",
  icon: FWWLiveLogo,
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
      title: "The Problem Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "Not Being Consistent Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "Boring Workouts Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Getting Stuck in Plateaus Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "Being All Alone Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Being Confused Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_7,
      title: "Call To Action Section",
      type: "copyBlock",
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
        title: "FWW Habit About Page",
        subtitle: "This is part of the mini-site",
      }
    },
  },
}
