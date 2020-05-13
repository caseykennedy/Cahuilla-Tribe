// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// @ts-ignore
import { login, logout, isAuthenticated, getProfile } from '../../../utils/auth'
import useToggle from '../../../hooks/useToggle'

import Icon from '../../Icons'
import { Box, Text } from '../../../elements'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {}

// ___________________________________________________________________

const Navigation: React.FC = () => {
  // Toggle the sub nav on hover
  const { isShowing, toggle } = useToggle()
  return (
    <>
      <S.Nav>
        {data.map((item, idx) => (
          <Box className="nav-link" key={idx}>
            {!item.link ? (
              <span className="nav-link__title">
                {item.name}
                {item.subPage && <Icon name="carat" />}
              </span>
            ) : (
              <Link to={item.link} className="nav-link__title">
                {item.name}
              </Link>
            )}
            {item.subPage && (
              <Box className="sub-nav">
                {item.subPage.map((subItem, idx) => (
                  <Link to={subItem.link} key={idx}>
                    {subItem.name}
                  </Link>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </S.Nav>
      {!isAuthenticated() ? (
        <S.SignIn to="/account">Sign In</S.SignIn>
      ) : (
        <S.SignIn
          to="/"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Sign out
        </S.SignIn>
      )}
    </>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
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
    link: '/contact'
  }
]
