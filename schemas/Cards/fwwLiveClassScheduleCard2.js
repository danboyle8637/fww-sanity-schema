export default {
  name: "fwwLiveClassScheduleCard2",
  title: "FWW Live Class Schedule Card",
  type: "document",
  fields: [
    {
      name: "workoutStyle",
      title: "Workout Style:",
      description: "Include the day of the week in the workout style name.",
      type: "string",
    },
    {
      name: "dayOfTheWeek",
      title: "Day of the Week",
      description:
        "This is the day of the week based on Javascript dates. 0 through 6.",
      type: "array",
      of: [{ type: "number" }],
      options: {
        list: [
          { title: "Sunday", value: 0 },
          { title: "Monday", value: 1 },
          { title: "Tuesday", value: 2 },
          { title: "Wednesday", value: 3 },
          { title: "Thursday", value: 4 },
          { title: "Friday", value: 5 },
          { title: "Saturday", value: 6 },
        ],
      },
    },
    {
      name: "classTime1",
      title: "First Class Time:",
      description: "Enter the class time like this... 10:00",
      type: "string",
    },
    {
      name: "classTime1Details",
      title: "First Class Time Details:",
      description: "Enter it's is AM or PM and EST for now. AM - EST",
      type: "string",
    },
    {
      name: "classTime2",
      title: "Second Class Time:",
      description: "Enter the class time like this... 10:00",
      type: "string",
    },
    {
      name: "classTime2Details",
      title: "Second Class Time Details:",
      description: "Enter it's is AM or PM and EST for now. AM - EST",
      type: "string",
    },
  ],
}
