// About

// ___________________________________________________________________

import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Text, Heading, Box, Flex } from '../../elements'
import ImgMatch from '../ImgMatch'
import PageTitle from '../PageTitle'
import Main from '../Main'
import Accordion from '../Accordion'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type AboutQueryShape = {
  allSanityAboutSection: {
    edges: {
      node: {
        title: string
        lead: string
        id: string
        content: string
        _rawBlockContent: string
        image: {
          asset: {
            fluid: {
              srcWebp: string
              srcSetWebp: string
              srcSet: string
              src: string
              sizes: string
              base64: string
              aspectRatio: number
            }
          }
        }
        bgColor: string
      }
    }[]
  }
}

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text
}

// ___________________________________________________________________

const AboutSection: React.FC = () => {
  const data: AboutQueryShape = useStaticQuery(graphql`
    query AboutQuery {
      allSanityAboutSection(sort: { order: ASC, fields: title }) {
        edges {
          node {
            title
            lead
            id
            content
            _rawBlockContent
            image {
              asset {
                fluid {
                  srcWebp
                  srcSetWebp
                  srcSet
                  src
                  sizes
                  base64
                  aspectRatio
                }
              }
            }
            bgColor
          }
        }
      }
    }
  `)
  const aboutQuery = data.allSanityAboutSection.edges

  console.log('---|- About -|---')
  console.log(data.allSanityAboutSection.edges[2].node.bgColor)

  return (
    <Box width={1}>
      {aboutQuery.map(({ node: section }) => (
        <Accordion
          title={section.title}
          bg={section.bgColor}
          key={section.id}
          {...AccordionProps}
        >
          <S.Section flexDirection="row-reverse">
            <Flex width={[1, 6 / 8]} className="content">
              <Text as="p" fontSize={3}>
                {section.lead}
              </Text>
              <Text as="p">{section.content}</Text>
            </Flex>

            <Box bg="black" width={[1, 2 / 8]} className="image">
              {section.image && (
                <Img
                  fluid={section.image.asset.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={section.title}
                />
              )}
            </Box>
          </S.Section>
        </Accordion>
      ))}
    </Box>
  )
}

const About: React.FC = () => {
  return (
    <S.About>
      <Box bg="background" width={1}>
        <AboutSection />
      </Box>
    </S.About>
  )
}

export default About
