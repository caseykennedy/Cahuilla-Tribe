// Project Slider styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { readableColor } from 'polished'

// Theme
import theme from '../../../config/theme'

// Elements
import { AnimatedBox, Flex } from '../../elements'

// Styles
import { Rotate } from '../../styles/transitions'

// ___________________________________________________________________

export const Gallery = styled(AnimatedBox)`
  .slick-slider {
    .slick-arrow {
      &.slick-prev {
        display: none;
      }

      &.slick-next {
        top: initial;
        right: calc(${theme.space[3]} * 6);
        bottom: calc(${theme.space[3]} * 3);

        @media ${theme.mq.medium} {
          right: calc(${theme.space[3]} * 10);
        }

        &::before {
          display: none;
        }

        span {
          animation: ${Rotate} 20s infinite linear;

          svg {
            transform: scale(1);
            transition: ${theme.transition.all};

            @media ${theme.mq.medium} {
              transform: scale(2);
            }

            &:hover {
              cursor: none;
              transform: translateX(1rem) scale(1);

              @media ${theme.mq.medium} {
                transform: translateX(1rem) scale(2);
              }
            }
          }
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
