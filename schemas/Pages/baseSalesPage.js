import { FaDollarSign } from 'react-icons/fa'

export default {
  name: 'baseSalesPage',
  title: 'Base Sales Pages',
  icon: FaDollarSign,
  type: 'document',
  fieldsets: [
    { name: 'programStats', title: 'Program Stats Bar:' },
    { name: 'videoSection', title: 'Video Section' },
    { name: 'objectionSection', title: 'Objection Section' },
  ],
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description: 'A short title for the sidebar. Dev use only.',
      type: 'string',
    },
    {
      name: 'seoTitle',
      title: 'SEO Title:',
      description: 'Write a title for the sales letter.',
      type: 'string',
    },
    {
      name: 'seoDescription',
      title: 'SEO Description:',
      description: 'Write a short description for SEO reasons.',
      type: 'text',
      rows: 4,
    },
    {
      name: 'programId',
      title: 'Program Id:',
      description: 'Camel cased program title all one word.',
      type: 'string',
    },
    {
      name: 'programCategory',
      title: 'Program Category:',
      description: 'Choose what over arching category this program belongs to.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { value: 'ignite', title: 'Beginner' },
          { value: 'body_burn', title: 'Body Burn' },
          { value: 'strong', title: 'Kettlebells' },
          { value: 'nutrition', title: 'Nutrition' },
        ],
      },
      validation: (Rule) => Rule.required(),
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
      type: 'reference',
      to: [{ type: 'priceCards' }],
    },
    {
      name: 'fwwMonthlyPriceCard',
      title: 'FWW Monthly Price Card:',
      description:
        'Choose FWW Monthly price card if it applies for thir program.',
      type: 'reference',
      to: [{ type: 'priceCards' }],
    },
    {
      name: 'dontWait',
      title: `Don't Wait Copy:`,
      description:
        'Explain why they need to act now and call them to take that action.',
      type: 'copyBlock',
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
