import { FWWLogo } from "../components/FWWLogo"
import {
  COPY_BLOCK_1,
  COPY_BLOCK_2,
  HEADINE_LINE_1,
  STANDARD_IMAGE_1,
  STRING_1,
} from "./constants"

export default {
  name: "downloads",
  title: "Downloads Pages",
  icon: FWWLogo,
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Download Title",
      type: "string",
    },
    {
      name: COPY_BLOCK_1,
      title: "Download Instructions",
      type: "copyBlock",
    },
    {
      name: COPY_BLOCK_2,
      title: "Call to Action",
      type: "copyBlock",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Download Asset Image",
      type: "inPageImage",
    },
    {
      name: STRING_1,
      title: "Download Asset File",
      name: "downloadFile",
      type: "file",
    },
  ],
  preview: {
    select: {
      title: HEADINE_LINE_1,
    },
    prepare: ({ title }) => {
      return {
        title,
        subtitle: "This is an asset for download.",
      }
    },
  },
}
