// Department:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Router } from '@reach/router'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import ImgMatch from '../ImgMatch'
import MountainLarge from '../MountainLarge'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {
  pageContext: {
    page: {
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
      _rawContent: {
        _key: string
        children: {
          _key: string
          text: string
        }[]
      }[]
      _rawIntro: {
        _key: string
        children: {
          _key: string
          text: string
        }[]
      }[]
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
  console.log('—————|— SANITY —|—————')
  console.log(pageContext.page)
  const page = pageContext.page

  return (
    <S.Department>
      <S.PageTitle width={[1]}>
        <Box className="title" width={[1, 1 / 2]}>
          <Heading as="h2">{page.pageTitle}</Heading>
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
        <Text as="p" fontSize={3} mb={0}>
          {page._rawIntro[0].children[0].text}
        </Text>

        <S.Team>
          {data.map((mate, idx) => (
            <Flex width={1 / 2} className="team-member" key={idx}>
              <Box width={1 / 3}>
                <ImgMatch src={mate.avatar} altText="Saul" />
              </Box>
              <Flex width={2 / 3} className="team-member__detail">
                <Text as="p">{mate.name}</Text>
                <Text>
                  {mate.title}
                  <br />
                  Seated: {mate.seated}
                </Text>
              </Flex>
            </Flex>
          ))}
        </S.Team>

        {page._rawContent.map(para => (
          <Text as="p" key={para._key}>
            {para.children[0].text}
          </Text>
        ))}
      </S.Main>

      <S.Sidebar as="aside" width={[1, 1 / 3]}>
        <Box className="decorator">
          <MountainLarge />
        </Box>
        <S.Inner>
          <Box mb={7} color="background">
            <Heading as="h3">Contact</Heading>
            <Text>Please contact us for more information.</Text>
          </Box>
          <Text as="p">
            As a federally recognized Indian Tribe established by executive
            order in 1875 by the United States Government, the Cahuilla Band of
            Indians exercises the inherit sovereign right to self-government.
          </Text>
        </S.Inner>
      </S.Sidebar>
    </S.Department>
  )
}

export default Department

const data = [
  {
    name: 'Daniel Salgado',
    title: 'Tribal Council Chairman',
    seated: '2020',
    avatar: 'cahuilla-cactus.jpg'
  },
  {
    name: 'Daniel Salgado',
    title: 'Tribal Council Chairman',
    seated: '2020',
    avatar: 'cahuilla-cactus.jpg'
  },
  {
    name: 'Daniel Salgado',
    title: 'Tribal Council Chairman',
    seated: '2020',
    avatar: 'cahuilla-cactus.jpg'
  }
]
