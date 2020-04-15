export default {
  name: 'nutritionProgramStatsBar',
  title: 'Nutrition Program Stats Bar',
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
      name: 'programTotalRecipes',
      title: 'Total Recipes:',
      type: 'number',
      validation: (Rule) => Rule.integer().positive(),
    },
    {
      name: 'programTotalCategories',
      title: 'Total Categories:',
      description:
        'If you can categorize recipes or alternatives, put that number here.',
      type: 'number',
      validation: (Rule) => Rule.integer().positive(),
    },
    {
      name: 'programTotalAlternatives',
      title: 'Total Alternatives:',
      description: 'If applicable, how many healthy alternatives are there?',
      type: 'number',
      validation: (Rule) => Rule.integer().positive(),
    },
    {
      name: 'coachingVideos',
      title: 'Total Coaching Videos:',
      description: 'How many total coaching videos are there in the program.',
      type: 'number',
      validation: (Rule) => Rule.integer().positive(),
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
