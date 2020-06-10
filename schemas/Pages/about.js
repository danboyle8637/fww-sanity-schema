import { FaRegHeart } from 'react-icons/fa'

export default {
  name: 'aboutPage',
  title: 'About Page',
  icon: FaRegHeart,
  type: 'document',
  fieldsets: [{ name: 'videoSection', title: 'Video Section:' }],
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
      name: 'socialShareInformation',
      title: 'Social Share Information:',
      description: 'This is all of the social sharing info for social media.',
      type: 'socialShareBlock',
    },
    {
      name: 'aboutHeadlineAndLead',
      title: 'About Main Headline and Lead Copy:',
      type: 'copyBlock',
    },
    {
      name: 'coreBeliefsHeadline',
      title: 'Core Beleifs Headline:',
      description:
        'This headline introduces the video where we share our style and beliefs about training as a busy woman.',
      type: 'string',
      fieldset: 'videoSection',
    },
    {
      name: 'videoId',
      title: 'Vimeo Video Id:',
      type: 'number',
      fieldset: 'videoSection',
    },
    {
      name: 'kindalCertifications',
      title: 'Kindal Certifications:',
      type: 'copyBlock',
    },
    {
      name: 'danCertifications',
      title: 'Dan Certifications:',
      type: 'copyBlock',
    },
    {
      name: 'kindalMobileBackgroundImage',
      title: 'Kindal Mobile Background Image:',
      type: 'reference',
      to: [{ type: 'backgroundImage' }],
    },
    {
      name: 'danMobileBackgroundImage',
      title: 'Dan Mobile Background Image:',
      type: 'reference',
      to: [{ type: 'backgroundImage' }],
    },
    {
      name: 'kindalDanTabletLaptopBackgroundImage',
      title: 'Kindal and Dan Tablet/Laptop Background Image:',
      type: 'reference',
      to: [{ type: 'backgroundImage' }],
    },
    {
      name: 'testimonial1',
      title: 'Testimonial:',
      description:
        'This testimonial heeps praise on us as people and trainers, not about programs.',
      type: 'reference',
      to: [{ type: 'testimonialCard' }],
    },
    {
      name: 'testimonial2',
      title: 'Testimonial:',
      description:
        'This testimonial heeps praise on us as people and trainers, not about programs.',
      type: 'reference',
      to: [{ type: 'testimonialCard' }],
    },
    {
      name: 'testimonial3',
      title: 'Testimonial:',
      description:
        'This testimonial heeps praise on us as people and trainers, not about programs.',
      type: 'reference',
      to: [{ type: 'testimonialCard' }],
    },
  ],
}
