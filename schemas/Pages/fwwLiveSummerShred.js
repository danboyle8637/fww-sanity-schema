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
      description: 'Camel cased program title all one word... FWWLiveSummerShred',
      type: 'string',
    },
    {
      // Most of the time this is to set the sharing images for the page
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
      name: 'mainHeadline',
      title: 'Headline:',
      description: 'Keep it short but hardcore. It is the most important part.',
      type: 'string',
    },
    {
      name: 'headlineBackground',
      title: 'Headline Background:',
      type: 'reference',
      to: [{ type: 'backgroundImage' }],
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
      name: 'whatIsTheSummerShredSection',
      title: 'What Is The Summer Shred Section:',
      description: 'Explains what the challenge is at a high level.',
      type: 'copyBlock',
    },
    {
      name: 'liveWorkoutBulletPoints',
      title: 'Live Workout Bullet Points:',
      description: 'Bullet points explaining what the workouts are like.',
      type: 'copyBlock',
    },
    {
      name: 'challengeBulletPoints',
      title: 'How The Challenge Works Bullet Points:',
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
      name: 'swagPreviewImage',
      title: 'Swag Preview Image:',
      description: 'Upload a cool image to show what a swag bag actually looks like.',
      type: 'inPageImage'
    },
    {
      name: 'fwwLiveScheduleCopy',
      title: 'FWW LIVE Schedule Copy',
      type: 'copyBlock',
    },
    {
      name: 'callToActionCopy',
      title: 'Call to Action Copy:',
      description: 'Tell them to get on the Early Bird list with passion.',
      type: 'copyBlock',
    },
    {
      name: 'earlyBirdSignUpSection1',
      title: 'Early Bird Sign Up Section 1:',
      description: 'Write the first of the Early Bird section.',
      type: 'copyBlock',
    },
    {
      name: 'earlyBirdSignUpSection2',
      title: 'Early Bird Sign Up Section 2:',
      description: 'Write the rest of the Early Bird section.',
      type: 'copyBlock',
    },
    {
      name: 'switchBookImage',
      title: 'Switch Book Image:',
      description: 'Upload the image of the PDF version of the Switch book.',
      type: 'inPageImage'
    },
    {
      name: 'quickRecap',
      title: 'Quick Recap Copy:',
      description: 'Explain everything they get and why they need to join now.',
      type: 'copyBlock',
    },
  ],
}