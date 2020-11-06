import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  HEADINE_LINE_1,
  HEADINE_LINE_2,
  BACKGROUND_IMAGE_1,
  NUMBER_1,
  STRING_1,
  HEADINE_LINE_3,
  SITE_WIDE_OFFER_SECTION,
} from "../constants"

export default {
  name: "fwwLiveNewYearNutritionPage",
  title: "New Year Nutrition Page",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Page Headline",
      description: "This is the main page headline.",
      type: "string",
    },
    {
      name: HEADINE_LINE_2,
      title: "Page Sub-Headline",
      description:
        "This is the page subheadline. Most likely just the name of the challenge.",
      type: "string",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Header Background Image",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: NUMBER_1,
      title: "Sales Video Id",
      type: "number",
    },
    {
      name: STRING_1,
      title: "Button Text Variation 1",
      description:
        "This is a variation of button text that will used across this mini-site.",
      type: "string",
    },
    {
      name: HEADINE_LINE_3,
      title: "Feature List Headline",
      description:
        "The headline that is right above the beginning of the feature and benefit list.",
      type: "string",
    },
    {
      name: SITE_WIDE_OFFER_SECTION,
      title: "Offer to Join the Challenge",
      description: "Create copy that is unique to what is on this page.",
      type: "siteWideOfferSection",
    },
  ],
}
