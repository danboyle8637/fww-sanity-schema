import { VideoGifIcon } from "../../components/VideoGifIcon"
import { STRING_1, STRING_2 } from "../constants"

export default {
  name: "videoGif",
  title: "Video Gif:",
  icon: VideoGifIcon,
  type: "object",
  fields: [
    {
      name: STRING_1,
      title: "Video Id:",
      type: "string",
    },
    {
      name: STRING_2,
      title: "Vimeo Id:",
      type: "string",
    },
  ],
}
