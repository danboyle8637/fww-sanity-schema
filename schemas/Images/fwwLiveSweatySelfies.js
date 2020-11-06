import FWWLiveLogo from "../../components/FWWLiveLogo"
import { HEADINE_LINE_1, STANDARD_IMAGE_1 } from "../constants"

export default {
  name: "fwwLiveSweatySelfies",
  title: "FWW LIVE Sweaty Selfie Images",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Sweaty Selfie First Name",
      type: "string",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "FWW LIVE Sweaty Selfie Image",
      description: "Member sweaty selfies to show social proof.",
      type: "inPageImage",
    },
  ],
}
