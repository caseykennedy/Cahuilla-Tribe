// Staff Styles:

// ___________________________________________________________________

import { Link } from 'gatsby'
import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const PrevNext = styled(Flex)`
  flex-wrap: wrap;
  background: ${theme.colors.secondary};
  border-top: ${theme.border};
`

export const Button = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: ${theme.colors.secondary};
  padding: ${theme.space[8]} ${theme.space[6]};
  width: 100%;

  color: ${theme.colors.background};
  font-family: MediaSans;
  font-size: ${theme.fontSizes[3]};
  letter-spacing: 2px;

  @media ${theme.mq.small} {
    width: 50%;
  }

  &:hover {
    background: ${theme.colors.primary};
  }

  &:nth-child(1) {
    border-right: none;
    border-bottom: ${theme.border};

    @media ${theme.mq.small} {
      border-right: ${theme.border};
      border-bottom: none;
    }
  }
`
