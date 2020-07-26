import FWWLiveFreeWorkoutsPageIcon from "../../components/FWWLiveFreeWorkoutsPageIcon"

export default {
  name: "fwwLiveFreeWorkoutsDeliveryPage",
  title: "FWW Live Free Workouts Delivery",
  icon: FWWLiveFreeWorkoutsPageIcon,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Dev Title:",
      description: "A short title for the sidebar. Dev use only.",
      type: "string",
    },
    {
      name: "freeTrialWorkout1",
      title: "Free Trial Workout 1:",
      type: "fwwLiveFreeWorkoutCard",
    },
    {
      name: "freeTrialWorkout2",
      title: "Free Trial Workout 2:",
      type: "fwwLiveFreeWorkoutCard",
    },
    {
      name: "freeTrialWorkout3",
      title: "Free Trial Workout 3:",
      type: "fwwLiveFreeWorkoutCard",
    },
  ],
}
