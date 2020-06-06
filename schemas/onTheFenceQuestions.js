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
          { value: 'Ignite', title: 'Ignite' },
          { value: 'BBCFocus', title: 'BBC Focus' },
          { value: 'BBCPieces', title: 'BBC Pieces' },
          { value: 'Strong', title: 'Strong' },
          { value: 'DoubleTrouble', title: 'Double Trouble' },
          { value: 'Amped', title: 'Amped' },
          { value: 'FWWMonthly', title: 'FWW Monthly' },
          { value: 'FWWLive', title: 'FWW LIVE' },
          { value: 'PlanSmartEatReal', title: 'Plan Smart Eat Real' },
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
