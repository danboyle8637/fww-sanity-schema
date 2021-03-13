import { FaComment } from "react-icons/fa"
import { STRING_1 } from "../constants"

export default {
  name: "testimonialCard",
  title: "Testimonial Cards",
  icon: FaComment,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Testimonial Title:",
      description: "Name of person - Testimonial at the end.",
      type: "string",
    },
    {
      name: STRING_1,
      title: "Testimonial Type",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "FWW LIVE", value: "fwwLive" },
          { title: "FWW Habit", value: "fwwHabit" },
          { title: "Plan Smart Eat Real", value: "planSmartEatReal" },
          { title: "Private Coaching", value: "privateCoaching" },
          { title: "The Trainers", value: "trainers" },
        ],
      },
    },
    {
      name: "customerName",
      title: "Customer Name:",
      type: "string",
    },
    {
      name: "customerLocation",
      title: "Customer Location:",
      description: "It only needs to be their state to protect them.",
      type: "string",
      validation: (Rule) =>
        Rule.max(2).error("Make sure to use only the state abbreviation."),
    },
    {
      name: "customerPicture",
      title: "Customer Picture:",
      description: "Try to make it 300x300 if you can.",
      type: "image",
    },
    {
      name: "testimonialHeadline",
      title: "Testimonial Headline:",
      description: "Make it a very short, hard hitting headline.",
      type: "string",
    },
    {
      name: "testimonialBody",
      title: "Testimonial Body:",
      type: "blockContent",
    },
  ],
}
