import { FaLink, FaRegCompass, FaExternalLinkAlt } from "react-icons/fa";
import PostImageIcon from "../../components/PostImageIcon";
import ExerciseIcon from "../../components/ExerciseIcon";

export default {
  name: "secondaryBlockContent",
  title: "Rich Text Content",
  type: "array",
  of: [
    {
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [{ title: "Strong", value: "strong" }],
        annotations: [
          {
            name: "internalPostLink",
            type: "object",
            title: "Internal Post Link",
            icon: FaLink,
            fields: [
              {
                name: "reference",
                type: "reference",
                title: "What post do you want to link to?",
                to: [{ type: "blogPost" }],
              },
            ],
          },
          {
            name: "internalPageLink",
            type: "object",
            title: "Internal Page Link",
            icon: FaRegCompass,
            fields: [
              {
                name: "pageUrl",
                title: "What page do you want to link to?",
                description: "Copy and paste only the part after the .com.",
                type: "string",
              },
            ],
          },
          {
            name: "externalLink",
            type: "object",
            title: "External Page Link",
            icon: FaExternalLinkAlt,
            fields: [
              {
                name: "externalUrl",
                title: "Where do you want to link to?",
                description: "Include the full url of the page.",
                type: "url",
              },
            ],
          },
        ],
      },
    },
    {
      name: "postImage",
      title: "Post Image",
      icon: PostImageIcon,
      type: "postImage",
    },
    {
      name: "exercise",
      title: "Exercise",
      icon: ExerciseIcon,
      type: "exercise",
    },
  ],
};
