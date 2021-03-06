import FWWLiveUpsellIcon from "../../components/FWWLiveUpsellIcon"
import { COPY_BLOCK_1, COPY_BLOCK_2 } from "../constants"

export default {
  name: "fwwLiveUpsellPage",
  title: "FWW LIVE Upsell Page",
  icon: FWWLiveUpsellIcon,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: "headline",
      title: "Headline:",
      type: "string",
    },
    {
      name: "salesVideoId",
      title: "Sales Video Id:",
      type: "number",
    },
    {
      name: COPY_BLOCK_1,
      title: "FWW LIVE Special Call To Action:",
      description: "Motivate them to take action on this special offer.",
      type: "copyBlock",
    },
    {
      name: "sixMonthPriceCard",
      title: "Six Month Card:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: "sixMonthSpecialPriceCard",
      title: "Six Month Special Card:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: COPY_BLOCK_2,
      title: "FWW LIVE Special Missed Chance:",
      description: "Tell them sorry they missed their chance.",
      type: "copyBlock",
    },
    {
      name: "purchaseSpecialButtonText",
      title: "Purchase Special Button Text",
      type: "string",
    },
    {
      name: "skipSpecialButtonText",
      title: "Skip Special Button Text",
      type: "string",
    },
  ],
}
