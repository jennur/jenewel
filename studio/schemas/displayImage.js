export default {
    name: 'displayImage',
    title: 'Display image',
    type: 'document',
    fields: [
      {
        name: 'text',
        title: 'Text',
        type: 'string'
      },
      {
        name: 'image',
        title: 'image',
        type: 'image',
        options: {
          hotspot: true,
        }
      },
      {
        name: 'category',
        title: 'Link to category',
        type: 'reference',
        to: { type: 'category' },
      }
    ],
  }
  