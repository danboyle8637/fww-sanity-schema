import { FaFilm } from "react-icons/fa";
import { STRING_1 } from "../constants";

export default {
  name: "videoCloudflare",
  title: "Video Cloudflare:",
  icon: FaFilm,
  type: "object",
  fields: [
    {
      name: STRING_1,
      title: "Video Id:",
      type: "string",
    },
  ],
};
