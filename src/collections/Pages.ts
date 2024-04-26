import { CollectionConfig } from 'payload/types'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('content', { name: 'content_html' }),
    {
      name: 'other',
      type: 'json',
    },
    {
      name: 'email',
      type: 'text',
    },
  ],
}
