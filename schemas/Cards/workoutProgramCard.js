import { GiWeightLiftingUp } from 'react-icons/gi'

export default {
  name: 'workoutProgramCard',
  title: 'Workout Program Cards',
  icon: GiWeightLiftingUp,
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
      name: 'programBackgroundImage',
      title: 'Program Background Image:',
      type: 'cardImage',
    },
    {
      name: 'programDescription',
      title: 'Program Description:',
      description: 'Keep it short. About 150 to 160 total characters.',
      type: 'text',
      validation: (Rule) => {
        return Rule.required()
          .max(160)
          .error('Description should not be above 160 characters.')
      },
    },
    {
      name: 'programStatsFooter',
      title: 'Program Stats Bar:',
      description:
        'Enter the relevant information for the program you are creating.',
      type: 'workoutProgramStatsBar',
    },
  ],
}
