import { COPY_BLOCK_1, HEADINE_LINE_1, STRING_1 } from "../constants";

export default {
  name: "workout",
  title: "Workout",
  type: "object",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Circuit Name",
      description: "This will be Circuit 1 or Circuit 2 wherever you are.",
      type: "string",
    },
    {
      name: STRING_1,
      title: "Circuit Color",
      description:
        "Blue is a Body Burn style workout. Purple is kettlebells and pink is beginner focused.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Blue", value: "blue" },
          { title: "Purple", value: "purple" },
          { title: "Pink", value: "pink" },
        ],
      },
    },
    {
      name: COPY_BLOCK_1,
      title: "Workout Layout",
      type: "secondaryBlockContent",
    },
  ],
};
