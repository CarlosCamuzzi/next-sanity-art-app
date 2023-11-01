import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'arts-sanity',

  projectId: 'YOUR_PROJECT_ID',
  dataset: 'YOUR_PROJECT_DATASET',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
