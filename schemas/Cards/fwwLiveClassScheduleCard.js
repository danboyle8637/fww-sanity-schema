export default {
  name: 'fwwLiveClassScheduleCard',
  title: 'FWW Live Class Schedule Card',
  type: 'object',
  options: { collapsible: true },
  fields: [
    {
      name: 'dayOfTheWeek',
      title: 'Day of the Week:',
      type: 'string',
    },
    {
      name: 'classTime1',
      title: 'First Class Time',
      description:
        'Enter the class time like this... 10:00 AM - Interval Training',
      type: 'string',
    },
    {
      name: 'classTime2',
      title: 'Second Class Time',
      description:
        'Enter the class time like this... 10:00 AM - Kettlebell Training',
      type: 'string',
    },
  ],
}
