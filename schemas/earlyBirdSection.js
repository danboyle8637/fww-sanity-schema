import { FaKiwiBird } from 'react-icons/fa'

export default {
  name: 'earlyBirdSection',
  title: 'Early Bird Section',
  icon: FaKiwiBird,
  type: 'document',
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description:
        'Add a title so you know what these images are when you connect them.',
      type: 'string',
    },
    {
      name: 'earlyBirdVideoId',
      title: 'Early Bird Video ID:',
      description: 'Only the video id number from Vimeo.',
      type: 'number',
    },
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
