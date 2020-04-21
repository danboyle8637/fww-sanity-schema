import { FaTint } from 'react-icons/fa'

export default {
  name: 'programsStorePage',
  title: 'Programs Store Page',
  icon: FaTint,
  type: 'document',
  fieldsets: [
    { name: 'freeProgramSection', title: 'Free Programs Section:' },
    { name: 'premiumProgramSection', title: 'Premium Programs Section:' },
  ],
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
      name: 'programsPageHeadline',
      title: 'Programs Page Headline:',
      type: 'string',
    },
    {
      name: 'freeProgramsSection',
      title: 'Free Programs Section:',
      type: 'copyBlock',
      fieldset: 'freeProgramSection',
    },
    {
      name: 'freeProgramsVideo',
      title: 'Free Programs How to Choose Video Id:',
      type: 'number',
      fieldset: 'freeProgramSection',
    },
    {
      name: 'premiumProgramsSection',
      title: 'Premium Programs Section:',
      type: 'copyBlock',
      fieldset: 'premiumProgramSection',
    },
    {
      name: 'premiumProgramsVideo',
      title: 'Premium Programs How to Choose Video Id:',
      type: 'number',
      fieldset: 'premiumProgramSection',
    },
    {
      name: 'workoutTestimonial1',
      title: 'Workout Testimonial:',
      description:
        'Make sure this testimonial has to do with the FWW workouts.',
      type: 'reference',
      to: [{ type: 'testimonialCard' }],
    },
    {
      name: 'workoutTestimonial2',
      title: 'Workout Testimonial:',
      description:
        'Make sure this testimonial has to do with the FWW workouts.',
      type: 'reference',
      to: [{ type: 'testimonialCard' }],
    },
    {
      name: 'workoutTestimonial3',
      title: 'Workout Testimonial:',
      description:
        'Make sure this testimonial has to do with the FWW workouts.',
      type: 'reference',
      to: [{ type: 'testimonialCard' }],
    },
  ],
}
