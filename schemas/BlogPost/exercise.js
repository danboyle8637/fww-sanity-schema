import { HEADINE_LINE_1, STRING_1, STRING_2 } from "../constants";

export default {
  name: "exercise",
  title: "Exercise",
  type: "object",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Exercise Name",
      description: "This will be Circuit 1 or Circuit 2 wherever you are.",
      type: "string",
    },
    {
      name: STRING_2,
      title: "Number of Reps or ? for AMAP",
      type: "string",
    },
  ],
};
