// Contact

// ___________________________________________________________________

import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GoogleMapReact from 'google-map-react'

import { Text, Heading, Box, Flex } from '../../elements'
import ImgMatch from '../ImgMatch'
import PageTitle from '../PageTitle'
import Main from '../Main'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type QueryShape = {
  allSanityJobPost: {
    edges: {
      node: {
        id: string
        link: string
        title: string
      }
    }[]
  }
}

const JobPost: React.FC = () => {
  const data: QueryShape = useStaticQuery(graphql`
    query JobPostQuery {
      allSanityJobPost {
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
  const jobs = data.allSanityJobPost.edges
  return (
    <>
      {jobs.map(({node: job}) => (
        <S.JobPost
          as="a"
          key={job.id}
          href={job.link}
          target="_blank"
          width={[1, 1 / 3]}
        >
          <Text fontSize={3}>{job.title}</Text>
          <Text mt={7}>learn more</Text>
        </S.JobPost>
      ))}
    </>
  )
}

const Contact: React.FC = () => {
  return (
    <S.Resources>
      <S.PageTitle width={[1]}>
        <Box className="title" width={[1, 1 / 2]}>
          <Heading as="h2">Resources</Heading>
          <nav>
            <a href="#">contact</a>
            <a href="#">careers</a>
          </nav>
        </Box>
        <Box className="image" width={[1, 1 / 2]}>
          <ImgMatch src="desert-night.jpg" altText="Cahuilla Casino Hotel" />
        </Box>
      </S.PageTitle>

      <S.Contact>
        <Flex width={[1, 2 / 3]} className="content">
          <Box>
            <Heading as="h3">Contact Us</Heading>
            <Text as="p" fontSize={2}>
              <a href="#">info@cahuilla.net</a>
            </Text>
          </Box>
          <Flex width={1}>
            <Box width={[1, 1 / 3]}>
              <Heading as="h5">Tel / Fax</Heading>
              <a href="#">951-763-5549</a> — Tel
              <br />
              <a href="#">951-763-2808</a> — Fax
            </Box>
            <Box width={[1, 1 / 3]}>
              <Heading as="h5">Address</Heading>
              <a href="#">
                52701 CA Hwy 371
                <br />
                Anza, CA 92539
              </a>
            </Box>
            <Box width={[1, 1 / 3]}>
              <Heading as="h5">Email</Heading>
              <a href="#">info@cahuilla.net</a>
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
          >
            <div />
          </GoogleMapReact>
        </Box>
      </S.Contact>

      <S.Careers>
        <Flex width={[1, 6 / 8]} className="content">
          <Heading as="h3" mb={8}>
            Career Opportunities
          </Heading>
          <Flex flexWrap="wrap">
            <JobPost />
          </Flex>
        </Flex>

        <Box bg="black" width={[1, 2 / 8]} style={{ borderTop: theme.border }}>
          <ImgMatch src="cahuilla-cactus.jpg" altText="Cahuilla Casino Hotel" />
        </Box>
      </S.Careers>
    </S.Resources>
  )
}

export default Contact
