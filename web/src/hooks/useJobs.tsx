// useJobs utility hook

// ___________________________________________________________________

// Core
import { graphql, useStaticQuery } from 'gatsby'

// ___________________________________________________________________

type JobsQueryShape = {
  jobs: {
    edges: {
      node: {
        id: string
        link: string
        title: string
      }
    }[]
  }
}

const useJobs = () => {
  const data: JobsQueryShape = useStaticQuery(graphql`
    query JobPostQuery {
      jobs: allSanityJobPost {
        edges {
          node {
            id
            link
            title
          }
        }
      }
    }
  `)

  return data.jobs.edges
}

export default useJobs
