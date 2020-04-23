// Department Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const Department = styled(Flex)`
  flex-wrap: wrap;
  justify-content: stretch;
  width: 100%;
  border-left: none;

  @media ${theme.mq.small} {
  }
`

export const PageTitle = styled(Flex)`
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: stretch;

  background: ${theme.colors.secondary};
  padding: 0;

  .title {
    padding: ${theme.space[6]} ${theme.space[4]};
  }

  .image {
    background: #a17632;
    border-left: none;
    border-top: ${theme.border};
    max-height: 300px;
    overflow: hidden;

    @media ${theme.mq.small} {
      border-left: ${theme.border};
      border-top: none;
    }

    div {
      mix-blend-mode: luminosity;
    }
  }

  h2 {
    margin-bottom: 0;
    color: ${theme.colors.primary};
    font-size: 9vw;

    @media ${theme.mq.small} {
      font-size: 6vw;
    }
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
