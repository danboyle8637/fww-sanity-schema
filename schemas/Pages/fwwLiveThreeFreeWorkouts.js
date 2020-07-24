import FWWLiveLPIcon from "../../components/FWWLiveLPIcon"

export default {
  name: "fwwLiveFreeWorkoutsLandingPage",
  title: "FWW LIVE Free Workouts LP",
  icon: FWWLiveLPIcon,
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
      name: "detailsHeadline",
      title: "Offer Details Headline:",
      description: "This is a short headline to intro the what you get cards.",
      type: "string",
    },
    {
      name: "aboutWorkoutsCopy",
      title: "About the Workouts Copy:",
      description: "Tell them about the workouts in a short powerful way.",
      type: "copyBlock",
    },
    {
      name: "fitnessLevelCopy",
      title: "Fitness Level Copy:",
      description: "Tell them what fitness levels this is for.",
      type: "copyBlock",
    },
    {
      name: "equipmentNeededCopy",
      title: "Equipment Needed Copy:",
      description: "Tell them what equipment they need.",
      type: "copyBlock",
    },
    {
      name: "workoutStylesCopy",
      title: "Workout Styles Copy:",
      description: "Tell them what workout styles they will get",
      type: "copyBlock",
    },
    {
      name: "signUpFormCopy",
      title: "Sign Up Form Copy:",
      description:
        "A good call to action headline and some cpy to get them to sign up.",
      type: "copyBlock",
    },
  ],
}
