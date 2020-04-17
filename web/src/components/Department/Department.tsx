// Department:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  pageContext: {
    data: {
      cell: number
      department: string
      email: string
      fax: number
      government: boolean
      id: string
      name: string
      pageTitle: string
      slug: {
        current: string
      }
      telephone: number
    }
    next: {
      pageTitle: string
      slug: {
        current: string
      }
    }
  }
}

const Department: React.FC<Props> = ({ pageContext }) => {
  // console.log('—————|— SANITY —|—————')
  // console.log(pageContext.next)

  return (
    <S.Department>
      <S.WelcomeBox width={[1]}>
        <Heading as="h2" color="primary" mb={0}>
          {pageContext.data.pageTitle}
        </Heading>
        {pageContext.next && (
          <Link to={`/departments/${pageContext.next.slug.current}`}>
            {pageContext.next.pageTitle}
          </Link>
        )}
      </S.WelcomeBox>
    </S.Department>
  )
}

export default Department
