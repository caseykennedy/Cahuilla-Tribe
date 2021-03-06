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
`

export const NavLink = styled(AnimatedFlex)`
  flex-direction: column;
  width: 100%;
  /* padding: ${theme.space[2]} 0; */

  .nav-mobile {
    &__link {
      color: ${theme.colors.text};
      font-size: ${theme.fontSizes[2]};
      text-transform: uppercase;
      padding: ${theme.space[4]};
    }

    &-sub {
      padding: ${theme.fontSizes[3]} 0 ${theme.fontSizes[3]} 0;
      border-bottom: ${theme.border};

      &__link {
        display: block;
        padding: ${theme.space[3]} ${theme.space[4]};
        color: ${theme.colors.text};
        font-size: calc(${theme.fontSizes[2]} / 1.15);
      }
    }
  }
`

// ___________________________________________________________________ Styles
