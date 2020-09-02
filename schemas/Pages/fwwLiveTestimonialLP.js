import FWWLiveLogo from "../../components/FWWLiveLogo"

export default {
  name: "fwwLiveTestimonialLP",
  title: "FWW Live Testimonial LP",
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
      name: "whatYouGetBullets",
      title: "What You Get Bullets:",
      description:
        "Explain what they get one more time so they can refresh their memories.",
      type: "copyBlock",
    },
    {
      name: "classScheduleCopy",
      title: "Class Schedule Copy:",
      description:
        "Tell them to click on the day and to build the workout schedule to fit their busy life.",
      type: "copyBlock",
    },
    {
      name: "callToActionCopy",
      title: "Call To Action Copy:",
      description:
        "Call the prospect to action. Get them motivated and excited to purchase right now.",
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
      title: "Three Month Price Card:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: "disclaimerCopy",
      title: "Disclaimer Copy:",
      description:
        "Tell the disclaimer about these testimonials and what you can really expect.",
      type: "copyBlock",
    },
  ],
}
