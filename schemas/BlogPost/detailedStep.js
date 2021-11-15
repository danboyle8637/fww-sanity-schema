import { COPY_BLOCK_1, HEADINE_LINE_1, STRING_1 } from "../constants";

export default {
  name: "detailedStep",
  title: "Detailed Step",
  type: "object",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Detailed Step",
      description: "This will be 1 or 2 it is a number.",
      type: "number",
    },
    {
      name: STRING_1,
      title: "Step Color",
      description:
        "Blue is a Body Burn style exercise. Purple is kettlebells and pink is beginner focused. Nutrition is for a detailed step during a recipe or something else.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Blue", value: "blue" },
          { title: "Purple", value: "purple" },
          { title: "Pink", value: "pink" },
          { title: "Nutrition", value: "nutrition" },
        ],
      },
    },
    {
      name: COPY_BLOCK_1,
      title: "Detailed Step Description",
      type: "secondaryBlockContent",
    },
  ],
};
