import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
  COPY_BLOCK_7,
  BACKGROUND_IMAGE_1,
  STRING_1,
  STRING_2,
  STRING_3,
  STRING_4,
} from "../constants"

export default {
  name: "fwwLIVECoachingLP",
  title: "FWW LIVE Coaching LP",
  icon: FWWLiveLogo,
  type: "document",
  fieldsets: [
    { name: "section1", title: "Section 1 - What is FWW LIVE?" },
    { name: "section2", title: "Section 2 - Keeping You Un-Stuck" },
    { name: "section3", title: "Section 3 - Talk to Your Trainers" },
    { name: "section4", title: "Section 4 - Coaching Class" },
    { name: "section5", title: "Section 5 - Tight Knit Community" },
    { name: "section6", title: "Section 6 - Plus There's More!" },
    { name: "section7", title: "Section 7 - Sign Up For a Trial" },
  ],
  fields: [
    {
      name: STRING_1,
      title: "Putting Coaching First",
      description: "A predefined string.",
      type: "string",
      fieldset: "section1",
    },
    {
      name: COPY_BLOCK_1,
      title: "What is FWW LIVE?",
      type: "blockContent",
      fieldset: "section1",
    },
    {
      name: COPY_BLOCK_2,
      title: "We Are Coaching First",
      type: "blockContent",
      fieldset: "section2",
    },
    {
      name: BACKGROUND_IMAGE_1,
      title: "Background Images for Coaching Section",
      type: "reference",
      to: [{ type: "backgroundImage" }],
      fieldset: "section2",
    },
    {
      name: STRING_2,
      title: "Intro Line Before iPhone Montage Video",
      description: "A predefined string.",
      type: "string",
      fieldset: "section3",
    },
    {
      name: COPY_BLOCK_3,
      title: "Why Talking To Trainers is Important",
      type: "blockContent",
      fieldset: "section3",
    },
    {
      name: STRING_3,
      title: "Intro Line Before iPhone Montage Video",
      description: "Intro the coaching class",
      type: "string",
      fieldset: "section4",
    },
    {
      name: COPY_BLOCK_4,
      title: "Why the Coaching Class is So Important",
      type: "blockContent",
      fieldset: "section4",
    },
    {
      name: STRING_4,
      title: "Intro Line Before Community Images",
      description: "Intro the our awesome community",
      type: "string",
      fieldset: "section5",
    },
    {
      name: COPY_BLOCK_5,
      title: "Why Our Community is Completely Different",
      type: "blockContent",
      fieldset: "section5",
    },
    {
      name: COPY_BLOCK_6,
      title: "Plus There's More!",
      type: "blockContent",
      fieldset: "section6",
    },
    {
      name: COPY_BLOCK_7,
      title: "Call To Action for Trial",
      type: "blockContent",
      fieldset: "section7",
    },
  ],
  preview: {
    select: {},
    prepare: () => {
      return {
        title: "FWW LIVE Coaching Focus LP",
        subtitle: "",
      }
    },
  },
}
