import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  HEADINE_LINE_1,
  HEADINE_LINE_2,
  HEADINE_LINE_3,
  HEADINE_LINE_4,
  HEADINE_LINE_5,
  BACKGROUND_IMAGE_1,
  STANDARD_IMAGE_1,
  STANDARD_IMAGE_2,
  STANDARD_IMAGE_3,
  STRING_1,
  STRING_2,
  STRING_3,
  STRING_4,
  STRING_5,
  STRING_6,
  STRING_7,
  STRING_8,
  NUMBER_1,
  DESCRIPTION_1,
  DESCRIPTION_2,
  DESCRIPTION_3,
  DESCRIPTION_4,
  DESCRIPTION_5,
  DESCRIPTION_6,
  DESCRIPTION_7,
  DESCRIPTION_8,
  SITE_WIDE_OFFER_SECTION,
  SOCIAL_SHARE_INFO,
  HEADINE_LINE_6,
} from "../constants"

export default {
  name: "fwwLiveNewYearAboutPage",
  title: "New Year About Page",
  icon: FWWLiveLogo,
  fieldsets: [
    { name: "certs", title: "Trainer Certifications" },
    { name: "fitDescriptions", title: "Fitness Images Descriptions" },
  ],
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "About Page Main Headline 1",
      description: "This is the main page headline.",
      type: "string",
    },
    {
      name: HEADINE_LINE_6,
      title: "About Page Headline 2",
      description: "This is going to be to emphasis Comeback",
      type: "string",
    },
    {
      name: HEADINE_LINE_2,
      title: "Page Sub-Headline",
      description:
        "This is the page subheadline. Most likely just the name of the challenge.",
      type: "string",
    },
    {
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Header Background Image",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: NUMBER_1,
      title: "Sales Video Id",
      type: "number",
    },
    {
      name: STRING_1,
      title: "Button Text Variation 1",
      description:
        "This is a variation of button text that will used across this mini-site.",
      type: "string",
    },
    {
      name: HEADINE_LINE_3,
      title: "Certifications Headline",
      description:
        "Might play with this which is why I am putting it in there.",
      type: "string",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Kindal and Dan Trainer Images",
      type: "inPageImage",
    },
    {
      name: STRING_2,
      title: "Trainer Certification 1",
      type: "string",
      fieldset: "certs",
    },
    {
      name: STRING_3,
      title: "Trainer Certification 1",
      type: "string",
      fieldset: "certs",
    },
    {
      name: STRING_4,
      title: "Trainer Certification 1",
      type: "string",
      fieldset: "certs",
    },
    {
      name: STRING_5,
      title: "Trainer Certification 1",
      type: "string",
      fieldset: "certs",
    },
    {
      name: STRING_6,
      title: "Trainer Certification 1",
      type: "string",
      fieldset: "certs",
    },
    {
      name: HEADINE_LINE_4,
      title: "Publications Headline",
      description:
        "Might play with this which is why I am putting it in there.",
      type: "string",
    },
    {
      name: STANDARD_IMAGE_2,
      title: "Publications Logos",
      description:
        "These are all of the publications we have been in. Should all fit in one inPageImage.",
      type: "inPageImage",
    },
    {
      name: HEADINE_LINE_5,
      title: "Testimonials Headline",
      description:
        "Might play with this which is why I am putting it in there.",
      type: "string",
    },
    {
      name: STANDARD_IMAGE_3,
      title: "Fitness Images from Our Life",
      description:
        "These are cool and fun pictures from our life. Try to get some with clients and some from cool moments.",
      type: "inPageImage",
    },
    {
      name: DESCRIPTION_1,
      title: "Images from Life Description",
      description:
        "A short one sentance description of what the picture is about.",
      type: "text",
      rows: 5,
      fieldset: "fitDescriptions",
    },
    {
      name: DESCRIPTION_2,
      title: "Images from Life Description",
      description:
        "A short one sentance description of what the picture is about.",
      type: "text",
      rows: 5,
      fieldset: "fitDescriptions",
    },
    {
      name: DESCRIPTION_3,
      title: "Images from Life Description",
      description:
        "A short one sentance description of what the picture is about.",
      type: "text",
      rows: 5,
      fieldset: "fitDescriptions",
    },
    {
      name: DESCRIPTION_4,
      title: "Images from Life Description",
      description:
        "A short one sentance description of what the picture is about.",
      type: "text",
      rows: 5,
      fieldset: "fitDescriptions",
    },
    {
      name: SITE_WIDE_OFFER_SECTION,
      title: "Offer to Join the Challenge",
      description: "Create copy that is unique to what is on this page.",
      type: "siteWideOfferSection",
    },
  ],
}