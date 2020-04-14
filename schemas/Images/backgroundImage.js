import { FaRegImage } from 'react-icons/fa'

export default {
  name: 'backgroundImage',
  title: 'Background Images',
  icon: FaRegImage,
  type: 'document',
  fields: [
    {
      name: 'devTitle',
      title: 'Dev Title:',
      description:
        'Add a title so you know what these images are when you connect them.',
      type: 'string',
    },
    {
      name: 'imageTitle',
      title: 'Image Title:',
      description: 'Give this image a short title.',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'imageAltTag',
      title: 'Image Alt Tag:',
      description: 'Describe what this image is for people who cannot see it.',
      type: 'string',
      options: {
        isHighlighted: true,
      },
    },
    {
      name: 'mobileImage',
      title: 'Upload Mobile Image:',
      description: 'This is the image that will show on phones.',
      type: 'mobileImage',
    },
    {
      name: 'iPadImage',
      title: 'Upload iPad Image:',
      description: 'This is the image that will show on iPads and tablets.',
      type: 'iPadImage',
    },
    {
      name: 'laptopImage',
      title: 'Upload Laptop Image:',
      description: 'This is the image that will show on laptops and bigger.',
      type: 'laptopImage',
    },
  ],
}
