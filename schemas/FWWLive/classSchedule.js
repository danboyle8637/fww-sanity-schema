import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  BACKGROUND_IMAGE_1,
  SOCIAL_SHARE_INFO,
} from "../constants"

export default {
  name: "fwwLiveClassSchedule",
  title: "FWW Live Class Schedule Page",
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
      title: "Workouts Recorded Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "Call To Action Section",
      type: "copyBlock",
    },
  ],
  preview: {
    select: {},
    prepare: () => {
      return {
        title: "FWW LIVE Class Schedule Page",
        subtitle: "This is part of the mini-site",
      }
    },
  },
}
