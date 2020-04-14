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
          { title: 'Open Workout', value: 'openWorkout' },
          { title: 'Open Q and A', value: 'openQA' },
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
      name: 'ctaButtonText',
      title: 'CTA Button Text:',
      description: 'Short button cta. Make it action verb oriented.',
      type: 'string',
    },
  ],
}
