// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Department = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  border-left: none;

  @media ${theme.mq.small} {
  }
`

export const PageTitle = styled(Flex)`
  flex-wrap: wrap;
  align-items: center;
  justify-content: stretch;
  background: ${theme.colors.secondary};
  padding: 0;

  .title {
    padding: ${theme.space[4]} ${theme.space[4]};
  }

  .image {
    border-left: none;

    @media ${theme.mq.small} {
      border-left: ${theme.border};
    }
  }

  h2 {
    color: ${theme.colors.primary};
    font-size: calc(${theme.fontSizes[5]} / 1.2);
    margin-bottom: 0;
  }
`

export const Main = styled(Flex)`
  flex-direction: column;
  padding: ${theme.space[6]} ${theme.space[4]};
  background: ${theme.colors.background};
  border-top: ${theme.border};
  border-right: none;

  @media ${theme.mq.sm} {
    border-right: ${theme.border};
  }
`

export const Sidebar = styled(Flex)`
  flex-direction: column;
  padding: ${theme.space[6]} ${theme.space[4]};
  background: ${theme.colors.background};
  border-top: ${theme.border};
`

export const ImageBox = styled(Flex)`
  justify-content: stretch;
  border-right: ${theme.border};

  &.border {
    &--top {
      border-top: ${theme.border};
    }
  }
`

export const BulletinBox = styled(Flex)`
  background: ${theme.colors.black};
  padding: ${theme.space[4]};
`

export const IntroBox = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  padding: ${theme.space[4]};
  background: ${theme.colors.background};
  border-top: ${theme.border};
`
