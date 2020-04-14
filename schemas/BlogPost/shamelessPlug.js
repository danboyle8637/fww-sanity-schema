export default {
  name: 'shamelessPlug',
  title: 'Shameless Plug:',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Tip Content:',
      description: 'Keep it concise and to the point.',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
}
