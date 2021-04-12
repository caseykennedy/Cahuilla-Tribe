// Roads Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken } from 'polished'
import { Flex } from '../../../../elements'
import theme from '../../../../../config/theme'

// ___________________________________________________________________

export const Section = styled(Flex)`
  width: 100%;

  .maint-date {
    width: 100%;
    padding: ${theme.space[4]};
    margin-top: ${theme.space[6]};

    border: ${theme.border};
    background: ${darken(0, theme.colors.secondary)};
    color: ${theme.colors.background};

    @media ${theme.mq.small} {
      width: 48%;
    }
  }

  .content {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: ${theme.border};
    border-left: 0;
    padding: ${theme.space[4]};
  }
`
