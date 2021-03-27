import { KBCrunchLogo } from "../../components/KBCrunchLogo"
import { HEADINE_LINE_1, SOCIAL_SHARE_INFO, STRING_2 } from "../constants"

export default {
  name: "kettlebellCrunchProduct",
  title: "Kettlebell Crunch Product",
  icon: KBCrunchLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Flavor Title:",
      type: "string",
    },
    {
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: STRING_2,
      title: "KB Crunch Slug",
      type: "slug",
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
