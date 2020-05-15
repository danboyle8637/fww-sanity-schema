import { FaLink, FaRegCompass, FaExternalLinkAlt } from 'react-icons/fa'
import FormTipIcon from '../components/FormTipIcon'
import YouTubeEmbedIcon from '../components/YouTubeEmbedIcon'
import PostImageIcon from '../components/PostImageIcon'

export default {
  name: 'blockContent',
  title: 'Rich Text Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
      ],
      marks: {
        decorators: [{ title: 'Strong', value: 'strong' }],
        annotations: [
          {
            name: 'internalPostLink',
            type: 'object',
            title: 'Internal Post Link',
            blockEditor: {
              icon: FaLink,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'What post do you want to link to?',
                to: [{ type: 'blogPost' }],
              },
            ],
          },
          {
            name: 'internalPageLink',
            type: 'object',
            title: 'Internal Page Link',
            blockEditor: { icon: FaRegCompass },
            fields: [
              {
                name: 'pageUrl',
                title: 'What page do you want to link to?',
                description: 'Copy and paste only the part after the .com.',
                type: 'string',
              },
            ],
          },
          {
            name: 'externalLink',
            type: 'object',
            title: 'External Page Link',
            blockEditor: {
              icon: FaExternalLinkAlt,
            },
            fields: [
              {
                name: 'externalUrl',
                title: 'Where do you want to link to?',
                description: 'Include the full url of the page.',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      name: 'postImage',
      title: 'Post Image',
      icon: PostImageIcon,
      type: 'postImage',
    },
    {
      name: 'blogPostTip',
      title: 'Blog Post Tip',
      icon: FormTipIcon,
      type: 'blogPostTip',
    },
    {
      name: 'youTube',
      title: 'YouTube Embed',
      icon: YouTubeEmbedIcon,
      type: 'youTube',
    },
  ],
}
