import { FaTags } from 'react-icons/fa'

export default {
  name: 'postTag',
  title: 'Blog Post Tag',
  icon: FaTags,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'tagColor',
      title: 'Tag Color',
      type: 'string'
    }
  ]
}
