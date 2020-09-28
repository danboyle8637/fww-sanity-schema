// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type"
import author from "./author"
import post from "./post"
import postTag from "./postTag"
import blockContent from "./blockContent"
import mobileImage from "./Images/mobileImage"
import iPadImage from "./Images/iPadImage"
import laptopImage from "./Images/laptopImage"
import cardImage from "./Images/cardImage"
import standardImage from "./Images/standardImage"
import mainPostImage from "./Images/mainPostImage"
import postImage from "./BlogPost/postImage"
import inlineCtaBanner from "./BlogPost/inlineCtaBanner"
import pageImage from "./pageImage"
import backgroundImage from "./Images/backgroundImage"
import inPageImage from "./Images/inPageImage"
import workoutProgramCard from "./Cards/workoutProgramCard"
import testimonialCard from "./Cards/testimonialCard"
import ctaBannerCard from "./Cards/ctaBannerCard"
import nutritionCard from "./Cards/nutritionProgramCard"
import recipePreviewCard from "./Cards/recipePreviewCard"
import docPriceCard from "./priceCard"
import blogCalloutCardImage from "./Images/blogCalloutCardImage"
import workoutProgramStatsBar from "./Cards/workoutProgramStatsBar"
import nutritionProgramStatsBar from "./Cards/nutritionProgramStatsBar"
import youTube from "./BlogPost/youTube"
import podcast from "./BlogPost/podcast"
import blogPostTip from "./BlogPost/blogPostTip"
import onTheFenceQuestions from "./onTheFenceQuestions"
import fwwLiveClassScheduleCard from "./Cards/fwwLiveClassScheduleCard"
import socialShareInformation from "./socialShareInformation"

import copyBlock from "./copyBlock"
import earlyBirdSection from "./earlyBirdSection"

import home from "./Pages/home"
import about from "./Pages/about"
import programsStorePage from "./Pages/programsStorePage"
import baseSalesPage from "./Pages/baseSalesPage"
import planSmartEatRealSalesPage from "./Pages/planSmartEatRealSalesPage"

import privateNutritionCoaching from "./Pages/privateNutritionCoaching"
import contactPage from "./Pages/contact"
import legalPages from "./Pages/legalPages"
import thankYouPages from "./Pages/thankYouPages"
import fwwLiveWorkoutStyleCards from "./Cards/fwwLiveWorkoutStyleCards"
import fwwLiveClassScheduleCard2 from "./Cards/fwwLiveClassScheduleCard2"
import fwwLiveTrialThankYou from "./Pages/fwwLiveTrialThankYou"
import fwwLiveSalesPage from "./Pages/fwwLiveSalesPage"
import fwwLiveThreeDayTrial from "./Pages/fwwLiveThreeDayTrial"
import fwwLiveTestimonialLP from "./Pages/fwwLiveTestimonialLP"
import fwwLiveSweatySelfieContent from "./Pages/fwwLiveSweatySelfieContest"
import fwwLiveSweatySelfieThankYou from "./Pages/fwwLiveSweatySelfieThankYou"

import fwwLiveUpsellPage from "./Pages/fwwLiveUpsellPage"
import transformationsPage from "./Pages/transformationsPage"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: `Fit Women's Weekly`,
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    author,
    post,
    postTag,
    blockContent,
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
    fwwLiveClassScheduleCard,
    docPriceCard,
    blogCalloutCardImage,
    workoutProgramStatsBar,
    nutritionProgramStatsBar,
    youTube,
    podcast,
    blogPostTip,
    onTheFenceQuestions,
    copyBlock,
    earlyBirdSection,
    home,
    about,
    // leadMagnetSalesPage,
    programsStorePage,
    baseSalesPage,
    planSmartEatRealSalesPage,
    contactPage,
    fwwLiveSalesPage,
    fwwLiveClassScheduleCard2,
    privateNutritionCoaching,
    legalPages,
    thankYouPages,
    socialShareInformation,
    fwwLiveWorkoutStyleCards,
    fwwLiveThreeDayTrial,
    fwwLiveUpsellPage,
    fwwLiveTestimonialLP,
    transformationsPage,
    fwwLiveTrialThankYou,
    fwwLiveSweatySelfieContent,
    fwwLiveSweatySelfieThankYou,
  ]),
})
