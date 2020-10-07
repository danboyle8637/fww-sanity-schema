import LiveLogo from "../../components/FWWLiveLogo"
import { COPY_BLOCK_1, HEADINE_LINE_1 } from "../constants"

export default {
  name: "fwwLiveSweatySelfieUpload",
  title: "FWW LIVE Sweaty Selfie Upload",
  icon: LiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Dev Page Title",
      description: "Title to let you know what this page is.",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Upload Sweaty Selfie Instructions",
      description:
        "Tell the user what to do and expect so they don't freak out.",
      type: "copyBlock",
    },
  ],
}
