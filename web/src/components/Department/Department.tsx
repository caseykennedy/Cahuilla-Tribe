// Department:

// ___________________________________________________________________

import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Text, Heading, Box, Flex } from '../../elements'

import Staff from './Staff'
import PrevNext from './PrevNext'
import Sidebar from './Sidebar'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Department: React.FC<DepartmentShape> = ({ pageContext }) => {
  const page = pageContext.page
  // console.log('—————|— PAGE —|—————')
  // console.log(page)
  return (
    <S.Department>
      <S.PageTitle width={[1]}>
        <Box className="title" width={[1, 6 / 12]}>
          <Heading as="h2">{page.pageTitle}</Heading>
        </Box>
        <Box className="image" width={[1, 6 / 12]}>
          {page.image ? (
            <Img
              fluid={page.image.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={page.pageTitle}
            />
          ) : null}
        </Box>
      </S.PageTitle>

      <S.Main width={[1, 2 / 3]}>
        <Text as="p" fontSize={3} mb={0}>
          {page._rawIntro[0].children[0].text}
        </Text>

        <Staff pageContext={pageContext} />

        {page._rawContent.map(content => (
          <Text as="p" key={content._key}>
            {content.children[0].text}
          </Text>
        ))}
      </S.Main>
      <Sidebar pageContext={pageContext} />
      <PrevNext pageContext={pageContext} />
    </S.Department>
  )
}

export default Department
