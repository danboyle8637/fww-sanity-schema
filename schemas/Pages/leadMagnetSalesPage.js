import { FaMoneyBill } from 'react-icons/fa'

export default {
  name: 'leadMagnetLandingPage',
  title: 'Lead Magnet Landing Page',
  icon: FaMoneyBill,
  type: 'document',
  fieldset: 'pages',
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description: 'A short title for the sidebar. Dev use only.',
      type: 'string',
    },
    {
      name: 'headlineOne',
      title: 'Headline Part 1:',
      description:
        'Use as the main headline if words are not being styled differently.',
      type: 'string',
    },
    {
      name: 'headlineTwo',
      title: 'Headline Part 2:',
      description:
        'This is not necessary. Use as the main headline if words are not being styled differently.',
      type: 'string',
    },
    {
      name: 'resetHeadlineBackground',
      title: 'Headline Background:',
      type: 'cardImage',
    },
    {
      name: 'resetVideoId',
      title: 'Sales Video Id:',
      type: 'number',
    },
    {
      name: 'resetBulletPoints',
      title: 'Killer Bullet Points:',
      description:
        'These are the hard hitting bullet points to sell account creation.',
      type: 'blockContent',
    },
    {
      name: 'callToActionHeadline',
      title: 'Call to Action Headline:',
      description: 'Keep it short, clear, but hard hitting as possible.',
      type: 'string',
    },
  ],
}
