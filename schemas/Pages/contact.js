import { FaEnvelope } from 'react-icons/fa'

export default {
  name: 'contactPage',
  title: 'Contact Page',
  icon: FaEnvelope,
  type: 'document',
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description: 'A short title for the sidebar. Dev use only.',
      type: 'string',
    },
    {
      name: 'programBackgroundImage',
      title: 'Program Background Image:',
      type: 'cardImage',
    },
    {
      name: 'companyAddress',
      title: 'Company Address:',
      description: 'This is the corporate address or PO Box.',
      type: 'blockContent',
    },
    {
      name: 'streetAddress',
      title: 'Street Address:',
      type: 'string',
    },
    {
      name: 'cityStateAddress',
      title: 'City State Zip Address:',
      type: 'string',
    },
  ],
}
