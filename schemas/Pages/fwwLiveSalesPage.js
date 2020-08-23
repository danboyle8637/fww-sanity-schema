import { FaFilm } from "react-icons/fa"

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
      name: "fwwLiveWorkoutsSection",
      title: "FWW LIVE Workouts Section Bullets:",
      description:
        "These are about the workouts and the number of workouts a user gets.",
      type: "copyBlock",
    },
    {
      name: "fwwLiveScheduleBullets",
      title: "FWW LIVE Custom Schedule Bullets:",
      description:
        "These are about how you can build your own workout schedule with this program.",
      type: "copyBlock",
    },
    {
      name: "fwwLiveResultsBullets",
      title: "FWW LIVE Results Bullets:",
      description:
        "These are about getting results because we push your hard and have fun.",
      type: "copyBlock",
    },
    {
      name: "fwwLiveCommunityBullets",
      title: "FWW LIVE Community Bullets:",
      description: "These are about our amazing FWW LIVE community.",
      type: "copyBlock",
    },
    {
      name: "fwwLiveScheduleCopy",
      title: "FWW LIVE Schedule Copy",
      type: "copyBlock",
    },
    {
      name: "callToActionCopy",
      title: "Call to Action Copy:",
      description: "Tell them to click on a card and make it sound very easy.",
      type: "copyBlock",
    },
    {
      name: "trialPriceCard",
      title: "Trial Price Card:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: "monthlyPriceCard",
      title: "Monthly Price Card:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: "threeMonthPriceCard",
      title: "3 Month Price Card:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
  ],
}
