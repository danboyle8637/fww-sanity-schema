import { GiPalmTree } from "react-icons/gi";

export default {
  name: "priceCardsSummerShred",
  title: "Price Cards Summer Shred",
  icon: GiPalmTree,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: "priceLabel",
      title: "Price Label:",
      description:
        "This is a label that tells the user if this is a one time payment or what month the payment is.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "One Payment", value: "one_payment" },
          { title: "First Month", value: "first_month" },
          { title: "Second Month", value: "second_month" },
        ],
      },
    },
    {
      name: "priceDollarAmount1",
      title: "Price Dollar Amount 1:",
      description: "This is the dollar amount they are actually going to pay.",
      type: "string",
    },
    {
      name: "priceDollarAmount2",
      title: "Price Dollar Amount 2:",
      description:
        "For the monthly payments, this is the price of the second month.",
      type: "string",
    },
    {
      name: "registrationDollarAmount",
      title: "Registration Dollar Amount:",
      description: "This is the registration fee. $35 for both cards.",
      type: "string",
    },
    {
      name: "registrationLabel",
      title: "Registration Label:",
      description:
        "This is the label to identify the registration payment. (Registration)",
      type: "string",
    },
    {
      name: "breakdownProgramDollarAmount",
      title: "Breakdown Program Dollar Amount:",
      description: "This is the program price minus the registration fee.",
      type: "string",
    },
    {
      name: "breakdownProgramLabel",
      title: "Breakdown Program Label:",
      description:
        "This denotes that this price is the program price. (Program)",
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
      name: "purchaseButtonText",
      title: "Purchase Program Button Text:",
      type: "string",
    },
  ],
};
