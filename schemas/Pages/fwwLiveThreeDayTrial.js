import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
  BACKGROUND_IMAGE_1,
} from "../constants"

export default {
  name: "fwwLiveThreeDayTrialLP",
  title: "FWW LIVE 3 Day Trial LP",
  icon: FWWLiveLogo,
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
      name: "pageHeadline",
      title: "Page Headline:",
      description: "Keep it short but hardcore. It is the most important part.",
      type: "string",
    },
    {
      name: BACKGROUND_IMAGE_1,
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
      name: "trialQuickstartImage",
      title: "FWW Live Trial Quickstart Plan Image:",
      type: "inPageImage",
    },
    {
      name: "trialQuickstartImageCaption",
      title: "FWW Live Trial Quickstart Image Caption",
      description: "Just explain how they get a plan to follow.",
      type: "text",
      rows: 6,
    },
    {
      name: COPY_BLOCK_1,
      title: "Lead In Copy:",
      description: "The lead to get them excited and to get them to read more.",
      type: "copyBlock",
    },
    {
      name: "youAreInvitedHeadline",
      title: "You Are Invited Headline:",
      description:
        "Get them excited to read about what they get during the trial.",
      type: "string",
    },
    {
      name: "whatYouGetHeadline",
      title: "What You Get Headline",
      description: "Tell them here's what you get.",
      type: "string",
    },
    {
      name: "liveWorkoutsImage",
      title: "Live Workouts Image:",
      description:
        "A picture of a workout or maybe multipe so you can fade between them.",
      type: "inPageImage",
    },
    {
      name: COPY_BLOCK_2,
      title: "You Get Live Workouts Copy:",
      description: "Tell them about the LIVE workouts they are going to get.",
      type: "copyBlock",
    },
    {
      name: "workoutReplaysImagesSet1",
      title: "Workout Replays Images Set 1:",
      description:
        "A set of the first 3 images of workouts them can scroll through.",
      type: "inPageImage",
    },
    {
      name: "workoutReplaysImagesSet2",
      title: "Workout Replays Images Set 2:",
      description:
        "A set of the second 3 images of workouts them can scroll through.",
      type: "inPageImage",
    },
    {
      name: COPY_BLOCK_3,
      title: "Workout Replays Copy:",
      description:
        "Tell them about the workout replays they are going to get access to.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Real Coaching Copy:",
      description:
        "Tell them about the real coaching they are going to get access to.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "Class Schedule Copy:",
      description:
        "Just a simple headline and description to tell the user to click on the day.",
      type: "copyBlock",
    },
    {
      name: "workoutStyleHeadline",
      title: "Workout Style Headline:",
      description: "Tell them about each day's workout style.",
      type: "string",
    },
    {
      name: "totalWorkoutsHeadline",
      title: "Total Workouts Headline:",
      description:
        "This is the headline right after all of the workout style cards. It explains how they get lots of workouts.",
      type: "string",
    },
    {
      name: COPY_BLOCK_6,
      title: "Call To Action Copy:",
      description:
        "Call the prospect to action. Get them motivated and excited to purchase right now.",
      type: "copyBlock",
    },
  ],
}
