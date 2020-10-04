import { FaHamburger } from "react-icons/fa"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
  COPY_BLOCK_7,
  COPY_BLOCK_8,
  COPY_BLOCK_9,
} from "../constants"

export default {
  name: "planSmartEatRealSalesPage",
  title: "Plan Smart Eat Real Sales Page",
  icon: FaHamburger,
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
      name: "programId",
      title: "Program Id:",
      description: "Camel cased program title all one word.",
      type: "string",
    },
    {
      name: "socialShareInformation",
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: "slug",
      title: "Program Slug:",
      description:
        "Program slug is lowercase name with dashes instead of spaces",
      type: "slug",
      options: {
        source: "devTitle",
        maxLength: 96,
      },
    },
    {
      name: "programHeaderImage",
      title: "Program Header Image:",
      type: "cardImage",
    },
    {
      name: "programSalesVideoId",
      title: "Program Sales Video Id:",
      description: "This is the Vimeo video id.",
      type: "number",
    },
    {
      name: "programStatsBar",
      title: "Program Stats Bar:",
      type: "nutritionProgramStatsBar",
    },
    {
      name: "purchaseButtonText1",
      title: "First Purchase Button Text",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Lead Section:",
      description:
        "The lead into the page. This is important and needs to hook them.",
      type: "copyBlock",
    },
    {
      name: "programIntroductionBackground",
      title: "Program Introduction Background:",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: COPY_BLOCK_2,
      title: "Program Introduction Copy:",
      description:
        "Introduce Plan Smart Eat Real with your one sentance of what it is.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_3,
      title: "Recipe Breakdown Copy:",
      description: "Breakdown what they get with number of recipes.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_4,
      title: "Recipe Preview Copy:",
      description: "Let them know you have taken care of almost everything.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_5,
      title: "Food Emotion Coaching Copy:",
      description: "Talk about what coaching they get and why it is important.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_6,
      title: "Private Facebook Group Copy:",
      description: "Explain why the private Facebook Group is so important.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_7,
      title: "Quick Recap Copy:",
      description: "Explain everything they get and why they need to join now.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_8,
      title: "Purchase Copy:",
      description: "Entice them to take action in one sentance.",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_9,
      title: `Don't Wait Copy:`,
      description:
        "Explain why they need to act now and call them to take that action.",
      type: "copyBlock",
    },
    {
      name: "recipePreview1",
      title: "Breakfast Recipe Preview:",
      type: "reference",
      to: [{ type: "recipePreviewCard" }],
    },
    {
      name: "recipePreview2",
      title: "Breakfast Recipe Preview:",
      type: "reference",
      to: [{ type: "recipePreviewCard" }],
    },
    {
      name: "recipePreview3",
      title: "Lunch Recipe Preview:",
      type: "reference",
      to: [{ type: "recipePreviewCard" }],
    },
    {
      name: "recipePreview4",
      title: "Lunch Recipe Preview:",
      type: "reference",
      to: [{ type: "recipePreviewCard" }],
    },
    {
      name: "recipePreview5",
      title: "Dinner Recipe Preview:",
      type: "reference",
      to: [{ type: "recipePreviewCard" }],
    },
    {
      name: "recipePreview6",
      title: "Dinner Recipe Preview:",
      type: "reference",
      to: [{ type: "recipePreviewCard" }],
    },
    {
      name: "recipePreview7",
      title: "Dessert Recipe Preview:",
      type: "reference",
      to: [{ type: "recipePreviewCard" }],
    },
    {
      name: "singlePaymentPrice",
      title: "Single Payment Price:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: "twoPaymentPrice",
      title: "Two Payment Price:",
      type: "reference",
      to: [{ type: "priceCards" }],
    },
    {
      name: "nutritionTestimonial1",
      title: "Nutrition Testimonial:",
      description:
        "Make sure this testimonial has to do with Plan Smart Eat Real.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
    {
      name: "nutritionTestimonial2",
      title: "Nutrition Testimonial:",
      description:
        "Make sure this testimonial has to do with Plan Smart Eat Real.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
    {
      name: "nutritionTestimonial3",
      title: "Nutrition Testimonial:",
      description:
        "Make sure this testimonial has to do with Plan Smart Eat Real.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
    {
      name: "nutritionTestimonial4",
      title: "Nutrition Testimonial:",
      description:
        "Make sure this testimonial has to do with Plan Smart Eat Real.",
      type: "reference",
      to: [{ type: "testimonialCard" }],
    },
  ],
}
