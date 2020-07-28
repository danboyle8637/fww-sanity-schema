import FWWLiveUpsellIcon from "../../components/FWWLiveUpsellIcon"

export default {
  name: "fwwLiveUpsellPage",
  title: "FWW LIVE Upsell Page",
  icon: FWWLiveUpsellIcon,
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
      name: "salesVideoId",
      title: "Sales Video Id:",
      type: "number",
    },
    {
      name: "fwwLiveBullets1",
      title: "FWW LIVE Class Schedule Bullets:",
      description:
        "This is the first chunk of bullets that explain the huge class schedule",
      type: "copyBlock",
    },
    {
      name: "fwwLiveBullets2",
      title: "FWW LIVE Custom Workout Schedule Bullets:",
      description:
        "This is the second chunk of bullets they build their own workout schedule.",
      type: "copyBlock",
    },
    {
      name: "fwwLiveBullets3",
      title: "FWW LIVE Results Bullets:",
      description:
        "This is the third chunk of bullets that explain how they can get results.",
      type: "copyBlock",
    },
    {
      name: "fwwLiveBullets4",
      title: "FWW LIVE Community Bullets:",
      description:
        "This is the first chunk of bullets that explain the amazing community we have.",
      type: "copyBlock",
    },
    {
      name: "fwwWhyUpsell",
      title: "Why Offer Upsell:",
      description: "Be transparent about why we are making this offer.",
      type: "copyBlock",
    },
    {
      name: "purchaseSpecialButtonText",
      title: "Purchase Special Button Text",
      type: "string",
    },
    {
      name: "skipSpecialButtonText",
      title: "Skip Special Button Text",
      type: "string",
    },
  ],
}
