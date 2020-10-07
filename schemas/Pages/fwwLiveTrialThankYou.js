import FWWLiveLogo from "../../components/FWWLiveLogo"
import { COPY_BLOCK_1, COPY_BLOCK_2, BACKGROUND_IMAGE_1 } from "../constants"

export default {
  name: "fwwLiveTrialThankYou",
  title: "FWW Live Trial Thank You Page",
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
      name: "headline",
      title: "Headline:",
      type: "string",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Headline Background:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: COPY_BLOCK_1,
      title: "FWW LIVE Trial Trial Setup Part 1:",
      description: "Help them get setup so they can actually use this trial.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "FWW LIVE Trial Trial Setup Part 2:",
      description:
        "Make sure they know how to get in touch with you so they can use this trial.",
      type: "copyBlock",
    },
    {
      name: "fwwLiveTrialSetup3",
      title: "FWW LIVE Trial Trial Setup Part 3:",
      description:
        "This is about them downloading the Quickstart training plan.",
      type: "text",
      rows: 6,
    },
    {
      name: "fwwLiveTrialPrivateGroupLink",
      title: "FWW Live Private Facebook Group Link:",
      type: "url",
    },
    {
      name: "fwwLiveTrialQuickstartPlanDownloadLink",
      title: "FWW Live Quickstart Download Link:",
      type: "file",
    },
  ],
}
