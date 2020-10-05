import LiveLogo from "../../components/FWWLiveLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
  COPY_BLOCK_7,
  COPY_BLOCK_8,
} from "../constants"

export default {
  name: "fwwLiveSweatySelfieContent",
  title: "FWW Live Sweaty Selfie Contest",
  icon: LiveLogo,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: "socialShareInformation",
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: "mainHeadline1",
      title: "Main Headline 1:",
      description:
        "This is just going to be Sweaty Selfie, but you can change it around if needed.",
      type: "string",
    },
    {
      name: "mainHeadline2",
      title: "Main Headline 2:",
      description:
        "This is just going to be Sweaty Selfie, but you can change it around if needed.",
      type: "string",
    },
    {
      name: "mainHeadline3",
      title: "Main Headline 3:",
      description:
        "This is just going to be Sweaty Selfie, but you can change it around if needed.",
      type: "string",
    },
    {
      name: "mainSubHeadline1",
      title: "Main Sub Headline 1",
      description: "This is the first of the main subheadlines.",
      type: "string",
    },
    {
      name: "mainSubHeadline2",
      title: "Main Sub Headline 2",
      description: "This is the first of the main subheadlines.",
      type: "string",
    },
    {
      name: "mainSubHeadline3",
      title: "Main Sub Headline 3",
      description: "This is the first of the main subheadlines.",
      type: "string",
    },
    {
      name: "mainSubHeadline4",
      title: "Main Sub Headline 4",
      description: "This is the first of the main subheadlines.",
      type: "string",
    },
    {
      name: "salesVideoId",
      title: "Sales Video Id:",
      type: "number",
    },
    {
      name: COPY_BLOCK_1,
      title: "FWW Live Sweaty Selfie Prize Pack Bullets:",
      description: "The bullet points of what the winner gets.",
      type: "copyBlock",
    },
    {
      name: "sweatySelfiePrizePackImage",
      title: "The Picture of the Sweaty Selfie Prize Pack.",
      type: "inPageImage",
    },
    {
      name: "sweatySelfieStep1",
      title: "Sweaty Selfie Step 1:",
      type: "string",
    },
    {
      name: "sweatySelfieStep2",
      title: "Sweaty Selfie Step 2:",
      type: "string",
    },
    {
      name: "sweatySelfieStep3",
      title: "Sweaty Selfie Step 3:",
      type: "string",
    },
    {
      name: COPY_BLOCK_2,
      title: "What Is The Sweaty Selfie Content Part 1:",
      description: "Introduce the Sweaty Selfie contest.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "What Is FWW Live... The Elevator Pitch:",
      description: "Give our short sentance elevator pitch.",
      type: "copyBlock",
    },
    {
      name: "reasonsToJoinContestHeadline",
      title: "5 Reasons To Join The Challenge Headline",
      type: "string",
    },
    {
      name: COPY_BLOCK_4,
      title: "Reason 1 Live Class Based Workouts:",
      description: "Explain our amazing LIVE workout classes.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "Reason 2 Our Class Replays:",
      description: "Explain our class replays in the Facebook Group.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Reason 3 Our Training Plans:",
      description:
        "Explain our training plans so you aren't just being random.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_7,
      title: "Reason 4 Our Private Coaching:",
      description: "Explain how we actually coach our members to succeed.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_8,
      title: "Reason 5 Our Amazing Community:",
      description: "Explain are amazing members and how cool they are.",
      type: "copyBlock",
    },
    {
      name: "callToActionHeadline",
      title: "Call to Action Headline:",
      description: "Tell them... this is how to sign up.",
      type: "string",
    },
    {
      name: "signUpStep1",
      title: "Step 1 to Enter the Contest:",
      type: "text",
      rows: 3,
    },
    {
      name: "signUpStep2",
      title: "Step 2 to Enter the Contest:",
      type: "text",
      rows: 3,
    },
    {
      name: "signUpStep3",
      title: "Step 3 to Enter the Contest:",
      type: "text",
      rows: 3,
    },
    {
      name: "memberSweatySelfieImages1",
      title: "These are all of the sweaty selfies used on the page:",
      type: "inPageImage",
    },
    {
      name: "memberSweatySelfieImages2",
      title: "These are all of the sweaty selfies used on the page:",
      type: "inPageImage",
    },
    {
      name: "fwwLivePageImages1",
      title: "FWW LIVE Page Images Set 1:",
      type: "inPageImage",
    },
  ],
}
