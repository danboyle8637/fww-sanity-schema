import { FaEarlybirds } from "react-icons/fa"
import { COPY_BLOCK_1, BACKGROUND_IMAGE_1 } from "../constants"

export default {
  name: "earlyBirdThankYou",
  title: "Early Bird Thank You Page",
  icon: FaEarlybirds,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Thank You Header Background:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: COPY_BLOCK_1,
      title: "Thank You Copy:",
      description: "Tell them to click on a card and make it sound very easy.",
      type: "copyBlock",
    },
  ],
}
