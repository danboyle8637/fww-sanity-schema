import { FaLink, FaRegCompass, FaExternalLinkAlt } from 'react-icons/fa'
import FormTipIcon from '../components/FormTipIcon'
import IntensityTipIcon from '../components/IntensityTipIcon'
import ShamelessPlugIcon from '../components/ShamelessPlugIcon'
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
            name: 'internalLink',
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
                description: 'Copy and paste the entire link for the page.',
                type: 'url',
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
      name: 'formTip',
      title: 'Form Tip',
      icon: FormTipIcon,
      type: 'formTip',
    },
    {
      name: 'intensityTip',
      title: 'Intensity Tip',
      icon: IntensityTipIcon,
      type: 'intensityTip',
    },
    {
      name: 'shamelessPlug',
      title: 'Shameless Plug',
      icon: ShamelessPlugIcon,
      type: 'shamelessPlug',
    },
    {
      name: 'youTube',
      title: 'YouTube Embed',
      icon: YouTubeEmbedIcon,
      type: 'youTube',
    },
  ],
}
