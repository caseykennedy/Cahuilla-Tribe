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
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`

export const NavLink = styled(AnimatedFlex)`
  width: 50%;
  /* padding: ${theme.space[2]} 0; */

  a {
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes[3]};

    padding: ${theme.space[4]};

    &:hover {
      color: ${theme.colors.background};
    }
  }
`

// ___________________________________________________________________ Styles
