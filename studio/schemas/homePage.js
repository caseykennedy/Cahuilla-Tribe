import { MdDocument } from 'react-icons/md'

export default {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: MdDocument,
  fields: [
    {
      name: 'welcomeStatement',
      title: 'Welcome Statement',
      type: 'string'
    },
    {
      name: 'definition',
      title: 'Definition',
      type: 'string'
    },
    {
      name: 'figures',
      title: 'Figures',
      type: 'array',
      of: [
        {
          type: 'figure',
        }
      ]
    },
    {
      name: 'message',
      title: 'Message',
      type: 'string'
    },
    {
      name: 'linkTitle',
      title: 'Link Title',
      type: 'string'
    },
    {
      name: 'linkTo',
      title: 'Link To',
      type: 'string'
    },
  ]
}