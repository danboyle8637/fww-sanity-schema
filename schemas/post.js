import { FaPencilAlt } from 'react-icons/fa'

export default {
  name: 'blogPost',
  title: 'Blog Post',
  icon: FaPencilAlt,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title:',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Page Path:',
      description: 'Enter a short, keyword based path to this post.',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'author',
      title: 'Author:',
      type: 'reference',
      to: { type: 'author' }
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      description:
        'Upload a main image that will show on the blog post card. Dimensions - 1200x680',
      type: 'detailedImage'
    },
    {
      name: 'tags',
      title: 'Tags:',
      description: 'Enter only the very relevant tag or tags for this post.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'postTag' } }]
    },
    {
      name: 'publishedAt',
      title: 'Published Date:',
      description: 'Enter the date to publish this post.',
      type: 'datetime'
    },
    {
      name: 'teaserCopy',
      title: 'Teaser Copy:',
      description: 'Sell the visitor to click and read this article.',
      type: 'text',
      rows: 5
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      description: 'Choose the button text based on type of post.',
      type: 'string',
      options: {
        list: [
          { title: 'Podcast', value: 'Listen to Episode' },
          { title: 'Article', value: 'Read the Post' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      }
    },
    {
      name: 'body',
      title: 'Post Body:',
      type: 'blockContent'
    }
  ]
}
