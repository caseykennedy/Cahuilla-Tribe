// Navigation

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import useToggle from '../../../hooks/useToggle'

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
    <S.Nav>
      {data.map((item, idx) => (
        <div className="nav-link" key={idx}>
          <span className="nav-link__title">
            {item.name}
          </span>
          {item.subPage && (
            <div className="sub-nav">
              {item.subPage.map((subItem, idx) => (
                <Link to={subItem.link} key={idx}>
                  {subItem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </S.Nav>
  )
}

export default Navigation

// ___________________________________________________________________

const data = [
  {
    name: 'Government',
    link: '/government',
    subPage: [
      {
        name: 'Tribal Council',
        link: '/tribal-council'
      },
      {
        name: 'Economic Development',
        link: '/economic-development'
      }
    ]
  },
  {
    name: 'Departments',
    link: '/departments',
    subPage: [
      {
        name: 'Tribal Council',
        link: '/tribal-council'
      },
      {
        name: 'Economic Development',
        link: '/economic-development'
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
