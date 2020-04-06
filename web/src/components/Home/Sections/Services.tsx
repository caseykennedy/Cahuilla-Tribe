// Services:

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

const Services: React.FC = () => {
  return (
    <>
      <Section border={true}>
        <S.Illustration pt={[5, 0]} pb={[7, 8]} px={4}>
          <Wiggles />
        </S.Illustration>
        <Heading as="h5" color="secondary" mb={5}>
          Services
        </Heading>
        <Heading as="h3" mb={0}>
          Our services include,
          <br />
          but are not limited to:
        </Heading>
      </Section>
      <S.Services as="ul">
        {services.map((service, idx) => (
          <li className="text--sm" key={idx}>
            <span>○</span> {service}
          </li>
        ))}
      </S.Services>
    </>
  )
}

export default Services

// ___________________________________________________________________

const services = [
  'non-potable water hauling',
  'dust abatement',
  'septic systems',
  'excavation',
  'potable water hauling',
  'driveways',
  'trucking',
  'equipment rentals'
]