export default {
  name: 'laptopImage',
  title: 'Laptop Image',
  type: 'object',
  fields: [
    {
      name: 'tinyLaptopImage',
      title: 'Upload a Tiny Laptop Image:',
      description: 'This is a tiny image for lazy loading. Width = 50',
      type: 'image',
    },
    {
      name: 'mainLaptopImage',
      title: 'Main Laptop Image:',
      description: 'This is your main image. If a background 1440x700',
      type: 'image',
    },
  ],
}
