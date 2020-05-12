import { FaFilm } from 'react-icons/fa'

export default {
  name: 'fwwLiveSalesPage',
  title: 'FWW LIVE Sales Page',
  icon: FaFilm,
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
      title: 'Headline:',
      description: 'Keep it short but hardcore. It is the most important part.',
      type: 'string',
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
    {
      name: 'programPriceCard',
      title: 'Program Price Card:',
      type: 'reference',
      to: [{ type: 'priceCards' }],
    },
  ],
}
