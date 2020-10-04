import { FaFilm } from "react-icons/fa"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
} from "../constants"

export default {
  name: "fwwLiveSalesPage",
  title: "FWW LIVE Sales Page",
  icon: FaFilm,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: "headlineOne",
      title: "Headline:",
      description: "Keep it short but hardcore. It is the most important part.",
      type: "string",
    },
    {
      name: "socialShareInformation",
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: "headlineBackground",
      title: "Headline Background:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: "salesVideoId",
      title: "Sales Video Id:",
      type: "number",
    },
    {
      name: "purchaseButtonText1",
      title: "First Purchase Button Text",
      type: "string",
    },
    {
      name: "fwwLiveIphoneImage1",
      title: "FWW LIVE iPhone Image for Workouts Bullets Sections:",
      type: "inPageImage",
    },
    {
      name: "fwwLiveIphoneImage2",
      title: "FWW LIVE iPhone Image for Results Bullets Section:",
      type: "inPageImage",
    },
    {
      name: COPY_BLOCK_1,
      title: "FWW LIVE Workouts Section Bullets:",
      description:
        "These are about the workouts and the number of workouts a user gets.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "FWW LIVE Custom Schedule Bullets:",
      description:
        "These are about how you can build your own workout schedule with this program.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "FWW LIVE Results Bullets:",
      description:
        "These are about getting results because we push your hard and have fun.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "FWW LIVE Community Bullets:",
      description: "These are about our amazing FWW LIVE community.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "FWW LIVE Schedule Copy",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Call to Action Copy:",
      description: "Tell them to click on a card and make it sound very easy.",
      type: "copyBlock",
    },
    {
      name: "priceCard1",
      title: "Price Card 1:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: "priceCard2",
      title: "Price Card 2:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: "priceCard3",
      title: "Price Card 3:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
  ],
}
