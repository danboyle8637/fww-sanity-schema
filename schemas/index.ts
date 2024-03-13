// Then import schema types from any plugins that might expose them
import author from "./author";
import post from "./post";
import videoPost from "./videoPost";
import postTag from "./postTag";
import blockContent from "./blockContent";
import secondaryBlockContent from "./blockContent/secondaryBlockContent";
import mobileImage from "./Images/mobileImage";
import iPadImage from "./Images/iPadImage";
import laptopImage from "./Images/laptopImage";
import cardImage from "./Images/cardImage";
import standardImage from "./Images/standardImage";
import mainPostImage from "./Images/mainPostImage";
import postImage from "./BlogPost/postImage";
import inlineCtaBanner from "./BlogPost/inlineCtaBanner";
import pageImage from "./pageImage";
import backgroundImage from "./Images/backgroundImage";
import inPageImage from "./Images/inPageImage";
import testimonialCard from "./Cards/testimonialCard";
import ctaBannerCard from "./Cards/ctaBannerCard";
import recipePreviewCard from "./Cards/recipePreviewCard";
import blogCalloutCardImage from "./Images/blogCalloutCardImage";
import youTube from "./BlogPost/youTube";
import podcast from "./BlogPost/podcast";
import blogPostTip from "./BlogPost/blogPostTip";
import videoCloudflare from "./BlogPost/videoCloudflare";
import socialShareInformation from "./socialShareInformation";
import sectionImage from "./Images/sectionImage";
import workout from "./BlogPost/workout";
import exercise from "./BlogPost/exercise";
import recipe from "./BlogPost/recipe";
import detailedStep from "./BlogPost/detailedStep";
import socialaccounts from "./BlogPost/socialAccounts";

// Rich snippets and schema for structured site data
import articleSchema from "./richSchema/articleSchema";
import videoSchema from "./richSchema/videoSchema";

// Will have to delete this with CLI tool
// fwwLiveWorkoutStyleCards
// Kettlebell Crunch

import copyBlock from "./copyBlock";

import legalPages from "./Pages/legalPages";

import transformationsPage from "./Pages/transformationsPage";

// ? FWW LIVE
import fwwLiveSweatySelfies from "./Images/fwwLiveSweatySelfies";

// Consolidation
import salesPage from "./Pages/salesPage";

// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [
  author,
  articleSchema,
  videoSchema,
  post,
  videoPost,
  postTag,
  blockContent,
  secondaryBlockContent,
  mobileImage,
  iPadImage,
  laptopImage,
  cardImage,
  standardImage,
  mainPostImage,
  postImage,
  inlineCtaBanner,
  pageImage,
  backgroundImage,
  inPageImage,
  testimonialCard,
  ctaBannerCard,
  recipePreviewCard,
  blogCalloutCardImage,
  youTube,
  podcast,
  blogPostTip,
  videoCloudflare,
  workout,
  exercise,
  recipe,
  detailedStep,
  socialaccounts,
  copyBlock,
  salesPage,
  legalPages,
  socialShareInformation,
  transformationsPage,
  fwwLiveSweatySelfies,
  sectionImage,
];
