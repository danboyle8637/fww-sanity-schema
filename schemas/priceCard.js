import { FaCommentDollar } from "react-icons/fa"

export default {
  name: "priceCards",
  title: "Price Cards",
  icon: FaCommentDollar,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: "price",
      title: "Price:",
      description:
        "This is the actual price that will be charged to the users card.",
      type: "number",
    },
    {
      name: "priceDuration",
      title: "Price Duration:",
      description: "How many times to they need to pay this price",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "One Time", value: "One Time" },
          { title: "Monthly", value: "Monthly" },
          { title: "3 Months", value: "3 Months" },
          { title: "2 Payments", value: "2 Payments" },
          { title: "Free", value: "FREE!" },
        ],
      },
    },
    {
      name: "programDollarAmount",
      title: "Program Dollar Amount:",
      description: "Enter in only the whole dollar amount of the program.",
      type: "string",
      validation: (Rule) => Rule.min(1).max(3),
    },
    {
      name: "programCentsAmount",
      title: "Program Cents Amount:",
      description: "Enter in only the whole cents amount of the program.",
      type: "string",
    },
    {
      name: "purchaseBulletPoints",
      title: "Purchase Bullet Points:",
      description:
        "Three bullet points to ease their emotions when commiting to purchasing.",
      type: "blockContent",
    },
    {
      name: "purchaseGuarantee",
      title: "Purchase Guarantee:",
      description:
        "This is either the Fit or Yummy Guarantee. It is essecially the same for both.",
      type: "blockContent",
    },
    {
      name: "purchaseButtonText",
      title: "Purchase Program Button Text:",
      type: "string",
    },
  ],
}
