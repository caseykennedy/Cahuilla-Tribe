// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

// @ts-ignore
import { logout, isAuthenticated } from '../../../utils/auth'
import useToggle from '../../../hooks/useToggle'

import Icon from '../../Icons'
import { Box } from '../../../elements'

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
              <Link
                to={item.link}
                className="nav-link__title"
                activeClassName="active"
              >
                {item.name}
              </Link>
            )}
            {item.subPage && (
              <Box className="sub-nav">
                {item.subPage.map((subItem, idx) => (
                  <Link to={subItem.link} key={idx} activeClassName="active">
                    {subItem.name}
                  </Link>
                ))}
                {item.name === `Departments` && (
                  <a href="https://www.cahuillaconsortium.org/" target="_blank">
                    Cahuilla Consortium
                  </a>
                )}
              </Box>
            )}
          </Box>
        ))}
      </S.Nav>
      {isAuthenticated() && (
        <S.SignIn to={`/account`} activeClassName="active">
          Account
        </S.SignIn>
      )}
      {!isAuthenticated() ? (
        <S.SignIn to="/account">Sign In</S.SignIn>
      ) : (
        <S.SignIn
          to="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Sign Out
        </S.SignIn>
      )}
    </>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
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
        link: '/departments/cahuilla-gaming-agency'
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
