export default {
  name: 'socialShareBlock',
  title: 'Social Share Block',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      name: 'socialShareHeadline',
      title: 'Social Share Headline:',
      description: 'A short but enticing headline to make people click.',
      type: 'string',
    },
    {
      name: 'socialShareSlug',
      title: 'Social Share Slug:',
      description: 'Check this against the real url on the site. Ask Dan.',
      type: 'slug',
    },
    {
      name: 'socialShareDescription',
      title: 'Social Share Description:',
      description:
        'A brief and really enticing description of the page or post to entice the click.',
      type: 'text',
      rows: 5,
    },
    {
      name: 'socialShareImage',
      title: 'Social Share Image:',
      description:
        'This is the image for Facebook and Twitter. Dimensions: 1200x630.',
      type: 'image',
    },
  ],
}
