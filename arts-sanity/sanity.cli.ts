import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.PROJECT_ID,
    dataset: process.env.PROJECT_DATASET,
  },
})
