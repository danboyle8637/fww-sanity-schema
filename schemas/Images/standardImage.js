export default {
  name: 'standardImage',
  title: 'Standard Image',
  type: 'object',
  fields: [
    {
      name: 'tinyStandardImage',
      title: 'Upload a Tiny Standard Image:',
      description: 'This is a tiny image for lazy loading. Width = 50',
      type: 'image',
    },
    {
      name: 'mainStandardImage',
      title: 'Main Standard Image:',
      description: 'This is your main image. Dimensions are custom.',
      type: 'image',
    },
  ],
}
