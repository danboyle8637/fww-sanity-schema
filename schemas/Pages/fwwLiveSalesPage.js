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
      name: 'purchaseButtonText1',
      title: 'First Purchase Button Text',
      type: 'string',
    },
    {
      name: 'fwwLiveBulletPoints',
      title: 'Killer Bullet Points:',
      description:
        'These are the hard hitting bullet points to sell account creation.',
      type: 'copyBlock',
    },
    {
      name: 'fwwLiveScheduleCopy',
      title: 'FWW LIVE Schedule Copy',
      type: 'copyBlock',
    },
    {
      name: 'mondaySchedule',
      title: 'Monday Schedule:',
      type: 'fwwLiveClassScheduleCard',
    },
    {
      name: 'tuesdaySchedule',
      title: 'Tuesday Schedule:',
      type: 'fwwLiveClassScheduleCard',
    },
    {
      name: 'wednesdaySchedule',
      title: 'Wednesday Schedule:',
      type: 'fwwLiveClassScheduleCard',
    },
    {
      name: 'thursdaySchedule',
      title: 'Thursday Schedule:',
      type: 'fwwLiveClassScheduleCard',
    },
    {
      name: 'fridaySchedule',
      title: 'Friday Schedule:',
      type: 'fwwLiveClassScheduleCard',
    },
    {
      name: 'sundaySchedule',
      title: 'Sunday Schedule:',
      type: 'fwwLiveClassScheduleCard',
    },
    {
      name: 'callToActionCopy',
      title: 'Call to Action Copy:',
      description: 'Tell them to click on a card and make it sound very easy.',
      type: 'copyBlock',
    },
    {
      name: 'trialPriceCard',
      title: 'Trial Price Card:',
      type: 'reference',
      to: [{ type: 'priceCards' }],
    },
    {
      name: 'monthlyPriceCard',
      title: 'Monthly Price Card:',
      type: 'reference',
      to: [{ type: 'priceCards' }],
    },
  ],
}
