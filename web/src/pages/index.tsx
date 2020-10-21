// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'

// ui
import { Heading, Text, Box, Flex } from '../elements'

// Components
import LayoutMinimal from '../components/LayoutMinimal'
import SEO from '../components/SEO'
import Home from '../components/Home'
import Section from '../components/Section'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const Index = () => {
  return (
    <LayoutMinimal>
      <Box bg="black" color="primary" p={5}>
        <Heading as="h2">
          We are undergoing regular maintenance and will be back up in no time!
        </Heading>
      </Box>
      <Box bg="black" color="primary" width={[1]} p={5}>
          <Box>
            <Heading as="h3" mt={3} mb={5}>
              Contact Us
            </Heading>
          </Box>
          <Flex width={1} flexWrap="wrap">
            <Box width={[1, 1 / 3]} mb={[6, 0]}>
              <Heading as="h5">Tel / Fax</Heading>
              <a href="#">951-763-5549</a> — Tel
              <br />
              <a href="#">951-763-2808</a> — Fax
            </Box>
            <Box width={[1, 1 / 3]} mb={[6, 0]}>
              <Heading as="h5">Address</Heading>
              <a href="#">
                52701 CA Hwy 371
                <br />
                Anza, CA 92539
              </a>
            </Box>
            <Box width={[1, 1 / 3]}>
              <Heading as="h5">Email</Heading>
              <a href="#">administration@cahuilla.net</a>
            </Box>
          </Flex>
        </Box>
    </LayoutMinimal>
  )
}

export default Index

// ___________________________________________________________________
