// Department:

// ___________________________________________________________________

import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Text, Heading, Box, Flex } from '../../elements'
import HeadingStroked from '../../elements/HeadingStroked'

import MountainFlat from '../MountainFlat'
import Staff from './Staff'
import PrevNext from './PrevNext'

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
          {/* <ImgMatch src="pagetitle.jpg" objectFit="contain" altText="sometext" /> */}
          {page.image !== null ? (
            <Img
              fluid={page.image.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={page.pageTitle}
            />
          ) : null}
        </Box>
        {/* {pageContext.next && (
          <Link to={`/departments/${pageContext.next.slug.current}`}>
            {pageContext.next.pageTitle}
          </Link>
        )} */}
      </S.PageTitle>

      <S.Main width={[1, 2 / 3]}>
        <Text as="p" fontSize={3} mb={0}>
          {page._rawIntro[0].children[0].text}
        </Text>

        <Staff pageContext={pageContext} />

        {page._rawContent.map(para => (
          <Text as="p" key={para._key}>
            {para.children[0].text}
          </Text>
        ))}
      </S.Main>

      <S.Sidebar as="aside" width={[1, 1 / 3]}>
        <Box className="decorator">
          <MountainFlat />
        </Box>
        <S.Inner>
          <Box mb={7} color="background">
            <HeadingStroked
              as="h3"
              fillColor="transparent"
              strokeColor={theme.colors.background}
              strokeWidth="2px"
            >
              Contact
            </HeadingStroked>
            <Text>Please contact us for more information.</Text>
          </Box>
          <Text as="p">
            As a federally recognized Indian Tribe established by executive
            order in 1875 by the United States Government, the Cahuilla Band of
            Indians exercises the inherit sovereign right to self-government.
          </Text>
        </S.Inner>
      </S.Sidebar>
      <PrevNext pageContext={pageContext} />
    </S.Department>
  )
}

export default Department
