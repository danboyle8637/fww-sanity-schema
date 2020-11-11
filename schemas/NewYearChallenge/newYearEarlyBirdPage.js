import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  BACKGROUND_IMAGE_1,
  COPY_BLOCK_1,
  HEADINE_LINE_1,
  SOCIAL_SHARE_INFO,
} from "../constants"

export default {
  name: "newYearEarlyBirdPage",
  title: "New Year Early Bird",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Early Bird Headline",
      type: "string",
    },
    {
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: COPY_BLOCK_1,
      title: "Call To Action Coopy",
      type: "blockContent",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Background Image of Kindal",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
  ],
}
