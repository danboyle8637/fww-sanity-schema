import { FaPencilAlt } from 'react-icons/fa'

export default {
  name: 'copyBlock',
  title: 'Copy Block:',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      name: 'copySectionHeadline',
      title: 'Copy Section Headline:',
      description: 'If you need a headline, fill it in here.',
      type: 'string',
    },
    {
      name: 'copyContent',
      title: 'Copy Content:',
      type: 'blockContent',
    },
    {
      name: 'optionalButtonText',
      title: 'Optional Button Text:',
      description:
        'If the copy section needs a button, enter relevant button text here.',
      type: 'string',
    },
  ],
}
