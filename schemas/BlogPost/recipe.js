import { COPY_BLOCK_1, HEADINE_LINE_1 } from "../constants";

export default {
  name: "recipe",
  title: "Recipe",
  type: "object",
  fields: [
    {
      name: HEADINE_LINE_1,
      title: "Ingredients or Directions Label",
      description:
        "This will automatically put in the correct label on the card.",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Ingredients", value: "ingredients" },
          { title: "Directions", value: "directions" },
        ],
      },
    },
    {
      name: COPY_BLOCK_1,
      title: "Recipe Details",
      type: "secondaryBlockContent",
    },
  ],
};
