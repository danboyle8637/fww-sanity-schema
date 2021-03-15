import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  COPY_BLOCK_1,
  BACKGROUND_IMAGE_1,
  SOCIAL_SHARE_INFO,
} from "../constants"

export default {
  name: "fwwLivePricing",
  title: "FWW Live Pricing Page",
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
      title: "Pricing Information Section",
      type: "copyBlock",
    },
  ],
  preview: {
    select: {},
    prepare: () => {
      return {
        title: "FWW LIVE Pricing Page",
        subtitle: "This is part of the mini-site",
      }
    },
  },
}
