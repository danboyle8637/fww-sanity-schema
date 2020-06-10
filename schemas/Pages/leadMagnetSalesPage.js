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
      name: 'socialShareInformation',
      title: 'Social Share Information:',
      description: 'This is all of the social sharing info for social media.',
      type: 'socialShareBlock',
    },
    {
      name: 'headlineBackground',
      title: 'Headline Background:',
      type: 'reference',
      to: [{ type: 'backgroundImage' }],
    },
    {
      name: 'salesVideoId',
      title: 'Sales Video Id:',
      type: 'number',
    },
    {
      name: 'resetBulletPoints',
      title: 'Killer Bullet Points:',
      description:
        'These are the hard hitting bullet points to sell account creation.',
      type: 'copyBlock',
    },
    {
      name: 'callToActionCopy',
      title: 'Call to Action Copy:',
      description: 'Tell them to click on a card and make it sound very easy.',
      type: 'copyBlock',
    },
  ],
}
