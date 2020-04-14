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

  @media ${theme.mq.small} {
    padding-left: ${theme.space[4]};
  }

  a {
    display: flex;
    align-items: center;

    &:hover {
     span {
      background: ${theme.colors.bloodshot};
     } 
    }
  }
`

export const Logo = styled(AnimatedFlex)`
  flex-direction: column;
  /* margin: ${theme.space[3]} ${theme.space[3]} ${theme.space[3]} 0; */

  color: ${theme.colors.text};
  font-family: ${theme.fonts.heading};
  font-size: 1rem;
  line-height: 0;
  letter-spacing: 2px;

  @media ${theme.mq.small} {
    font-size: 1.4rem;
  }

  span {
    font-family: ${theme.fonts.body};
    font-size: calc(${theme.fontSizes[1]} / 1.5);
    text-transform: uppercase;
    letter-spacing: 0px;

    margin-top: ${theme.space[4]};
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
  transition: ${theme.transition.all};

  @media ${theme.mq.small} {
    width: ${theme.headerHeight};
    height: ${theme.headerHeight};
    margin-right: ${theme.space[3]};
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
