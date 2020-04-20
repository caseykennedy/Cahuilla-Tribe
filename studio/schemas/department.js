import { MdPerson, MdAccountBalance } from 'react-icons/md'

export default {
  name: 'department',
  title: 'Department',
  type: 'document',
  icon: MdAccountBalance,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      title: 'Is this a government department?',
      name: 'government',
      type: 'boolean'
    },
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96,
        slugify: input => input.toLowerCase()
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: []
        }
      ]
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'telephone',
      title: 'Telephone',
      type: 'number'
    },
    {
      name: 'cell',
      title: 'Cell Phone',
      type: 'number'
    },
    {
      name: 'fax',
      title: 'Fax',
      type: 'number'
    },
    {
      title: 'Department',
      name: 'department',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Tribal Council', value: 'tribalCouncil'},
          {title: 'Economic Development', value: 'ecoDevelopment'},
          {title: 'Cahuilla Gaming Agency', value: 'cahuillaGamingAgency'},
          {title: 'Tribal Administration', value: 'tribalAdmin'},
          {title: 'Family and Social Services', value: 'socialServices'},
          {title: 'Environmental Protection Agency', value: 'epa'},
          {title: 'Public Works', value: 'publicWorks'},
          {title: 'Cultural', value: 'cultural'},
          {title: 'Public Safety', value: 'publicSafety'},
        ]
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
