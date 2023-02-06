// Then import schema types from any plugins that might expose them
import author from "./author";
import post from "./post";
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
import workoutProgramCard from "./Cards/workoutProgramCard";
import testimonialCard from "./Cards/testimonialCard";
import ctaBannerCard from "./Cards/ctaBannerCard";
import nutritionCard from "./Cards/nutritionProgramCard";
import recipePreviewCard from "./Cards/recipePreviewCard";
import docPriceCard from "./priceCard";
import blogCalloutCardImage from "./Images/blogCalloutCardImage";
import workoutProgramStatsBar from "./Cards/workoutProgramStatsBar";
import nutritionProgramStatsBar from "./Cards/nutritionProgramStatsBar";
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
import socialaccounts from "./BlogPost/socialaccounts";

// Shared Components on all Mini Sites
import downloads from "./downloads";
import seoData from "./seoData";

// FWW Habit Mini Site
import aboutFWWHabit from "./FWWHabit/about";
import benefitsFWWHabit from "./FWWHabit/benefits";
import workoutProgramsHabit from "./FWWHabit/workoutPrograms";
import pricingFWWHabit from "./FWWHabit/pricing";

// Will have to delete this with CLI tool
// fwwLiveWorkoutStyleCards
// Kettlebell Crunch

import baseLandingPage from "./LandingPages/baseLandingPage";
import fwwThankYouPages from "./Pages/thankYouPages";

import copyBlock from "./copyBlock";

import privateNutritionCoaching from "./Pages/privateNutritionCoaching";
import legalPages from "./Pages/legalPages";
import fwwLiveThreeDayTrial from "./Pages/fwwLiveThreeDayTrial";
import fwwLiveTestimonialLP from "./Pages/fwwLiveTestimonialLP";

import fwwLiveUpsellPage from "./Pages/fwwLiveUpsellPage";
import transformationsPage from "./Pages/transformationsPage";

// ? FWW LIVE
import fwwLiveSweatySelfies from "./Images/fwwLiveSweatySelfies";

// Consolidation
import salesPage from "./Pages/salesPage";

// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [
  author,
  post,
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
  workoutProgramCard,
  testimonialCard,
  ctaBannerCard,
  nutritionCard,
  recipePreviewCard,
  docPriceCard,
  blogCalloutCardImage,
  workoutProgramStatsBar,
  nutritionProgramStatsBar,
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
  downloads,
  fwwThankYouPages,
  legalPages,
  socialShareInformation,
  transformationsPage,
  fwwLiveSweatySelfies,
  sectionImage,
];
