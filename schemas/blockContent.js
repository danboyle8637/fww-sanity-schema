import { FaLink, FaRegCompass, FaExternalLinkAlt } from "react-icons/fa";
import FormTipIcon from "../components/FormTipIcon";
import YouTubeEmbedIcon from "../components/YouTubeEmbedIcon";
import PostImageIcon from "../components/PostImageIcon";
import PodcastEmbedIcon from "../components/PodcastEmbedIcon";
import CtaBannerIcon from "../components/CtaBannerIcon";
import WorkoutIcon from "../components/WorkoutIcon";
import RecipeIcon from "../components/RecipeIcon";
import StepIcon from "../components/StepIcon";
import InstagramIcon from "../components/InstagramIcon";

export default {
  name: "blockContent",
  title: "Rich Text Content",
  type: "array",
  of: [
    {
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "Heading 2", value: "h2" },
        { title: "Heading 3", value: "h3" },
        { title: "Heading 4", value: "h4" },
      ],
      lists: [
        { title: "Numbers", value: "number" },
        { title: "Bullet", value: "bullet" },
        { title: "Blue Bullet", value: "blueBullet" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "BlueStrong", value: "blueStrong" },
        ],
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
      name: "blogPostTip",
      title: "Blog Post Tip",
      icon: FormTipIcon,
      type: "blogPostTip",
    },
    {
      name: "detailedStep",
      title: "Detailed Step",
      icon: StepIcon,
      type: "detailedStep",
    },
    {
      // TODO - Dlete the workout... we will just use bullets
      name: "workout",
      title: "Workout",
      icon: WorkoutIcon,
      type: "workout",
    },
    {
      name: "recipe",
      title: "Recipe",
      icon: RecipeIcon,
      type: "recipe",
    },
    {
      name: "youTube",
      title: "YouTube Embed",
      icon: YouTubeEmbedIcon,
      type: "youTube",
    },
    {
      name: "podcast",
      title: "Podcast Embed",
      icon: PodcastEmbedIcon,
      type: "podcast",
    },
    {
      name: "socialAccounts",
      title: "Social Accounts List",
      icon: InstagramIcon,
      type: "socialAccounts",
    },
    {
      name: "videoCloudflare",
      title: "Cloudflare Video",
      type: "videoCloudflare",
    },
    {
      name: "ctaBanner",
      title: "CTA Banner",
      icon: CtaBannerIcon,
      type: "inlineCtaBanner",
    },
  ],
};
