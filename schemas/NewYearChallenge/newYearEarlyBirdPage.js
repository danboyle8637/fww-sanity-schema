import FWWLiveLogo from "../../components/FWWLiveLogo"
import { BACKGROUND_IMAGE_1, COPY_BLOCK_1, HEADINE_LINE_1 } from "../constants"

export default {
  name: "newYearEarlyBirdPage",
  title: "New Year Early Bird",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Early Bird Headline",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Call To Action Coopy",
      type: "blockContent",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Background Image of Kindal",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
  ],
}
