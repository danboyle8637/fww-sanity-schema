import { COPY_BLOCK_1, HEADINE_LINE_1, STRING_1 } from "../constants"

export default {
  name: "siteWideOfferSection",
  title: "Site Wide Offer Sections",
  type: "object",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Offer Headline",
      desciption:
        "Give a good headline that relates to the page content and offer.",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Offer Copy",
      description:
        "Keep this hard hitting and short. It should be almost the same for each section.",
      type: "blockContent",
    },
    {
      name: STRING_1,
      title: "CTA Button Text",
      description: "Call the reader to action.",
      type: "string",
    },
  ],
}
