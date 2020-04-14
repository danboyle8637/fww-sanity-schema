export default {
  name: 'intensityTip',
  title: 'Intensity Tip:',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Tip Content:',
      description: 'Keep it concise and to the point.',
      type: 'array',
      of: [{ type: 'blockContent' }],
    },
  ],
}
