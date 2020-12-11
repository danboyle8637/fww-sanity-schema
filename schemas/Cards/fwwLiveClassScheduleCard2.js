import {
  HEADINE_LINE_1,
  HEADINE_LINE_2,
  STRING_1,
  STRING_2,
  STRING_3,
  STRING_4,
  STRING_5,
  STRING_6,
} from "../constants"

export default {
  name: "fwwLiveClassScheduleCard2",
  title: "FWW Live Class Schedule Card",
  type: "document",
  fields: [
    {
      name: HEADINE_LINE_2,
      title: "Dev Title:",
      type: "string",
    },
    {
      name: HEADINE_LINE_1,
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
      name: "coachingSession",
      title: "Coaching Session",
      description: "When is the coaching session for this day.",
      type: "array",
      of: [{ type: "number" }],
      options: {
        list: [
          { title: "Morning", value: 0 },
          { title: "Afternoon", value: 1 },
        ],
      },
    },
    {
      name: STRING_1,
      title: "First Class Time:",
      description: "Enter the class time like this... 10:00",
      type: "string",
    },
    {
      name: STRING_2,
      title: "First Class Time Details:",
      description: "Enter it's is AM or PM and EST for now. AM - EST",
      type: "string",
    },
    {
      name: STRING_3,
      title: "Second Class Time:",
      description: "Enter the class time like this... 10:00",
      type: "string",
    },
    {
      name: STRING_4,
      title: "Second Class Time Details:",
      description: "Enter it's is AM or PM and EST for now. AM - EST",
      type: "string",
    },
    {
      name: STRING_5,
      title: "Third Class Time:",
      description: "Enter the class time like this... 10:00",
      type: "string",
    },
    {
      name: STRING_6,
      title: "Third Class Time Details:",
      description: "Enter it's is AM or PM and EST for now. AM - EST",
      type: "string",
    },
  ],
}
