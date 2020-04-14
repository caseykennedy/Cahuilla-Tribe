// Project Slider styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

// Components

// Elements
import { AnimatedBox, Box } from '../../elements'

// Theme
import theme from '../../../config/theme'
import { Rotate } from '../../styles/transitions'

// ___________________________________________________________________

export const Announcements = styled(AnimatedBox)`
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
      fill: ${theme.colors.primary};
    }
  }
`

export const Inner = styled(Box)`
  padding: ${theme.space[4]};
  position: relative;
  /* z-index: 9; */

  .slick-slider {
    .slick-arrow {
      &.slick-prev {
        display: none;
      }

      &.slick-next {
        top: initial;

        @media ${theme.mq.medium} {
        }

        &::before {
          display: none;
        }
      }
    }

    .slide__details {
      opacity: 0;
      transform: ${theme.transform.matrix.from};
      transition: ${theme.transition.all};
    }

    .slick-slide {
      position: relative;

      &.slick-current {
        &::after {
          opacity: 0;
          transform: ${theme.transform.matrix.from};
          z-index: -10;
        }

        .slide__details {
          opacity: 1;
          transform: ${theme.transform.matrix.to};
          position: relative;
          z-index: 99999;
        }
      }
    }
  }

  .btn-inner {
  }

  .slick-dots {
    li {
      margin: 0;

      &.slick-active {
        button {
          &:before {
            color: magenta;
          }
        }
      }

      button {
        &:before {
          color: magenta;
          font-size: 8px;
        }
      }
    }
  }
`
