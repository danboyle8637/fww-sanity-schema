import client from "@sanity/client";

const projectId = SANITY_STUDIO_PROJECT_ID;

const dataset = SANITY_STUDIO_DATASET;

const options = {
  projectId,
  dataset,
  apiVersion: "2021-05-08",
  useCdn: true,
};

export default client(options);
