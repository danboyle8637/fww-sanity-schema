import { FWWLiveLogo } from "../../components/FWWLiveLogo"
import { HEADINE_LINE_1, STANDARD_IMAGE_1, STRING_1 } from "../constants"

export default {
  name: "fwwLiveWorkoutStyleCards",
  title: "FWW LIVE Workuot Style Images",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Workout Style Title:",
      type: "string",
    },
    {
      name: STRING_1,
      title: "Day of the Week Index",
      type: "number",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Workout Style Image:",
      type: "cardImage",
    },
  ],
  preview: {
    select: {
      title: HEADINE_LINE_1,
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "Workout Style for the Day",
      }
    },
  },
}
