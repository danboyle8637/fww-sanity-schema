import FWWLiveLogo from "../../components/FWWLiveLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  COPY_BLOCK_3,
  COPY_BLOCK_4,
  COPY_BLOCK_5,
  COPY_BLOCK_6,
} from "../constants"

export default {
  name: "fwwLIVECoachingLP",
  title: "FWW LIVE Coaching LP",
  icon: FWWLiveLogo,
  type: "document",
  fields: [
    {
      name: COPY_BLOCK_1,
      title: "What FWW LIVE Is",
      type: "blockContent",
    },
    {
      name: COPY_BLOCK_2,
      title: "We Are Coaching First",
      type: "blockContent",
    },
    {
      name: COPY_BLOCK_3,
      title: "Talk To Your Trainers",
      type: "blockContent",
    },
    {
      name: COPY_BLOCK_4,
      title: "One on One Training Sessions",
      type: "blockContent",
    },
    {
      name: COPY_BLOCK_5,
      title: "Active Community",
      type: "blockContent",
    },
    {
      name: COPY_BLOCK_6,
      title: "Free Trial Call To Action",
      type: "blockContent",
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
