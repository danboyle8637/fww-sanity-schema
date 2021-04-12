import { KBCrunchLogo } from "../../components/KBCrunchLogo"
import {
  HEADINE_LINE_1,
  NUMBER_1,
  NUMBER_2,
  STANDARD_IMAGE_1,
  STRING_2,
  STRING_3,
  COPY_BLOCK_1,
} from "../constants"

export default {
  name: "kettlebellCrunchCards",
  title: "Kettlebell Crunch Cards",
  icon: KBCrunchLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Flavor Title:",
      type: "string",
    },
    {
      name: STRING_3,
      title: "Flavor",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Blueberry Greens", value: "blueberryGreens" },
          { title: "Chocolate Reishi", value: "chocolateReishi" },
          { title: "Oatmeal Cookie", value: "oatmealCookie" },
          { title: "Recovery", value: "recovery" },
        ],
      },
    },
    {
      name: STANDARD_IMAGE_1,
      title: "KB Crunch Card Image:",
      type: "cardImage",
    },
    {
      name: NUMBER_1,
      title: "KB Crunch Flavor Price",
      type: "number",
    },
    {
      name: NUMBER_2,
      title: "KB Crunch Weight",
      type: "number",
    },
    {
      name: COPY_BLOCK_1,
      title: "KB Crunch Flavor Description",
      type: "copyBlock",
    },
    {
      name: STRING_2,
      title: "KB Crunch Slug",
      type: "slug",
    },
  ],
  preview: {
    select: {
      title: HEADINE_LINE_1,
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "Call to action section body copy",
      }
    },
  },
}
