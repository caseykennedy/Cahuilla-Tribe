// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import contact from './contact'
import announcement from './announcement'
import figure from './figure'
import homePage from './homePage'
import page from './page'
import person from './person'
import siteSettings from './siteSettings'
import department from './department'
import form from './form'
import jobPost from './jobPost'
import aboutSection from './aboutSection'
import roadAlert from './roadAlert'
import roadsAndTransport from './roadsAndTransport'
import resourcesPage from './resourcesPage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    aboutSection,
    announcement,
    blockContent,
    contact,
    department,
    figure,
    form,
    jobPost,
    homePage,
    person,
    page,
    siteSettings,
    roadAlert,
    roadsAndTransport,
    resourcesPage

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
