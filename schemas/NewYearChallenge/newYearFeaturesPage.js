import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  HEADINE_LINE_4,
  SITE_WIDE_OFFER_SECTION,
  HEADINE_LINE_1,
  HEADINE_LINE_2,
  BACKGROUND_IMAGE_1,
  NUMBER_1,
  STRING_1,
  STRING_2,
  STRING_3,
  STRING_4,
  STRING_5,
  STRING_6,
  STRING_7,
  HEADINE_LINE_3,
  HEADINE_LINE_5,
  SOCIAL_SHARE_INFO,
} from "../constants"

export default {
  name: "fwwLiveNewYearFeaturesPage",
  title: "New Year Features Page",
  icon: FWWLiveLogo,
  fieldsets: [{ name: "plusMore", title: "Plus More Benefits" }],
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Page Headline 1",
      description: "This is the main page headline.",
      type: "string",
    },
    {
      name: HEADINE_LINE_5,
      title: "Page Headline 2",
      description: "This is going to be Yours",
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
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
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
      name: HEADINE_LINE_4,
      title: "Plus More Headline",
      description:
        "The headline that will list even more great things they get if they join.",
      type: "string",
    },
    {
      name: STRING_2,
      title: "Plus More Benefit 1",
      description:
        "A feature with a possible benefit if you can fit it in there.",
      type: "string",
      fieldset: "plusMore",
    },
    {
      name: STRING_3,
      title: "Plus More Benefit 2",
      description:
        "A feature with a possible benefit if you can fit it in there.",
      type: "string",
      fieldset: "plusMore",
    },
    {
      name: STRING_4,
      title: "Plus More Benefit 3",
      description:
        "A feature with a possible benefit if you can fit it in there.",
      type: "string",
      fieldset: "plusMore",
    },
    {
      name: STRING_5,
      title: "Plus More Benefit 4",
      description:
        "A feature with a possible benefit if you can fit it in there.",
      type: "string",
      fieldset: "plusMore",
    },
    {
      name: STRING_6,
      title: "Plus More Benefit 5",
      description:
        "A feature with a possible benefit if you can fit it in there.",
      type: "string",
      fieldset: "plusMore",
    },
    {
      name: STRING_7,
      title: "Plus More Benefit 6",
      description:
        "A feature with a possible benefit if you can fit it in there.",
      type: "string",
      fieldset: "plusMore",
    },
    {
      name: SITE_WIDE_OFFER_SECTION,
      title: "Offer to Join the Challenge",
      description: "Create copy that is unique to what is on this page.",
      type: "siteWideOfferSection",
    },
  ],
}
