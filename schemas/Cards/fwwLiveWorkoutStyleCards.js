export default {
  name: "fwwLiveWorkoutStyleCards",
  title: "FWW LIVE Workout Style Cards",
  type: "document",
  fields: [
    {
      name: "workoutStyleHeadline",
      title: "Workout Style Headline:",
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
      name: "workoutImage",
      title: "Workout Style Card Image:",
      description: "An image size of 1200x480",
      type: "cardImage",
    },
    {
      name: "fitnessLevel",
      title: "Fitness Level:",
      description:
        "Explain in a broad level what fitness level each workout is for.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "All Fitness Levels", value: "allFitnessLevels" },
          { title: "Intermediate and Up", value: "intermediateAndUp" },
          { title: "Advanced", value: "Advanced" },
        ],
      },
    },
    {
      name: "workoutStyleDescription",
      title: "Workout Style Description",
      description:
        "A short description about the workout style and what makes it different. What it's good for.",
      type: "text",
    },
  ],
}
