import { FaPencilAlt } from "react-icons/fa";

export default {
  name: "blogPost",
  title: "Blog Post",
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
        "This is used at the top of the blog post and on the post card.",
      type: "mainPostImage",
    },
    {
      name: "tags",
      title: "Tags:",
      description: "Enter only the very relevant tag or tags for this post.",
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
      name: "teaserCopy",
      title: "Teaser Copy:",
      description: "Sell the visitor to click and read this article.",
      type: "text",
      rows: 5,
    },
    {
      name: "body",
      title: "Post Body:",
      type: "blockContent",
    },
  ],
};
