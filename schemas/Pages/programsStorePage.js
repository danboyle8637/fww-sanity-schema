import { FaTint } from "react-icons/fa"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  TESTIMONIAL_1,
  TESTIMONIAL_2,
  TESTIMONIAL_3,
  TESTIMONIAL_4,
  TESTIMONIAL_5,
  BACKGROUND_IMAGE_1,
} from "../constants"

export default {
  name: "programsStorePage",
  title: "Programs Store Page",
  icon: FaTint,
  type: "document",
  fieldsets: [
    { name: "freeProgramSection", title: "Free Programs Section:" },
    { name: "premiumProgramSection", title: "Premium Programs Section:" },
  ],
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
      name: "programsPageHeadline",
      title: "Programs Page Headline:",
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
      title: "Free Programs Section:",
      type: "copyBlock",
      fieldset: "freeProgramSection",
    },
    {
      name: "freeProgramsVideo",
      title: "Free Programs How to Choose Video Id:",
      type: "number",
      fieldset: "freeProgramSection",
    },
    {
      name: COPY_BLOCK_2,
      title: "Premium Programs Section:",
      type: "copyBlock",
      fieldset: "premiumProgramSection",
    },
    {
      name: "premiumProgramsVideo",
      title: "Premium Programs How to Choose Video Id:",
      type: "number",
      fieldset: "premiumProgramSection",
    },
    {
      name: TESTIMONIAL_1,
      title: "Workout Testimonial:",
      description:
        "Make sure this testimonial has to do with the FWW workouts.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
    {
      name: TESTIMONIAL_2,
      title: "Workout Testimonial:",
      description:
        "Make sure this testimonial has to do with the FWW workouts.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
    {
      name: TESTIMONIAL_3,
      title: "Workout Testimonial:",
      description:
        "Make sure this testimonial has to do with the FWW workouts.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
    {
      name: "nutritionTestimonial1",
      title: "Nutrition Testimonial:",
      description:
        "Make sure this testimonial has to do with general nutrition.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
    {
      name: "nutritionTestimonial2",
      title: "Nutrition Testimonial:",
      description:
        "Make sure this testimonial has to do with general nutrition.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
  ],
}
