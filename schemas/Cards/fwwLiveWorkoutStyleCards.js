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
