import { FWWLogo } from "../components/FWWLogo"
import { HEADINE_LINE_1, SOCIAL_SHARE_INFO } from "./constants"

export default {
  name: "seoData",
  title: "SEO Data for Pages",
  icon: FWWLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "What Page Does This Belong To?",
      type: "string",
    },
    {
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
  ],
  preview: {
    select: {
      title: HEADINE_LINE_1,
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "Social Share Data",
      }
    },
  },
}
