export default {
  name: "fwwLiveFreeWorkoutCard",
  title: "FWW Live Free Workout Card",
  description: "A section for displaying a FWW LIVE free workout.",
  type: "object",
  options: { collapsible: true },
  fields: [
    {
      name: "workoutWeekDay",
      title: "Workout Week Day:",
      description: "What is the weekday for this particaul workout.",
      type: "string",
    },
    {
      name: "workoutHeadline",
      title: "Workout Headline:",
      type: "string",
    },
    {
      name: "workoutDayDescription",
      title: "Workout Day Description:",
      description:
        "Explain what the workout day is alla bout. Plus what the type of workout is all about.",
      type: "blockContent",
    },
    {
      name: "workoutVideoId",
      title: "Workout Video Id:",
      type: "number",
    },
  ],
}
