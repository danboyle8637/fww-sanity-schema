import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
  COPY_BLOCK_7,
  BACKGROUND_IMAGE_1,
  BACKGROUND_IMAGE_3,
  SOCIAL_SHARE_INFO,
  STANDARD_IMAGE_1,
  STANDARD_IMAGE_2,
  STANDARD_IMAGE_3,
  STANDARD_IMAGE_4,
} from "../constants"

export default {
  name: "fwwLiveAbout",
  title: "FWW Live About Page",
  type: "document",
  fields: [
    {
      name: BACKGROUND_IMAGE_1,
      title: "Header Section Image",
      type: "reference",
      to: [{ type: "backgroundImage" }],
    },
    {
      name: SOCIAL_SHARE_INFO,
      title: "Social Share Information:",
      description: "This is all of the social sharing info for social media.",
      type: "socialShareBlock",
    },
    {
      name: COPY_BLOCK_1,
      title: "The Problem Section",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "What Is FWW LIVE Section",
      type: "copyBlock",
    },
  ],
}
