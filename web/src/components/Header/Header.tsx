// Header:
// Site Header with logo

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

import { Box, Flex, Text } from '../../elements'

import Navigation from './Navigation'
import NavLinks from './NavLinks'
import Overlay from './Overlay'
import Icon from '../Icons'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type HeaderShape = { mainRef: React.RefObject<HTMLDivElement> }

const Header: React.FC<HeaderShape> = ({ mainRef }) => {
  // Navigation toggle
  const [isNavOpen, setNavOpen] = useState(false)
  const toggleModal = () => setNavOpen(!isNavOpen)

  return (
    <>
      <Overlay
        id="nav-root"
        root="root"
        isOpen={isNavOpen}
        handleExit={() => setNavOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isNavOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        <NavLinks
          navData={navData}
          handleExit={() => setNavOpen(false)}
          isNavOpen={isNavOpen}
        />
      </Overlay>
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
            <S.Toggle onClick={toggleModal} aria-label="toggle menu">
              <Icon name="hamburger" color="black" />
            </S.Toggle>
          </Flex>
        </S.Header>
      </Headroom>
    </>
  )
}

export default Header

const navData = [
  {
    name: 'Government',
    subPage: [
      {
        name: 'Tribal Council',
        link: '/government/tribal-council'
      },
      {
        name: 'Economic Development',
        link: '/government/economic-development'
      },
      {
        name: 'Cahuilla Gaming Agency',
        link: '/government/cahuilla-gaming-agency'
      }
    ]
  },
  {
    name: 'Departments',
    subPage: [
      {
        name: 'Tribal Administration',
        link: '/departments/tribal-admin'
      },
      {
        name: 'Family & Social Services',
        link: '/departments/family-social-services'
      },
      {
        name: 'Environmental Protection',
        link: '/departments/environmental-protection-agency'
      },
      {
        name: 'Public Works',
        link: '/departments/public-works'
      },
      {
        name: 'Cultural',
        link: '/departments/cultural'
      }
    ]
  },
  {
    name: 'Enterprises',
    link: '/enterprises'
  },
  {
    name: 'Resources',
    subPage: [
      {
        name: 'Contact',
        link: '/contact'
      },
      {
        name: 'Careers',
        link: '/careers'
      }
    ]
  }
]
