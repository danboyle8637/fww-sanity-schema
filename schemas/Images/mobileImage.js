export default {
  name: 'mobileImage',
  title: 'Mobile Image',
  type: 'object',
  fields: [
    {
      name: 'tinyMobileImage',
      title: 'Upload a Tiny Mobile Image:',
      description: 'This is a tiny image for lazy loading. Width = 50',
      type: 'image',
    },
    {
      name: 'mainMobileImage',
      title: 'Main Mobile Image:',
      description: 'This is your main image. If a background 750x1300',
      type: 'image',
    }
  ],
}
