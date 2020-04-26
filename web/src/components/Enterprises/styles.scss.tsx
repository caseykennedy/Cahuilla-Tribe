// Homepage Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Enterprises = styled(Flex)`
  background: ${theme.colors.background};
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

export const EnterpriseBox = styled(Flex)`
  justify-content: stretch;
  position: relative;
  border-right: none;
  border-bottom: ${theme.border};

  @media ${theme.mq.small} {
    border-right: ${theme.border};
    border-bottom: none;
  }

  .inner {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: ${theme.space[4]};
    position: relative;
    z-index: 9;
  }

  .decorator {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 0;

    svg {
      width: 100%;
      fill: ${theme.colors.background};
    }
  }

  &.mountain-sky {
    border-left: none;
    border-right: none;
    border-top: ${theme.border};

    @media ${theme.mq.small} {
      border-left: ${theme.border};
    }
  }
`
