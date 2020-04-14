// Project Slider styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

// Components

// Elements
import { AnimatedBox, Flex } from '../../../elements'

// Theme
import theme from '../../../../config/theme'
import { Rotate } from '../../../styles/transitions'

// ___________________________________________________________________

export const Callout = styled(AnimatedBox)`
  position: relative;
  width: 100%;

  .decorator {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 0;

    svg {
      width: 100%;
      fill: ${theme.colors.tertiary};
    }
  }
`

export const Inner = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: ${theme.colors.text};

  h4 {
    color: ${theme.colors.secondary};
    font-size: ${theme.fontSizes[4]};
    padding: ${theme.space[4]};
  }

  p {

    padding: ${theme.space[4]};
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: ${theme.space[4]};

    color: ${theme.colors.text};
    text-transform: uppercase;

    &:hover {
      color: ${theme.colors.background};
      background: ${theme.colors.bloodshot};
    }

    .ico {
      background: ${theme.colors.black};
      padding: ${theme.space[4]};
      display: block;

      svg {
        fill: white;
        width: ${theme.space[5]};
      }
    }
  }
`
