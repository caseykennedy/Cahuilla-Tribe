// Home:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import ImgMatch from '../ImgMatch'
import { Text, Heading, Box, Flex } from '../../elements'

import Announcements from '../Announcements'
import MountainLarge from '../MountainLarge'
import Icon from '../Icons'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Home: React.FC = () => {
  const data = useStaticQuery<HomePageShape>(graphql`
    query HomePageQuery {
      allSanityHomePage {
        edges {
          node {
            message
            linkTo
            linkTitle
            welcomeStatement
            definition
            figures {
              asset {
                fluid(maxWidth: 600) {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
              alt
            }
          }
        }
      }
    }
  `)
  const page = data.allSanityHomePage.edges[0].node
  console.log('—————|— PAGE —|—————')
  console.log(page)
  return (
    <S.HomePage>
      <S.WelcomeBox width={[1, 1 / 3]}>
        <div className="decorator">
          <MountainLarge />
        </div>
        <div className="inner">
          <Text as="p">{page.definition && page.definition}</Text>
          <Heading
            as="h2"
            fontSize={['16vw', '5vw']}
            color="primary"
            mt={8}
            mb={0}
          >
            {page.welcomeStatement && page.welcomeStatement}
          </Heading>
        </div>
      </S.WelcomeBox>
      <S.ImageBox width={[1, 1 / 3]}>
      <Img
            fluid={page.figures[0].asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={page.figures[0].alt}
            className="img"
          />
      </S.ImageBox>
      <S.BulletinBoard width={[1, 1 / 3]}>
        <Announcements />
      </S.BulletinBoard>
      <S.ImageBox width={[1, 1 / 3]} className="border--top">
        {page.figures[1] && (
          <Img
            fluid={page.figures[1].asset.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={page.figures[1].alt}
            className="img"
          />
        )}
      </S.ImageBox>
      <S.IntroBox width={[1, 2 / 3]}>
        <Text as="p" fontSize={3} p={4}>
          {page.message && page.message}
        </Text>
        <Link to="/about">
          {page.linkTitle && page.linkTitle}
          <div className="ico">
            <Icon name="nextArrow" />
          </div>
        </Link>
      </S.IntroBox>
    </S.HomePage>
  )
}

export default Home
