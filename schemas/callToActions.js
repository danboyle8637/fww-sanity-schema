import { FWWLogo } from "../components/FWWLogo"
import { HEADINE_LINE_1, COPY_BLOCK_1 } from "./constants"

export default {
  name: "callToActionSections",
  title: "Call To Action Sections",
  icon: FWWLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Headline and Location of CTA",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Call To Action Section",
      type: "copyBlock",
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
