import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  CARD_IMAGE_1,
  DESCRIPTION_1,
  HEADINE_LINE_1,
  STRING_1,
  STRING_2,
} from "../constants"

export default {
  name: "fwwLiveNewYearMiniSiteCard",
  title: "New Year Mini Site Card",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Headline",
      description:
        "Enter the headline for the card and the page it goes to. Keep it short but catchy.",
      type: "string",
    },
    {
      name: CARD_IMAGE_1,
      title: "Card Image",
      description: "This is card image at 1200x480",
      type: "cardImage",
    },
    {
      name: STRING_2,
      title: "Card Slug",
      description: "Make sure you check the path for accuracy.",
      type: "url",
    },
    {
      name: DESCRIPTION_1,
      title: "Card Description",
      description: "Teasing card description. Use curiosity.",
      type: "text",
      rows: 5,
    },
    {
      name: STRING_1,
      title: "Time to Read",
      description: "An approximation about how to it takes to read.",
      type: "string",
    },
  ],
}
