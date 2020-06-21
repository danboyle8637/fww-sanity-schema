import { GiPalmTree } from 'react-icons/gi'

export default {
    name: 'fwwLiveSummerShred',
    title: 'FWW LIVE Summer Shred',
    icon: GiPalmTree,
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
        title: 'Program Id:',
        description: 'Camel cased program title all one word.',
        type: 'string',
      },
      {
        name: 'socialShareInformation',
        title: 'Social Share Information:',
        description: 'This is all of the social sharing info for social media.',
        type: 'socialShareBlock',
      },
      {
        name: 'slug',
        title: 'Program Slug:',
        description: 'Program slug is lowercase name with dashes instead of spaces',
        type: 'slug',
        options: {
          source: 'devTitle',
          maxLength: 96,
        },
      },
      {
        name: 'programHeaderImage',
        title: 'Program Header Image:',
        type: 'cardImage',
      },
      {
        name: 'programSalesVideoId',
        title: 'Program Sales Video Id:',
        description: 'This is the Vimeo video id.',
        type: 'number',
      },
      {
        name: 'programStatsBar',
        title: 'Program Stats Bar:',
        type: 'workoutProgramStatsBar',
      },
      {
        name: 'purchaseButtonText1',
        title: 'First Purchase Button Text',
        type: 'string',
      },
      {
        name: 'leadSection',
        title: 'Lead Section:',
        description: 'The lead into the page. This is important and needs to hook them.',
        type: 'copyBlock',
      },
      {
        name: 'whatYouGetBulletPoints',
        title: 'What You Get Bullet Points:',
        description: 'These are the bullet points that explain what you get.',
        type: 'copyBlock',
      },
      {
        name: 'challengeBulletPoints',
        title: 'Challenge Bullet Points:',
        description: 'How the challenge works bullet points.',
        type: 'copyBlock',
      },
      {
        name: 'swagBulletPoints',
        title: 'Swag Bullet Points:',
        description: 'The t-shirt and what the winner gets bullet points.',
        type: 'copyBlock',
      },
      {
        name: 'fwwLiveScheduleCopy',
        title: 'FWW LIVE Schedule Copy',
        type: 'copyBlock',
      },
      {
        name: 'quickRecap',
        title: 'Quick Recap Copy:',
        description: 'Explain everything they get and why they need to join now.',
        type: 'copyBlock',
      },
      {
        name: 'callToActionCopy',
        title: 'Call to Action Copy:',
        description: 'Tell them to get on the Early Bird list with passion.',
        type: 'copyBlock',
      },
      {
        name: 'dontWait',
        title: `Don't Wait Copy:`,
        description: 'Explain why they need to act now and call them to take that action.',
        type: 'copyBlock',
      },
    ],
}