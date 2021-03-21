import { FWWLogo } from "../../components/FWWLogo"
import { COPY_BLOCK_1, COPY_BLOCK_2, BACKGROUND_IMAGE_1 } from "../constants"

export default {
  name: "homePage",
  title: "Home Page",
  icon: FWWLogo,
  type: "document",
  fieldsets: [{ name: "pages", title: "Site Pages:" }],
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Headline Section Image",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: "socialShareInformation",
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: COPY_BLOCK_1,
      title: "Workout Programs Section:",
      type: "copyBlock",
    },
    {
      name: "workoutSectionImage",
      title: "Workout Section Image",
      type: "inPageImage",
    },
    {
      name: COPY_BLOCK_2,
      title: "Nutrition Programs Section:",
      type: "copyBlock",
    },
    {
      name: "nutritionSectionImage",
      title: "Nutrition Section Image",
      type: "inPageImage",
    },
  ],
}
