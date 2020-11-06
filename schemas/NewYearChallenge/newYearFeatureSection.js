import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  COPY_BLOCK_1,
  HEADINE_LINE_1,
  STANDARD_IMAGE_1,
  STRING_1,
  NUMBER_1,
} from "../constants"

/*
# Button Text Possibilities 
- I'm Ready to Do This
- Reserve My Spot Now
- Send Me The Plan
- I'm Ready To Workout
- I'm Ready to Eat Healthy
- Coaching Too? I'm In...
- Click to Workout LIVE
*/

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
      name: STANDARD_IMAGE_1,
      title: "Feature Image (Optional)",
      description:
        "This is optional because not all feature sections will use an image.",
      type: "inPageImage",
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
