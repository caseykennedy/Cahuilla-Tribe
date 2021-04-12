// useContact utility hook

// ___________________________________________________________________

// Core
import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type ContactQueryShape = {
  contact: {
    edges: {
      node: {
        address: string
        email: string
        fax: string
        telephone: string
      }
    }[]
  }
}

const useNavigation = () => {
  const data: ContactQueryShape = useStaticQuery(graphql`
    query LayoutQuery {
      contact: allSanityContact {
        edges {
          node {
            address
            email
            fax
            telephone
          }
        }
      }
    }
  `)

  return data.contact.edges[0].node
}

export default useNavigation
