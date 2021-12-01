import { GiWeightLiftingUp } from "react-icons/gi";

export default {
  name: "workoutProgramCard",
  title: "Workout Program Cards",
  icon: GiWeightLiftingUp,
  type: "document",
  fields: [
    {
      name: "devTitle",
      title: "Program Title:",
      type: "string",
    },
    {
      name: "programId",
      title: "ProgramId:",
      description: "Program Name in camelCase.",
      type: "string",
    },
    {
      name: "slug",
      title: "Program Slug:",
      description:
        "Program slug is lowercase name with dashes instead of spaces",
      type: "slug",
      options: {
        source: "devTitle",
        maxLength: 96,
      },
    },
    {
      name: "programPrice",
      title: "Program Price:",
      description: "MAKE SURE this matches the price set in the database.",
      type: "number",
    },
    {
      name: "programBackgroundImage",
      title: "Program Background Image:",
      type: "cardImage",
    },
    {
      name: "programDescription",
      title: "Program Description:",
      description: "Keep it short. About 150 to 160 total characters.",
      type: "text",
      validation: (Rule) => {
        return Rule.required()
          .max(160)
          .error("Description should not be above 160 characters.");
      },
    },
    {
      name: "programTags",
      title: "Program Tags",
      description:
        "Only select the most relevant tags (usually 2) for a program.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Trial", value: "trial" },
          { title: "Beginner", value: "beginner" },
          { title: "Kettlebells", value: "kettlebells" },
          { title: "Dumbbells", value: "dumbbells" },
          { title: "Runners", value: "runners" },
          { title: "Core", value: "core" },
          { title: "Legs", value: "legs" },
          { title: "Mobility", value: "mobility" },
          { title: "Coaching", value: "coaching" },
        ],
      },
    },
    {
      name: "programStatsFooter",
      title: "Program Stats Bar:",
      description:
        "Enter the relevant information for the program you are creating.",
      type: "workoutProgramStatsBar",
    },
  ],
};
