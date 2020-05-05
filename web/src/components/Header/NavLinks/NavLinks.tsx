// NavLinks:
// Navigation links

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'
import { useTransition } from 'react-spring'

import {} from '../../../elements'

import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type LinkProps = {
  item: any
  transition: any
  handleExitOnClick: () => any
}

type NavLinksProps = {
  navData: (
    | {
        name: string
        subPage: {
          name: string
          link: string
        }[]
        link?: undefined
      }
    | {
        name: string
        link: string
        subPage?: undefined
      }
  )[]
  handleExit: () => any
  isNavOpen: boolean
}

// ___________________________________________________________________

const NavLink = ({ item, transition, handleExitOnClick }: LinkProps) => {
  return (
    <S.NavLink onClick={handleExitOnClick} style={transition}>
      <Link to={item.link && item.link}>{item.name}</Link>
    </S.NavLink>
  )
}

const NavLinks: React.FC<NavLinksProps> = ({
  navData,
  handleExit,
  isNavOpen
}) => {
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
