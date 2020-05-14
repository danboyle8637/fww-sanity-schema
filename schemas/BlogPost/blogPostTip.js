export default {
  name: 'blogPostTip',
  title: 'Blog Post Tip:',
  type: 'object',
  fields: [
    {
      name: 'tipType',
      title: 'Tip Type"',
      description: 'Choose the type of tip you want to show.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Form Tip', value: 'formTip' },
          { title: 'Intensity Tip', value: 'intensityTip' },
          { title: 'Big Idea', value: 'bigIdea' },
        ],
      },
    },
    {
      name: 'tipHeaderImage',
      title: 'Tip Header Image:',
      description: 'Choose the right image. Make sure you double check this.',
      type: 'reference',
      to: [{ type: 'blogCalloutCardImage' }],
    },
    {
      name: 'formTip',
      title: 'Form Tip Content:',
      description: 'Keep it concise and to the point.',
      type: 'blockContent',
    },
  ],
}
