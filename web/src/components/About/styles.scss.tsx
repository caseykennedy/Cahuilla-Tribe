// About Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const About = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
`

export const Careers = styled(Flex)`
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;

  .content {
    flex-direction: column;
    justify-content: space-between;
    border-top: ${theme.border};
    border-left: 0;
    padding: ${theme.space[6]} ${theme.space[4]} ${theme.space[4]};

    @media ${theme.mq.small} {
      border-left: ${theme.border};
    }

    ul {
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      list-style: none;

      div {
        padding: ${theme.space[4]} 0;
      }
    }
  }

  .image {
    border-top: ${theme.border};
  }
`

export const Contact = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;

  .content {
    flex-direction: column;
    justify-content: space-between;
    border-top: ${theme.border};
    border-right: ${theme.border};
    padding: ${theme.space[4]};

    a {
      color: ${theme.colors.text};
      font-size: calc(${theme.fontSizes[3]} / 1.2);
      text-decoration: underline;
    }
  }

  .image {
    border-top: ${theme.border};
  }
`
