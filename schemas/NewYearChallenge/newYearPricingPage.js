import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  DESCRIPTION_1,
  HEADINE_LINE_1,
  HEADINE_LINE_2,
  PRICE_CARD_1,
  PRICE_CARD_2,
  PRICE_CARD_3,
  NUMBER_1,
  STRING_1,
} from "../constants"

export default {
  name: "fwwLiveNewYearPricingPage",
  title: "New Year Pricing Page",
  icon: FWWLiveLogo,
  fieldsets: [{ name: "pricingCards", title: "Pricing Cards" }],
  type: "document",
  fields: [
    {
      name: STRING_1,
      title: "Dev Title",
      type: "string",
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
