// Page Title

// ___________________________________________________________________

import styled from 'styled-components'
import { Flex } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

const PageTitle = styled(Flex)`
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
    overflow: hidden;

    @media ${theme.mq.small} {
      border-left: ${theme.border};
      border-top: none;
    }



    .gatsby-image-wrapper {
      max-height: 440px;
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

export default PageTitle
