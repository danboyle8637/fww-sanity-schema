import { FWWLogo } from "../../components/FWWLogo"
import { HEADINE_LINE_1, COPY_BLOCK_1, STANDARD_IMAGE_1 } from "../constants"

export default {
  name: "fwwThankYouPages",
  title: "Thank You Pages",
  icon: FWWLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Thank You Page Headline",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Thank You Copy:",
      description: "Tell them the one thing they must do next.",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Optional Image",
      description: "This is not necessary... case by case basis.",
      type: "sectionImage",
    },
  ],
  preview: {
    select: {
      title: HEADINE_LINE_1,
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "Call to action section body copy",
      }
    },
  },
}
