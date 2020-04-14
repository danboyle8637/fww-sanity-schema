import { FaHome } from 'react-icons/fa'

export default {
  name: 'homePage',
  title: 'Home Page',
  icon: FaHome,
  type: 'document',
  fieldsets: [{ name: 'pages', title: 'Site Pages:' }],
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description: 'A short title for the sidebar. Dev use only.',
      type: 'string',
    },
    {
      name: 'headlineSectionImage',
      title: 'Headline Section Image',
      type: 'reference',
      to: [{ type: 'backgroundImage' }],
    },
    {
      name: 'workoutProgramsSection',
      title: 'Workout Programs Section:',
      type: 'copyBlock',
    },
    {
      name: 'workoutSectionImage',
      title: 'Workout Section Image',
      type: 'inPageImage',
    },
    {
      name: 'nutritionProgramsSection',
      title: 'Nutrition Programs Section:',
      type: 'copyBlock',
    },
    {
      name: 'nutritionSectionImage',
      title: 'Nutrition Section Image',
      type: 'inPageImage',
    },
    {
      name: 'privateCoachingProgramsSection',
      title: 'Private Coaching Programs Section:',
      type: 'copyBlock',
    },
    {
      name: 'privateCoachingSectionImage',
      title: 'Private Coaching Image',
      type: 'reference',
      to: [{ type: 'backgroundImage' }],
    },
  ],
}
