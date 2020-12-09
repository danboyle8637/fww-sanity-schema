import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  BACKGROUND_IMAGE_1,
  COPY_BLOCK_1,
  HEADINE_LINE_1,
  HEADINE_LINE_2,
  HEADINE_LINE_3,
  SOCIAL_SHARE_INFO,
  NUMBER_1,
} from "../constants"

export default {
  name: "newYearCustomerServicePage",
  title: "New Year Customer Service",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Customer Service Headline 1",
      type: "string",
    },
    {
      name: HEADINE_LINE_2,
      title: "Customer Service Headline 2",
      type: "string",
    },
    {
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Background Image of Kindal",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: NUMBER_1,
      title: "Sales Video Id",
      type: "number",
    },
    {
      name: HEADINE_LINE_3,
      title: "Customer Service Join With Confidence Headline",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Customer Service Coopy",
      type: "blockContent",
    },
  ],
}
