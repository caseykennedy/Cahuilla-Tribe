// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

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
      }
    }

    &__title {
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes[1]};
      text-transform: uppercase;
      letter-spacing: 0.5px;
      line-height: 3;

      position: relative;
      display: block;
      transition: ${theme.transition.all};
    }

    .sub-nav {
      position: absolute;
      /* top: ${theme.space[6]}; */
      padding: ${theme.space[4]};
      width: auto;

      background: ${theme.colors.background};
      border: ${theme.border};

      display: none;
      opacity: 0;

      transition: ${theme.transition.all};

      a {
        display: block;
        margin: 0;
        padding: ${theme.space[2]} 0;
        white-space: nowrap;
      }
    }
  }
`

// export const SubNav = styled(Box)`
//   position: absolute;
//   top: ${theme.space[6]};
//   padding: ${theme.space[4]};

//   width: auto;

//   background: ${theme.colors.background};
//   border: ${theme.border};

//   a {
//     margin: 0;
//     padding: ${theme.space[2]} 0;
//     white-space: nowrap;
//   }
// `
