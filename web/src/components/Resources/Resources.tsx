// Resources

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import GoogleMapReact from 'google-map-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Text, Heading, Box, Flex } from '../../elements'

import Marker from './Marker'
import ImgMatch from '../ImgMatch'
import Icon from '../Icons'

import * as S from './styles.scss'
import theme from '../../../config/theme'

import useContact from '../../hooks/useContact'
import useJobs from '../../hooks/useJobs'

// ___________________________________________________________________

type ResourcesQueryShape = {
  resources: {
    edges: {
      node: {
        title: string
        heroFigure: {
          asset: {
            fluid: {
              src: string
              aspectRatio: number
              base64: string
              sizes: string
              srcSet: string
              srcSetWebp: string
              srcWebp: string
            }
          }
          alt: string
        }
        careersFigure: {
          asset: {
            fluid: {
              src: string
              aspectRatio: number
              base64: string
              sizes: string
              srcSet: string
              srcSetWebp: string
              srcWebp: string
            }
          }
          alt: string
        }
      }
    }[]
  }
}

const JobPost: React.FC = () => {
  const jobs = useJobs()
  return jobs.length > 0 ? (
    <>
      {jobs.map(({ node: job }) => (
        <S.JobPost
          as="a"
          key={job.id}
          href={job.link}
          target="_blank"
          width={1}
        >
          {job.title}
          <Text mt={7}>
            <Icon name="nextArrow" />
          </Text>
        </S.JobPost>
      ))}
    </>
  ) : (
    <Box>There are no job openings at this time.</Box>
  )
}

const Resources: React.FC = () => {
  const data: ResourcesQueryShape = useStaticQuery(graphql`
    query ResourcesQuery {
      resources: allSanityResourcesPage {
        edges {
          node {
            title
            heroFigure {
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
            careersFigure {
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
  const contact = useContact()
  return (
    <S.Resources>
      <S.PageTitle width={[1]}>
        <Box className="title" width={[1, 1 / 2]}>
          <Heading as="h2">Resources</Heading>
          <Flex as="nav" mt={4}>
            <Text mr={4}>
              <AnchorLink href="#contact">contact</AnchorLink>
            </Text>
            <AnchorLink href="#careers">careers</AnchorLink>
          </Flex>
        </Box>
        <Box className="image" width={[1, 1 / 2]}>
          <Img
            fluid={{
              ...data.resources.edges[0].node.heroFigure.asset.fluid,
              aspectRatio: 1 / 1
            }}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.resources.edges[0].node.heroFigure.alt}
            className="img"
          />
        </Box>
      </S.PageTitle>

      <S.Contact id="contact">
        <Flex width={[1, 2 / 3]} className="content">
          <Box>
            <Heading as="h3">Contact Us</Heading>
            <Text fontSize={2} mb={8}>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </Text>
          </Box>
          <Flex width={1} flexWrap="wrap">
            <Box width={[1, 1 / 2]} mb={[6, 0]}>
              <Heading as="h5">Tel / Fax</Heading>
              <a href={`tel:${contact.telephone}`}>{contact.telephone}</a> — Tel
              <br />
              <a href={`tel:${contact.fax}`}>{contact.fax}</a> — Fax
            </Box>
            <Box width={[1, 1 / 2]} mb={[6, 0]}>
              <Heading as="h5">Address</Heading>
              <span dangerouslySetInnerHTML={{ __html: contact.address }} />
            </Box>
          </Flex>
        </Flex>

        <Box bg="black" width={[1, 1 / 3]} className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBhFPTf9XXJ9x7SPjnyG7Vg8KaEPxKwBro'
            }}
            defaultCenter={{
              lat: 33.5407404,
              lng: -116.7422544
            }}
            defaultZoom={10}
            yesIWantToUseGoogleMapApiInternals={true}
          >
            <Marker lat={33.5407404} lng={-116.7422544} text="Test" />
          </GoogleMapReact>
        </Box>
      </S.Contact>

      <S.Careers id="careers">
        <Flex width={[1, 6 / 8]} className="content">
          <Heading as="h3" mt={3} mb={8}>
            Career Opportunities
          </Heading>
          <Flex flexWrap="wrap">
            <JobPost />
          </Flex>
        </Flex>

        <Flex bg="black" width={[1, 2 / 8]} className="image">
          <Img
            fluid={{
              ...data.resources.edges[0].node.careersFigure.asset.fluid,
              aspectRatio: 1 / 1
            }}
            objectFit="cover"
            objectPosition="50% 50%"
            alt={data.resources.edges[0].node.careersFigure.alt}
            className="img"
          />
        </Flex>
      </S.Careers>
    </S.Resources>
  )
}

export default Resources
