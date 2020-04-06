// Mission:

// ___________________________________________________________________

// Core
import React, { useRef } from 'react'

// Components
import Section from '../../../components/Section'
import Wiggles from '../../../components/Wiggles'

// Elements
import { Box, Flex, Heading, Text } from '../../../elements'

// Styles
import * as S from '../styles.scss'

// Theme
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Mission: React.FC = () => {
  return (
    <>
      <Section pt={0} border={true}>
        <Heading as="h5" color="secondary" mb={5}>
          Mission
        </Heading>
        <Heading as="h3">
          Our mission here at MECO Sales &amp; Rentals is to keep you filthy burners hydrated.
        </Heading>
        <Text as="p">
          The desert is a dry place where the number one priority is to stay hydrated. We're here to help! MECO is family owned and operated and has been happily serving the playa's water needs for almost 20 years.
        </Text>
      </Section>
    </>
  )
}

export default Mission
