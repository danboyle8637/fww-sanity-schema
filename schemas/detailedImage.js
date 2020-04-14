export default {
  name: 'detailedImage',
  title: 'Detailed Image',
  type: 'image',
  options: {
    hotspot: true
  },
  fields: [
    {
      name: 'altText',
      title: 'Alternate Text',
      description: 'Describe what this image is and/or is doing.',
      type: 'string'
    }
  ]
}
