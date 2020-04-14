import { FaList } from 'react-icons/fa'

export default {
  name: 'certification',
  title: 'Certification',
  icon: FaList,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block'
        }
      ]
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image'
    }
  ]
}
