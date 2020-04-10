// Home:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import ImgMatch from '../ImgMatch'
import { Text, Heading, Box, Flex } from '../../elements'

import Announcements from '../Announcements'
import MountainLarge from '../MountainLarge'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type QueryShape = {
  allSanityHomePage: {
    edges: {
      node: {
        message: string
        linkTo: string
        linkTitle: string
      }
    }[]
  }
}

const Home: React.FC = () => {
  const data = useStaticQuery<QueryShape>(graphql`
    query HomePageQuery {
      allSanityHomePage {
        edges {
          node {
            message
            linkTo
            linkTitle
          }
        }
      }
    }
  `)
  const query = data.allSanityHomePage.edges[0].node
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  return (
    <S.HomePage>
      <S.WelcomeBox width={[1, 1 / 3]}>
        <Box className="decorator">
          <MountainLarge />
        </Box>
        <Box className="inner">
          <Text as="p">Cahuilla: (kəˊwi:e/)</Text>
          <Heading as="h2" color="primary" mt={10}>
            Welcome Paxam
          </Heading>
        </Box>
      </S.WelcomeBox>
      <S.ImageBox width={[1, 1 / 3]}>
        <ImgMatch
          src="cahuilla-cactus.jpg"
          altText="Southern Cahuilla desert"
        />
      </S.ImageBox>
      <S.BulletinBoard width={[1, 1 / 3]}>
        <Announcements />
      </S.BulletinBoard>
      <S.ImageBox width={[1, 1 / 3]} className="border--top">
        <ImgMatch
          src="cahuilla-people.jpg"
          altText="Southern Cahuilla desert"
        />
      </S.ImageBox>
      <S.IntroBox width={[1, 2 / 3]}>
        <Text as="p" fontSize={3}>
          {query.message}
        </Text>
        <Flex mt={10}>
          <Text as="p">{query.linkTitle}</Text>
        </Flex>
      </S.IntroBox>
    </S.HomePage>
  )
}

export default Home
