import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  DESCRIPTION_1,
  HEADINE_LINE_1,
  HEADINE_LINE_2,
  HEADINE_LINE_3,
  HEADINE_LINE_4,
  HEADINE_LINE_5,
  HEADINE_LINE_6,
  HEADINE_LINE_7,
  PRICE_CARD_1,
  NUMBER_1,
  SOCIAL_SHARE_INFO,
  BACKGROUND_IMAGE_1,
  DESCRIPTION_2,
  DESCRIPTION_3,
  COPY_BLOCK_1,
  STRING_1,
  PRICE_CARD_2,
  STRING_2,
  DESCRIPTION_4,
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
      name: HEADINE_LINE_5,
      title: "Full Price Headline",
      type: "string",
    },
    {
      name: DESCRIPTION_3,
      title: "Full Price Description",
      description:
        "Explain what the full price is so that have that for reference from the start.",
      type: "text",
      rows: 5,
    },
    {
      name: HEADINE_LINE_1,
      title: "Early Bird Headline",
      description:
        "This is probably just going to be Early Bird Prcing... but maybe we will change it.",
      type: "string",
    },
    {
      name: HEADINE_LINE_6,
      title: "Early Bird Headline 2",
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
      name: STRING_1,
      title: "Final Call To Action Headline 1",
      type: "string",
    },
    {
      name: HEADINE_LINE_2,
      title: "Final Call To Action Headline 2",
      description:
        "This is the impactful headline to get them to purchase now.",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Call to Action so They Join",
      description:
        "Reminder of what they get and call them to take action so they click that button.",
      type: "blockContent",
    },
    {
      name: STRING_2,
      title: "ZenPlanner Headline",
      description:
        "Let them know they will be going to ZenPlanner to complete their purchase.",
      type: "string",
    },
    {
      name: DESCRIPTION_4,
      title: "Explain ZenPlanner",
      description:
        "Make sure they know they are going to zenplanner and this is what should happen..",
      type: "text",
      rows: 5,
    },
    {
      name: HEADINE_LINE_7,
      title: "Guarantee Headline",
      description:
        "Put them at ease so they give us a shot and join this program.",
      type: "string",
    },
    {
      name: DESCRIPTION_1,
      title: "Explain the Guarantee",
      description:
        "Make this very simple and easy to understand and very compelling.",
      type: "text",
      rows: 5,
    },
    {
      name: PRICE_CARD_2,
      title: "January 4th Price Card",
      description: "This shows the payment for January 4th.",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
  ],
}
