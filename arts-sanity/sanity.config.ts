import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'arts-sanity',

  projectId: 'fq6revsz',
  dataset: 'arts',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
