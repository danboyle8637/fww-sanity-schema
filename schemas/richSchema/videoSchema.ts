import {
  STANDARD_IMAGE_1,
  STANDARD_IMAGE_2,
  STANDARD_IMAGE_3,
} from "../constants";

export default {
  name: "videoScheam",
  title: "Video Schema",
  type: "object",
  options: { collapsible: true },
  fields: [
    {
      name: "videoName",
      title: "Video Name or Title",
      description: "Enter the name or title of the video.",
      type: "string",
    },
    {
      name: "videoDescription",
      title: "Video Description",
      description:
        "Enter a description and try to keep it under 300 characters.",
      type: "text",
    },
    {
      name: STANDARD_IMAGE_1,
      title: "Thumbnail 16 x 9 ratio",
      description: "The 16 : 9 image ratio",
      type: "image",
    },
    {
      name: STANDARD_IMAGE_2,
      title: "Thumbnail 4 x 3 ratio",
      description: "The 4 : 3 image ratio",
      type: "image",
    },
    {
      name: STANDARD_IMAGE_3,
      title: "Thumbnail 1 x 1 ratio",
      description: "The 1 : 1 image ratio",
      type: "image",
    },
    {
      name: "videoDuration",
      title: "Video Duration",
      description: "Duration in ISO format. Example: PT00H30M5S",
      type: "string",
    },
    {
      name: "videoContentUrl",
      title: "Video Content Url",
      description:
        "This is the full url of the YouTube video from the address bar.",
      type: "string",
    },
    {
      name: "videoEmbedUrl",
      title: "Video Embed Url",
      description:
        "This is the full url from the embed code given to you by YouTube.",
      type: "string",
    },
  ],
};
