// Header:
// Site Header with logo

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import { Box, Flex, Text } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type HeaderShape = {}

const Header: React.FC<HeaderShape> = () => {
  return (
    <Headroom
      onPin={() => console.log('pinned')}
      onUnpin={() => console.log('unpinned')}
    >
      <S.Header as="header">
        <S.Logo>
          <S.Symbol />
          <Link to="/" aria-label="Cahuilla, back to home">
            CAHUILLA
          </Link>
        </S.Logo>
        <Flex alignItems="center">
          <S.Nav>
            <Link to="/">Government</Link>
            <Link to="/">Departments</Link>
            <Link to="/">Enterprises</Link>
            <Link to="/">Resources</Link>
          </S.Nav>
          <S.Btn to="/account">Sign In</S.Btn>
        </Flex>
      </S.Header>
    </Headroom>
  )
}

export default Header
