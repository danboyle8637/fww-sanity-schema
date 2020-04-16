import { FaUser } from 'react-icons/fa'

export default {
  name: 'author',
  title: 'Author',
  icon: FaUser,
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 95,
      },
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'instagramURL',
      title: 'Instagram Url',
      type: 'url',
    },
    {
      name: 'youtubeURL',
      title: 'YouTube Url',
      type: 'url',
    },
    {
      name: 'certifications',
      title: 'Certifications',
      description: 'Just list the initials of the certifications you have.',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'array',
      description: 'Enter a fun and interesting fact that shows who you are.',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
}
