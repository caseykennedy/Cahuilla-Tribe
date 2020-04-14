// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Link } from 'gatsby'

import { Box, Flex, Text } from '../../../elements'

import theme from '../../../../config/theme'

// Begin Styles
// ___________________________________________________________________

export const Nav = styled.nav`
  display: none;
  align-items: center;
  z-index: 999;

  height: ${theme.headerHeight};
  margin-right: ${theme.space[5]};

  @media ${theme.mq.small} {
    display: flex;
  }

  .nav-link {
    font-size: ${theme.fontSizes[1]};
    text-transform: uppercase;
    letter-spacing: 0.5px;

    margin-left: ${theme.space[5]};
    position: relative;
    cursor: pointer;

    transition: ${theme.transition.all};

    &:first-child {
      margin-left: 0;
    }

    &:hover {
      .sub-nav {
        display: initial;
        opacity: 1;
        transition: ${theme.transition.all};
      }
    }

    &__title {
      display: flex;
      line-height: 3;
      position: relative;
      transition: ${theme.transition.all};

      span {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          transform: rotate(90deg);
          width: 8px;
          margin-left: ${theme.space[2]};
        }
      }
    }

    .sub-nav {
      position: absolute;
      /* top: ${theme.space[6]}; */
      width: auto;
      min-width: 200px;

      background: ${theme.colors.background};
      border: ${theme.border};

      display: none;
      opacity: 0;
      transition: ${theme.transition.all};

      a {
        color: ${theme.colors.text};
        font-size: calc(${theme.fontSizes[1]} / 1.1);
        text-transform: uppercase;
        letter-spacing: 0;

        display: block;
        margin: 0;
        padding: calc(${theme.space[2]} * 1.2) ${theme.space[3]};
        white-space: nowrap;

        &:hover {
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
        }
      }
    }
  }
`

export const SignIn = styled(Link)`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes[1]};
  text-transform: uppercase;
  letter-spacing: 0.5px;

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
    color: ${theme.colors.white};
    background: ${theme.colors.bloodshot};
  }
`
