import { FaPencilAlt } from "react-icons/fa";

export default {
  name: "videoPost",
  title: "Video Post",
  icon: FaPencilAlt,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title:",
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
      title: "Page Path:",
      description: "Enter a short, keyword based path to this post.",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainPostImage",
      title: "Main Post Image:",
      description:
        "This is used at the top of the blog post and on the post card. This can be reused from the blog post.",
      type: "mainPostImage",
    },
    {
      name: "tags",
      title: "Tags:",
      description:
        "Enter only the very relevant tag or tags for this post. One of them needs to be video.",
      type: "array",
      of: [{ type: "reference", to: { type: "postTag" } }],
    },
    {
      name: "publishedAt",
      title: "Published Date:",
      description: "Enter the date to publish this post.",
      type: "datetime",
    },
    {
      name: "videoId",
      title: "YouTube Video Id:",
      description: "Enter the YouTube video id.",
      type: "string",
    },
    {
      name: "videoPostVideoSchema",
      title: "Video Post Schema",
      description:
        "The rich shema data so the video gets shown in video results across the web.",
      type: "videoScheam",
    },
    {
      name: "body",
      title: "Video Post Copy:",
      description:
        "Keep this pretty darn short. Just the workout in bullet points and then relevant links to the post and any place else.",
      type: "blockContent",
    },
  ],
};
