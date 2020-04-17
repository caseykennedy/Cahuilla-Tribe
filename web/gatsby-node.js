// Template pages

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const departmentTemplate = require.resolve('./src/templates/department.tsx')
  const governmentTemplate = require.resolve('./src/templates/government.tsx')

  // Government pages
  // ___________________________________________________________________
  const department = graphql(`
    {
      department: allSanityDepartment(filter: { government: { eq: false } }) {
        edges {
          node {
            cell
            department
            email
            fax
            government
            id
            name
            pageTitle
            slug {
              current
            }
            telephone
          }
          next {
            slug {
              current
            }
            pageTitle
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.department.edges.forEach(edge => {
      createPage({
        path: `/departments/${edge.node.slug.current}`,
        component: departmentTemplate,
        context: {
          slug: edge.node.slug.current,
          next: edge.next,
          data: edge.node
        }
      })
    })
  })

  // Government pages
  // ___________________________________________________________________
  const government = graphql(`
    {
      government: allSanityDepartment(filter: { government: { eq: true } }) {
        edges {
          node {
            cell
            department
            email
            fax
            government
            id
            name
            pageTitle
            slug {
              current
            }
            telephone
          }
          next {
            slug {
              current
            }
            pageTitle
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      Promise.reject(result.errors)
    }
    result.data.government.edges.forEach(edge => {
      createPage({
        path: `/government/${edge.node.slug.current}`,
        component: governmentTemplate,
        context: {
          slug: edge.node.slug.current,
          next: edge.next,
          data: edge.node
        }
      })
    })
  })

  // Return a Promise which will wait for both the queries to resolve
  return Promise.all([department, government])
}
