import TransformationIcon from "../../components/TransformationsIcon"
import { COPY_BLOCK_1 } from "../constants"

export default {
  name: "transformationsPage",
  title: "Transformations Page",
  icon: TransformationIcon,
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
      name: COPY_BLOCK_1,
      title: "Transformations Copy:",
      description:
        "Give context to these transformations and how they fit our fitness mission.",
      type: "copyBlock",
    },
    {
      name: "transformationPicture",
      title: "Transformation Picture:",
      type: "inPageImage",
    },
  ],
}
