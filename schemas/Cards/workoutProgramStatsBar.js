import { FaChartBar } from 'react-icons/fa'

export default {
  name: 'workoutProgramStatsBar',
  title: 'Workout Program Stats Bar',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      name: 'programId',
      title: 'Program Id:',
      description: 'Camel cased title of the program.',
      type: 'string',
    },
    {
      name: 'programFitnessLevel',
      title: 'Program Fitness Level:',
      description: '1 is beginner and 5 is seriously advanced.',
      type: 'array',
      of: [{ type: 'number' }],
      options: {
        list: [
          { title: 'Beginner', value: 1 },
          { title: 'Intermediate 1', value: 2 },
          { title: 'Intermediate 2', value: 3 },
          { title: 'Advanced 1', value: 4 },
          { title: 'Advanced 2', value: 5 },
        ],
      },
    },
    {
      name: 'programTotalWorkouts',
      title: 'Total Workouts:',
      type: 'number',
      validation: (Rule) => Rule.required().integer().positive(),
    },
    {
      name: 'programDuration',
      title: 'Program Duration:',
      description:
        'Usually going to be 30 to 45 days but sometimes can go to 8 weeks.',
      type: 'string',
    },
  ],
}
