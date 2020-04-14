import { FaLayerGroup } from 'react-icons/fa'

export default {
  name: 'recipePreviewCard',
  title: 'Recipe Preview Card',
  icon: FaLayerGroup,
  type: 'document',
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description: 'A short title for the sidebar. Dev use only.',
      type: 'string',
    },
    {
      name: 'recipeImage',
      title: 'Recipe Card Image:',
      description: 'A smaller image size of 1200x480',
      type: 'cardImage',
    },
    {
      name: 'recipeHeadline',
      title: 'Recipe Headline:',
      type: 'string',
    },
    {
      name: 'recipeDescription',
      title: 'Recipe Description',
      description:
        'A short but really enticing description of the specific recipe. Make them want it.',
      type: 'text',
    },
  ],
}
