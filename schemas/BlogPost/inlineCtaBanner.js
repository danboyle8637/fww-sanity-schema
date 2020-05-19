export default {
  name: 'inlineCtaBanner',
  title: 'Inline Cta Banner',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      name: 'bannerData',
      title: 'Banner Data:',
      description: 'Which banner should we pull data from?',
      type: 'reference',
      to: [{ type: 'ctaBannerCards' }],
    },
  ],
}
