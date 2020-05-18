export default {
  name: 'inlineCtaBanner',
  title: 'Inline Cta Banner',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      name: 'bannerId',
      title: 'Banner Id:',
      description: 'This helps the app know which banner to show in the post.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'FWW Monthly', value: 'fwwMonthly' },
          { title: 'FWW Reset', value: 'fwwReset' },
          { title: 'Open Workout', value: 'openWorkout' },
          { title: 'Open Q and A', value: 'openQA' },
          { title: 'Plan Smart Eat Real', value: 'planSmartEatReal' },
          { title: 'Nutrition Coaching', value: 'privateNutritionCoaching' },
          { title: 'FWW LIVE', value: 'fwwLive' },
        ],
      },
    },
  ],
}
