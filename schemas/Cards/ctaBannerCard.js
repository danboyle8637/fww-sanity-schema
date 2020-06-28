import { FaCommentDollar } from 'react-icons/fa'

export default {
  name: 'ctaBannerCards',
  title: 'CTA Banner Cards',
  icon: FaCommentDollar,
  type: 'document',
  fields: [
    {
      name: 'devTitle',
      title: 'Call To Action Banner Title:',
      type: 'string',
    },
    {
      name: 'ctaId',
      title: 'Call To Action Id:',
      description: 'This helps the app know what icon to show on the card.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'FWW Monthly', value: 'fwwMonthly' },
          { title: 'FWW Reset', value: 'fwwReset' },
          { title: 'Open Workout', value: 'openWorkout' },
          { title: 'Open Q and A', value: 'openQA' },
          { title: 'Plan Smart Eat Real', value: 'planSmartEatReal' },
          { title: 'Nutrition Coaching', value: 'privateNutritionCoaching' },
          { title: 'FWW LIVE', value: 'fwwLive' },
          { title: 'Summer Shred', value: 'summerShred' },
        ],
      },
    },
    {
      name: 'mobileImage',
      title: 'Upload Mobile Image:',
      description: 'This is the image that will show on phones.',
      type: 'mobileImage',
    },
    {
      name: 'iPadImage',
      title: 'Upload Above Mobile Image:',
      description: 'This is the image that will show on iPads and above.',
      type: 'iPadImage',
    },
    {
      name: 'laptopImage',
      title: 'Upload Laptop Image:',
      description: 'This is the image that will show on laptops and bigger.',
      type: 'laptopImage',
    },
    {
      name: 'imageTitle',
      title: 'Image Title:',
      description: 'Give this image a short title.',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'imageAltTag',
      title: 'Image Alt Tag:',
      description: 'Describe what this image is for people who cannot see it.',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'ctaHeadline',
      title: 'CTA Headline - Optional:',
      description: 'You probably do not need this, but just in case.',
      type: 'string',
    },
    {
      name: 'ctaDescription',
      title: 'CTA Description:',
      description:
        'This is the one to two sentance enticing call to click on the button.',
      type: 'text',
    },
    {
      name: 'bannerSlug',
      title: 'Banner Slug:',
      description: 'Add the slug to where the banner should be linked to.',
      type: 'slug',
    },
    {
      name: 'ctaButtonText',
      title: 'CTA Button Text:',
      description: 'Short button cta. Make it action verb oriented.',
      type: 'string',
    },
  ],
}
