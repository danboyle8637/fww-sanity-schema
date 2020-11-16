import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  HEADINE_LINE_1,
  NUMBER_1,
  SITE_WIDE_OFFER_SECTION,
  SOCIAL_SHARE_INFO,
  STRING_1,
} from "../constants"

export default {
  name: "newYearSuccessPage",
  title: "New Year Success Page",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Success Headline",
      type: "string",
    },
    {
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: NUMBER_1,
      title: "Sales Video Id",
      type: "number",
    },
    {
      name: STRING_1,
      title: "Video Button Text",
      type: "string",
    },
    {
      name: SITE_WIDE_OFFER_SECTION,
      title: "Offer to Join the Challenge",
      description: "Create copy taht sells the visitor to join this program.",
      type: "siteWideOfferSection",
    },
  ],
}
