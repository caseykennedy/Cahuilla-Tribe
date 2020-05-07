// Navigation Styles:

// ___________________________________________________________________

import styled from 'styled-components'

// Theme
import theme from '../../../../config/theme'

// Elements
import { Flex, AnimatedFlex } from '../../../elements'

// Begin Styles
// ___________________________________________________________________

export const NavLinks = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  overflow: auto;
  padding-top: ${theme.fontSizes[2]};
  padding-bottom: ${theme.fontSizes[4]};
`

export const NavLink = styled(AnimatedFlex)`
  flex-direction: column;
  width: 50%;
  /* padding: ${theme.space[2]} 0; */

  .nav-mobile {
    &__link {
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes[2]};
      text-transform: uppercase;
      padding: ${theme.space[4]};
    }

    &-sub {
      padding-bottom: ${theme.fontSizes[2]};

      &__link {
        display: block;
        padding: ${theme.space[3]} ${theme.space[4]} ${theme.space[3]} ${theme.space[4]};
        font-size: calc(${theme.fontSizes[2]} / 1.15);
      }
    }
  }
`

// ___________________________________________________________________ Styles
