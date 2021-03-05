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
  COPY_BLOCK_9,
  COPY_BLOCK_10,
  BACKGROUND_IMAGE_1,
  SOCIAL_SHARE_INFO,
  STANDARD_IMAGE_1,
  STANDARD_IMAGE_2,
  STANDARD_IMAGE_3,
  STANDARD_IMAGE_4,
} from "../constants"

export default {
  name: "fwwLiveBenefits",
  title: "FWW Live Benefits Page",
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
      title: "Live Class Schedule Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "Every Workout Is Recorded Section",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Recorded Workout Images 1",
      type: "inPageImage",
    },
    {
      name: STANDARD_IMAGE_2,
      title: "Recorded Workout Images 2",
      type: "inPageImage",
    },
    {
      name: COPY_BLOCK_3,
      title: "Equipment Needed Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Coaching Class Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "Talk to Your Trainers",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Weekly Live Coaching Calls",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_7,
      title: "8 Week Training Plans Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_8,
      title: "Plus So Much More Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_9,
      title: "Call To Action Section",
      type: "copyBlock",
    },
  ],
}
