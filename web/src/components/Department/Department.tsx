// Department:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import ImgMatch from '../ImgMatch'

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
      <S.PageTitle width={[1]}>
        <Box className="title" width={[1, 1 / 2]}>
          <Heading as="h2">{pageContext.data.pageTitle}</Heading>
        </Box>
        <Box className="image" width={[1, 1 / 2]}>
          <ImgMatch src="joshua-trees.jpg" altText="sometext" />
        </Box>
        {/* {pageContext.next && (
          <Link to={`/departments/${pageContext.next.slug.current}`}>
            {pageContext.next.pageTitle}
          </Link>
        )} */}
      </S.PageTitle>

      <S.Main width={[1, 2 / 3]}>
        <Heading as="h3">{pageContext.data.slug.current}</Heading>
        <Text as="p">
          As a federally recognized Indian Tribe established by executive order
          in 1875 by the United States Government, the Cahuilla Band of Indians
          exercises the inherit sovereign right to self-government.
        </Text>
      </S.Main>

      <S.Sidebar as="aside" width={[1, 1 / 3]}>
        <Heading as="h3">Contact</Heading>
        <Text as="p">
          As a federally recognized Indian Tribe established by executive order
          in 1875 by the United States Government, the Cahuilla Band of Indians
          exercises the inherit sovereign right to self-government.
        </Text>
      </S.Sidebar>
    </S.Department>
  )
}

export default Department