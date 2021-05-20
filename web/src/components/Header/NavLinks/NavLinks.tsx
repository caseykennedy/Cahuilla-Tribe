// NavLinks:
// Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { useTransition } from 'react-spring'

import { Box, Text } from '../../../elements'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type LinkProps = {
  item:
    | {
        name: string
        link: string
        subPage?: undefined
      }
    | {
        name: string
        subPage: {
          name: string
          link: string
        }[]
        link?: undefined
      }
  transition: any
  handleExitOnClick: () => any
}

type NavLinksProps = {
  handleExit: () => any
  isNavOpen: boolean
}

// ___________________________________________________________________

const NavLink = ({ item, transition, handleExitOnClick }: LinkProps) => {
  return (
    <S.NavLink onClick={handleExitOnClick} style={transition}>
      {!item.subPage ? (
        <Box className="nav-mobile-sub">
          <Link to={item.link} className="nav-mobile__link">
            {item.name}
          </Link>
        </Box>
      ) : (
        <Box className="nav-mobile-sub">
          <Text className="nav-mobile__link">{item.name}</Text>
          {item.subPage.map((subItem, idx) => (
            <Link to={subItem.link} key={idx} className="nav-mobile-sub__link">
              {subItem.name}
            </Link>
          ))}
          {item.name === `Departments` && (
            <a
              href="https://www.cahuillaconsortium.org/"
              target="_blank"
              className="nav-mobile-sub__link"
            >
              Cahuilla Consortium
            </a>
          )}
        </Box>
      )}
    </S.NavLink>
  )
}

const NavLinks: React.FC<NavLinksProps> = ({ handleExit, isNavOpen }) => {
  const navTransitions = useTransition(
    isNavOpen ? navData : [],
    item => item.name,
    {
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      trail: 160,
      unique: true
    }
  )
  return (
    <S.NavLinks>
      {navTransitions.map(({ item, key, props }) => (
        <NavLink
          key={key}
          transition={props}
          handleExitOnClick={() => handleExit()}
          item={item}
        />
      ))}
    </S.NavLinks>
  )
}

export default NavLinks

// ___________________________________________________________________

const navData = [
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'Government',
    subPage: [
      {
        name: 'Economic Development',
        link: '/government/economic-development'
      },
      {
        name: 'Tribal Council',
        link: '/government/tribal-council'
      }
    ]
  },
  {
    name: 'Departments',
    subPage: [
      {
        name: 'Cahuilla Gaming Agency',
        link: '/government/cahuilla-gaming-agency'
      },
      {
        name: 'Cultural',
        link: '/departments/cultural'
      },
      {
        name: 'Environmental Protection',
        link: '/departments/environmental-protection-agency'
      },
      {
        name: 'Family & Social Services',
        link: '/departments/family-social-services'
      },
      {
        name: 'Fire Department',
        link: '/departments/fire-department'
      },
      {
        name: 'Public Works',
        link: '/departments/public-works'
      },
      {
        name: 'Tribal Administration',
        link: '/departments/tribal-admin'
      }
    ]
  },
  {
    name: 'Enterprises',
    link: '/enterprises'
  },
  {
    name: 'Resources',
    link: '/resources'
  }
]
