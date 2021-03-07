import FWWLiveLogo from "../../components/FWWLiveLogo"
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
} from "../constants"

export default {
  name: "fwwHabitBenefits",
  title: "FWW Habit Benefits Page",
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
      title: "30 Day Programs Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "Hundreds of Custom Workouts Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "Intense Workouts Aside Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Coaching Programs Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "Tracking That Matters Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Coaching and Support Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_7,
      title: "Community Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_8,
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
        title: "FWW Habit Benefits Page",
        subtitle: "This is part of the mini-site",
      }
    },
  },
}
