// Careers

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import ImgMatch from '../ImgMatch'
import PageTitle from '../PageTitle'
import Main from '../Main'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Careers: React.FC = () => {
  return (
    <S.Careers>
      <PageTitle width={[1]}>
        <Box className="title" width={[1, 1 / 2]}>
          <Heading as="h2">Contact</Heading>
        </Box>
        <Box className="image" width={[1, 1 / 2]}>
          <ImgMatch src="cahuilla-cactus.jpg" altText="Cahuilla Casino Hotel" />
        </Box>
      </PageTitle>
      <Main width={1}>Contact</Main>
    </S.Careers>
  )
}

export default Careers
