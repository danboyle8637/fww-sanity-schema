import FWWLiveLogo from "../../components/FWWLiveLogo"
import { COPY_BLOCK_1, COPY_BLOCK_2 } from "../constants"

export default {
  name: "fwwLiveSweatySelfieThankYou",
  title: "FWW Live Sweaty Selfie Thank You Page",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: "socialShareInformation",
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
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
      title: "FWW LIVE Sweaty Selfie Step 2:",
      description:
        "Make sure they go to the Facebook Group and request their invite.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "FWW LIVE Download Training Plan Step 3:",
      description:
        "Make sure you get them to download and use the training plan.",
      type: "copyBlock",
    },
  ],
}
