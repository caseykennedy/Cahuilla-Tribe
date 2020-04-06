// Footer styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { Box, Flex, Heading } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

export const Footer = styled(Flex)`
  flex-direction: row;
  position: relative;

  background: ${theme.colors.black};
  color: ${theme.colors.background};
  border-top: ${theme.border};
  border-bottom: ${theme.border};
`

export const Inner = styled(Flex)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;

  width: 100%;
  border-left: ${theme.border};

  z-index: 99;

  @media ${theme.mq.small} {
    flex-direction: row-reverse;
    width: calc(calc(${theme.siteWidth} - ${theme.headerHeight}) + 2px);
    min-width: inherit;
  }
`

export const Nav = styled(Flex)`
  flex-wrap: wrap;
  padding: ${theme.space[3]};

  @media ${theme.mq.small} {
    padding: ${theme.space[4]};
  }

  ul {
    display: inline-block;
    margin-right: ${theme.space[5]};
    margin-bottom: ${theme.space[5]};

    a {
      display: block;
      color: ${theme.colors.background};
      font-size: ${theme.fontSizes[1]};
      line-height: 1.5;

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  }
`

export const Callout = styled(Flex)`
  background: ${theme.colors.tertiary};
  border-right: none;
  padding: ${theme.space[8]} ${theme.space[3]};

  @media ${theme.mq.small} {
    border-right: ${theme.border};
    padding: ${theme.space[4]};
  }
`

export const Indent = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: calc(${theme.headerHeight} - 2px);
  max-width: calc(${theme.headerHeight} - 2px);
  height: auto;
  padding: ${theme.space[4]} 0;
  background: ${theme.colors.primary};

  .marker {
    color: ${theme.colors.background};
    font-size: ${theme.fontSizes[1]};
    font-weight: 500;
    letter-spacing: 1.5px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    text-transform: uppercase;
  }
`
