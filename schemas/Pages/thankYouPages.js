import { FaEarlybirds } from 'react-icons/fa'

export default {
  name: 'earlyBirdThankYou',
  title: 'Early Bird Thank You Page',
  icon: FaEarlybirds,
  type: 'document',
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description: 'A short title for the sidebar. Dev use only.',
      type: 'string',
    },
    {
      name: 'thankYouBackground',
      title: 'Thank You Header Background:',
      type: 'reference',
      to: [{ type: 'backgroundImage' }],
    },
    {
      name: 'thankYouCopy',
      title: 'Thank You Copy:',
      description: 'Tell them to click on a card and make it sound very easy.',
      type: 'copyBlock',
    },
  ],
}
