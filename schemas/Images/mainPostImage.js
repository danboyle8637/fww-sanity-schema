export default {
  name: 'mainPostImage',
  title: 'Main Post Image',
  type: 'object',
  options: {
    collapsible: true,
  },
  fields: [
    {
      name: 'mainImageTiny',
      title: 'Main Image Tiny',
      description:
        'Upload a tiny main image so it can lazy load and blur up. Width: 50px',
      type: 'image',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      description:
        'Upload a main image that will show on the blog post card. Dimensions - 1200x680',
      type: 'image',
    },
    {
      name: 'titleText',
      title: 'Image Title:',
      description: 'Give this image a title.',
      type: 'string',
    },
    {
      name: 'altText',
      title: 'Image Alt Tag:',
      description:
        'Describe what this image is and/or is doing to a person who cannot see it.',
      type: 'string',
    },
  ],
}
