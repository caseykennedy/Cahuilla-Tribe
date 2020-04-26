// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Contact = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
`

export const Enterprise = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;

  @media ${theme.mq.small} {
  }
`
