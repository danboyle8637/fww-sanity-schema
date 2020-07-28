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
      name: "fwwLiveWhyUpsell",
      title: "FWW LIVE Why Upsell",
      type: "fwwLiveUpsellCard",
    },
  ],
}
