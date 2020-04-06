// Header Styles:

// ___________________________________________________________________

// Core
import { Link } from 'gatsby'
import styled from 'styled-components'
import { readableColor, darken } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex, AnimatedFlex } from '../../elements'

// ___________________________________________________________________

export const Header = styled(AnimatedFlex)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${theme.colors.background};
  border-top: ${theme.border};
  border-bottom: ${theme.border};

  width: 100vw;
  padding-left: ${theme.space[3]};

  transition: all 0.333s ease-in-out;
  z-index: 30;

  @media ${theme.mq.small} {
    padding-left: ${theme.space[4]};
  }
`

export const Logo = styled(AnimatedFlex)`
  align-items: center;
  margin: ${theme.space[3]} ${theme.space[3]} ${theme.space[3]} 0;

  font-family: ${theme.fonts.heading};
  font-size: 1rem;
  line-height: 0;
  letter-spacing: 2px;

  @media ${theme.mq.small} {
    font-size: 1.4rem;
  }

  a {
    display: flex;
    position: relative;
    top: -1px;
    color: ${theme.colors.text};
  }
`

export const Symbol = styled(AnimatedFlex)`
  align-items: center;
  justify-content: center;

  width: calc(${theme.headerHeight} / 1.5);
  height: calc(${theme.headerHeight} / 1.5);
  margin-right: ${theme.space[2]};

  background: ${theme.colors.primary};
  border-radius: 50%;

  @media ${theme.mq.small} {
    width: ${theme.headerHeight};
    height: ${theme.headerHeight};
    margin-right: ${theme.space[3]};
  }
`

export const Nav = styled.nav`
  display: none;
  align-items: center;

  height: ${theme.headerHeight};
  margin-right: ${theme.space[5]};

  @media ${theme.mq.small} {
    display: flex;
  }

  a {
    color: ${theme.colors.text};
    font-size: ${theme.fontSizes[1]};
    text-transform: uppercase;
    letter-spacing: 0.5px;

    margin-left: ${theme.space[5]};

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      color: ${theme.colors.primary};
    }
  }
`

export const Btn = styled(Link)`
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  box-sizing: content-box;

  height: ${theme.headerHeight};
  padding: ${theme.space[2]} ${theme.space[5]};
  border-left: ${theme.border};

  @media ${theme.mq.small} {
    padding: ${theme.space[3]} ${theme.space[6]};
  }

  &:hover {
    color: inherit;
    background: ${theme.colors.tertiary};
  }
`

export const ReserveBtn = styled(Flex)`
  align-items: center;
  justify-content: center;
  flex-grow: 1;

  color: ${theme.colors.white};
  text-transform: uppercase;
  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  line-height: 1;
  letter-spacing: 1.5px;

  background: ${theme.colors.secondary};
  height: calc(${theme.headerHeight} - 2px);
  padding: 0 ${theme.space[4]};

  cursor: pointer;
  transition: all 0.333s ease-in-out;

  span {
    font-size: ${theme.fontSizes[2]};
    position: relative;
    top: -2px;
    margin-left: ${theme.space[2]};

    transition: ${theme.transition.all};
  }

  &:hover {
    background: ${darken(0.05, `${theme.colors.secondary}`)};

    span {
      margin-left: ${theme.space[4]};
    }
  }

  &.active {
    background: ${theme.colors.primary};
  }
`

// ___________________________________________________________________
