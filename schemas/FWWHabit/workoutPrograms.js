import { HabitLogo } from "../../components/HabitLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
  BACKGROUND_IMAGE_1,
  SOCIAL_SHARE_INFO,
} from "../constants"

export default {
  name: "fwwHabitWorkoutPrograms",
  title: "FWW Habit Workout Programs Page",
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
      name: COPY_BLOCK_1,
      title: "The Problem Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "Free Workouts Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "Coaching Programs Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Premium Programs Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "Workout With Us Now Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Call To Action Section",
      type: "copyBlock",
    },
  ],
  preview: {
    select: {},
    prepare: () => {
      return {
        title: "FWW Habit Workuot Program Page",
        subtitle: "This is part of the mini-site",
      }
    },
  },
}
