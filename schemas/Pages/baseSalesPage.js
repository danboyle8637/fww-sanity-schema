import { FaDollarSign } from 'react-icons/fa'

export default {
  name: 'baseSalesPage',
  title: 'Base Sales Pages',
  icon: FaDollarSign,
  type: 'document',
  fieldsets: [
    { name: 'programStats', title: 'Program Stats Bar:' },
    { name: 'videoSection', title: 'Video Section' },
  ],
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description: 'A short title for the sidebar. Dev use only.',
      type: 'string',
    },
    {
      name: 'programId',
      title: 'Program Id:',
      description: 'Camel cased program title all one word.',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Page Slug:',
      description: 'Autogenerate this by clicking on the button.',
      type: 'slug',
      options: {
        source: 'devTitle',
        maxLength: 96,
      },
    },
    {
      name: 'programHeaderImage',
      title: 'Program Header Image:',
      type: 'cardImage',
      fieldset: 'videoSection',
    },
    {
      name: 'programSalesVideoId',
      title: 'Program Sales Video Id:',
      description: 'This is the Vimeo video id.',
      type: 'number',
      fieldset: 'videoSection',
    },
    {
      name: 'workoutProgramStatsBar',
      title: 'Workout Program Stats Bar:',
      type: 'workoutProgramStatsBar',
      fieldset: 'programStats',
      fieldset: 'videoSection',
    },
    {
      name: 'nutritionProgramStatsBar',
      title: 'Nutrition Program Stats Bar:',
      type: 'nutritionProgramStatsBar',
      fieldset: 'programStats',
      fieldset: 'videoSection',
    },
    {
      name: 'purchaseButtonText1',
      title: 'First Purchase Button Text',
      type: 'string',
      fieldset: 'videoSection',
    },
    {
      name: 'whatYouGetSection',
      title: 'What You Get Section:',
      description: 'Entice visitors to stop and read what they get.',
      type: 'copyBlock',
    },
    {
      name: 'bigIdeaSection',
      title: 'Big Idea Section:',
      description:
        'Explain clearly and concisely why this programs exits for them.',
      type: 'copyBlock',
    },
    {
      name: 'durationSection',
      title: 'Duration Section:',
      description:
        'Explain clearly and concisely how long this program will take and why',
      type: 'copyBlock',
    },
    {
      name: 'equipmentSection',
      title: 'Equipment Section:',
      description:
        'Explain clearly and concisely what equipment is needed and nice to have.',
      type: 'copyBlock',
    },
    {
      name: 'callToActionSection',
      title: 'Call To Action Section:',
      description:
        'Explain clearly, concisely, and convincingly why they should join right now.',
      type: 'copyBlock',
    },
    {
      name: 'programPriceCard',
      title: 'Program Price Card:',
      type: 'priceCard',
    },
    {
      name: 'testimonial',
      title: 'Testimonial:',
      description:
        'This testimonial heeps praise about the program, the workouts, and training.',
      type: 'reference',
      to: [{ type: 'testimonialCard' }],
    },
  ],
}
