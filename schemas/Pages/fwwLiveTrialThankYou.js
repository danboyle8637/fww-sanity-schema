import FWWLiveLogo from "../../components/FWWLiveLogo"

export default {
  name: "fwwLiveTrialThankYou",
  title: "FWW Live Trial Thank You Page",
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
      name: "headline",
      title: "Headline:",
      type: "string",
    },
    {
      name: "headlineBackground",
      title: "Headline Background:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: "fwwLiveTrialSetup1",
      title: "FWW LIVE Trial Trial Setup Part 1:",
      description: "Help them get setup so they can actually use this trial.",
      type: "copyBlock",
    },
    {
      name: "fwwLiveTrialSetup2",
      title: "FWW LIVE Trial Trial Setup Part 2:",
      description:
        "Make sure they know how to get in touch with you so they can use this trial.",
      type: "copyBlock",
    },
    {
      name: "fwwLiveTrialSetup3",
      title: "FWW LIVE Trial Trial Setup Part 3:",
      description:
        "This is about them downloading the Quickstart training plan.",
      type: "copyBlock",
    },
  ],
}
