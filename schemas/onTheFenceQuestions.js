import { FaQuestion } from 'react-icons/fa'

export default {
  name: 'onTheFenceQuestions',
  title: 'On The Fence Questions',
  icon: FaQuestion,
  type: 'document',
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description: 'A short title for the sidebar. Dev use only.',
      type: 'string',
    },
    {
      name: 'programId',
      title: 'Check the programs this question applies to.',
      description:
        'A question can apply to more than one program, do that here.',
      type: 'array',
      options: {
        list: [
          { value: 'ignite', title: 'Ignite' },
          { value: 'bbcFocus', title: 'BBC Focus' },
          { value: 'bbcPieces', title: 'BBC Pieces' },
          { value: 'strong', title: 'Strong' },
          { value: 'doubleTrouble', title: 'Double Trouble' },
          { value: 'amped', title: 'Amped' },
          { value: 'fwwMonthly', title: 'FWW Monthly' },
          { value: 'fwwLive', title: 'FWW LIVE' },
          { value: 'planSmartEatReal', title: 'Plan Smart Eat Real' },
        ],
      },
      of: [{ type: 'string' }],
    },
    {
      name: 'programCategory',
      title: 'Is this fitness related or nutrition?',
      type: 'array',
      options: {
        list: [
          { value: 'fitness', title: 'Fitness' },
          { value: 'nutrition', title: 'Nutrition' },
        ],
      },
      of: [{ type: 'string' }],
    },
    {
      name: 'objectionHeadline',
      title: 'Objection Headline:',
      description: 'What is the objection the prospect would ask you?',
      type: 'string',
    },
    {
      name: 'objectionAnswer',
      title: 'Objection Answer:',
      type: 'blockContent',
    },
  ],
}
