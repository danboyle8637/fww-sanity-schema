import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  BACKGROUND_IMAGE_1,
  HEADINE_LINE_1,
  HEADINE_LINE_2,
  HEADINE_LINE_3,
  NUMBER_1,
  STRING_1,
  SITE_WIDE_OFFER_SECTION,
  HEADINE_LINE_4,
} from "../constants"

export default {
  name: "fwwLiveNewYearHomePage",
  title: "New Year Home Page",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Page Headline 1",
      description: "This is the main page headline part 1.",
      type: "string",
    },
    {
      name: HEADINE_LINE_4,
      title: "Page Headline 2",
      description: "This is the main page headline... Comeback.",
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
      title: "Card Navigation Headline",
      description:
        "The headline that is right above the cards that act as a navigation for the mini-site.",
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
