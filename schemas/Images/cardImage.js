export default {
  name: 'cardImage',
  title: 'Card Image',
  type: 'object',
  fields: [
    {
      name: 'tinyCardImage',
      title: 'Upload a Tiny Card Image:',
      description: 'This is a tiny image for lazy loading. Width = 50',
      type: 'image',
    },
    {
      name: 'mainCardImage',
      title: 'Main Card Image:',
      description: 'This is your main image. Dimensions are custom.',
      type: 'image',
    },
  ],
}
