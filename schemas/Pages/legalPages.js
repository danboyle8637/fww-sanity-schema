import { FaEmpire } from 'react-icons/fa'

export default {
  name: 'legalPages',
  title: 'Legal Pages',
  icon: FaEmpire,
  type: 'document',
  fields: [
    {
      name: 'legalHeadline',
      title: 'Headline:',
      description:
        'Keep is really simple like Privacy Policy, Disclaimer, etc...',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Page Path:',
      description: 'Autogenerate from title.',
      type: 'slug',
      options: {
        source: 'legalHeadline',
        maxLength: 96,
      },
    },
    {
      name: 'legalBodyCopy',
      title: 'The Legal Crap:',
      type: 'blockContent',
    },
  ],
}
