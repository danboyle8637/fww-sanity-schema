export default {
  name: 'iPadImage',
  title: 'IPad Image',
  type: 'object',
  fields: [
    {
      name: 'tinyIPadImage',
      title: 'Upload a Tiny iPad Image:',
      description: 'This is a tiny image for lazy loading. Width = 50',
      type: 'image',
    },
    {
      name: 'mainIPadImage',
      title: 'Main iPad Image:',
      description: 'This is your main image. If a background 2048x1300',
      type: 'image',
    },
  ],
}
