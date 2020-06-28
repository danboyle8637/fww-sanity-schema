import { GiPalmTree } from 'react-icons/gi'

export default {
  name: 'fwwLiveSummerShredThankYou',
  title: 'Summer Shred Thank You',
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
      name: 'thankYouVideoId',
      title: 'Thank You Video Id:',
      description: 'This is the Vimeo video id.',
      type: 'number',
    },
    {
      name: 'thankYouSection',
      title: 'Thank You Section:',
      description: 'Say thank you and make sure they get Switch.',
      type: 'copyBlock',
    },
    {
      name: 'tryFWWLiveSection',
      title: 'Try FWW LIVE Now Section:',
      description: 'Get them to try FWW LIVE now and build a habit now before the challenge starts.',
      type: 'copyBlock',
    },
    {
      name: 'trialPriceCard',
      title: 'Trial Price Card:',
      type: 'reference',
      to: [{ type: 'priceCards' }],
    },
    {
      name: 'switchBookImage',
      title: 'Switch Book Image:',
      description: 'Upload the image of the PDF version of the Switch book.',
      type: 'inPageImage'
    },
    {
      name: 'switchBookDownloadLink',
      title: 'Switch Book PDF',
      description: 'Upload the PDF of Switch.',
      type: 'file'
    }
  ]
}