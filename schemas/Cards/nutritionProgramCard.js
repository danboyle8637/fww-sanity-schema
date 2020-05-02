import { FaCarrot } from 'react-icons/fa'

export default {
  name: 'nutritionProgramCard',
  title: 'Nutrition Program Cards',
  icon: FaCarrot,
  type: 'document',
  fields: [
    {
      name: 'devTitle',
      title: 'Program Title:',
      type: 'string',
    },
    {
      name: 'programId',
      title: 'ProgramId:',
      description: 'Program Name in camelCase.',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Program Slug:',
      description:
        'Program slug is lowercase name with dashes instead of spaces',
      type: 'slug',
      options: {
        source: 'devTitle',
        maxLength: 96,
      },
    },
    {
      name: 'programPrice',
      title: 'Program Price:',
      description: 'MAKE SURE this matches the price set in the database.',
      type: 'number',
    },
    {
      name: 'programBackgroundImage',
      title: 'Program Background Image:',
      type: 'cardImage',
    },
    {
      name: 'programDescription',
      title: 'Program Description:',
      description: 'Keep it short. About 150 to 160 total characters.',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .max(160)
          .error('Description should not be above 160 characters.'),
    },
    {
      name: 'programStatsFooter',
      title: 'Program Stats Bar:',
      description:
        'Enter the relevant information for the program you are creating.',
      type: 'nutritionProgramStatsBar',
    },
  ],
}
