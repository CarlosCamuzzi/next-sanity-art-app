// lib/sanity.ts
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "fq6revsz",
  dataset: "arts",
  useCdn: true,
  apiVersion: "2023-10-29",
};
export const client = createClient(config);
