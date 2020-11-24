import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  DESCRIPTION_1,
  HEADINE_LINE_1,
  HEADINE_LINE_2,
  HEADINE_LINE_3,
  HEADINE_LINE_4,
  PRICE_CARD_1,
  PRICE_CARD_2,
  PRICE_CARD_3,
  NUMBER_1,
  SOCIAL_SHARE_INFO,
  BACKGROUND_IMAGE_1,
  DESCRIPTION_2,
} from "../constants"

export default {
  name: "fwwLiveNewYearPricingPage",
  title: "New Year Pricing Page",
  icon: FWWLiveLogo,
  fieldsets: [{ name: "pricingCards", title: "Pricing Cards" }],
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_3,
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
      title: "Pricing Sales Video Id",
      type: "number",
    },
    {
      name: HEADINE_LINE_1,
      title: "Early Bird Headline",
      description:
        "This is probably just going to be Early Bird Prcing... but maybe we will change it.",
      type: "string",
    },
    {
      name: DESCRIPTION_2,
      title: "Early Bird Description",
      description:
        "Just explain when they sign up early... they get to come into the group early.",
      type: "text",
      rows: 5,
    },
    {
      name: PRICE_CARD_1,
      title: "Early Bird Price Card",
      description:
        "This is not really a price card. It is a small card that just highlights the price and signals it as a deposit.",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: HEADINE_LINE_2,
      title: "Choose Pricing Plan",
      description:
        "This is most likely going to be Choose Pricing Plan, but we might change things up.",
      type: "string",
    },
    {
      name: DESCRIPTION_1,
      title: "Choose Pricing Plan Description",
      description:
        "Explain to them what to do and what the difference is between a single and split payment.",
      type: "text",
      rows: 5,
    },
    {
      name: PRICE_CARD_2,
      title: "Single Payment Card",
      description:
        "This is the single payment card that for the time being will show only the early bird price.",
      type: "reference",
      to: [{ type: "priceCards" }],
      fieldset: "pricingCards",
    },
    {
      name: PRICE_CARD_3,
      title: "Split Payment Card",
      description:
        "This is the split payment card that for the time being will show only the early bird price.",
      type: "reference",
      to: [{ type: "priceCards" }],
      fieldset: "pricingCards",
    },
  ],
}
