export default {
  name: 'priceCard',
  title: 'Price Card:',
  description: 'This includes the data for all price cards.',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      name: 'programPrice',
      title: 'Program Price:',
      type: 'number',
    },
    {
      name: 'purchaseBulletPoints',
      title: 'Purchase Bullet Points:',
      description:
        'Three bullet points to ease their emotions when commiting to purchasing.',
      type: 'blockContent',
    },
    {
      name: 'purchaseButtonText',
      title: 'Purchase Program Button Text:',
      type: 'string',
    },
  ],
}
