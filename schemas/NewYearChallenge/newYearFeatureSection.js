import { number } from "prop-types"
import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  COPY_BLOCK_1,
  HEADINE_LINE_1,
  STANDARD_IMAGE_1,
  STRING_1,
  NUMBER_1,
  STRING_2,
  STRING_3,
  NUMBER_2,
} from "../constants"

export default {
  name: "newYearFeatureSection",
  title: "New Year Feature Section",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Feature Benefit Headline",
      description: "Make sure this is a benefit and solves a problem.",
      type: "string",
    },
    {
      name: NUMBER_2,
      title: "Order",
      type: "number",
    },
    {
      name: STRING_3,
      title: "Benefit Card Short Description",
      description: "A very short impact word description for the benefit card.",
      type: "string",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Feature Image (Optional)",
      description:
        "This is optional because not all feature sections will use an image.",
      type: "inPageImage",
    },
    {
      name: STRING_2,
      title: "What Feature Page?",
      description:
        "What feature page is this going to go on. This will help with querying the data.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "What You Get Page", value: "whatYouGetPage" },
          { title: "Plan Smart Eat Real Page", value: "planSmartEatRealPage" },
        ],
      },
    },
    {
      name: NUMBER_1,
      title: "Feature Video (Optional)",
      description:
        "This is optional because not all features will use a video.",
      type: "number",
    },
    {
      name: COPY_BLOCK_1,
      title: "Describe This Feature Benefit",
      description:
        "Describe this benefit and make sure you are solving a problem.",
      type: "blockContent",
    },
    {
      name: STRING_1,
      title: "Button Text",
      description:
        "This is button text that is associated with the particular feature benefit.",
      type: "string",
    },
  ],
}
