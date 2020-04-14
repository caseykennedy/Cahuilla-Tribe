// Header:
// Site Header with logo

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import Navigation from './Navigation'
import { Box, Flex, Text } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type HeaderShape = {}

const Header: React.FC<HeaderShape> = () => {
  return (
    <Headroom style={{ zIndex: 999 }}>
      <S.Header as="header">
        <Link to="/" aria-label="Cahuilla, back to home">
          <S.Symbol as="span" />
          <S.Logo>
            <Box>CAHUILLA</Box>
            <span>band of indians</span>
          </S.Logo>
        </Link>
        <Flex alignItems="center">
          <Navigation />
        </Flex>
      </S.Header>
    </Headroom>
  )
}

export default Header
