// Page Title

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Main = styled(Flex)`
  flex-direction: column;
  padding: ${theme.space[6]} ${theme.space[4]};

  background: ${theme.colors.background};
  border-top: ${theme.border};
  border-right: none;

  @media ${theme.mq.sm} {
    border-right: ${theme.border};
  }
`

export default Main
