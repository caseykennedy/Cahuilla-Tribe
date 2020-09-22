// Staff Styles:

// ___________________________________________________________________

import styled from 'styled-components'

import { Flex } from '../../../elements'

import theme from '../../../../config/theme'

// ___________________________________________________________________

export const Staff = styled(Flex)`
  flex-wrap: wrap;
  position: relative;
  left: -${theme.space[4]};

  border-top: ${theme.border};
  width: calc(100% + calc(${theme.space[4]} * 2));
  margin: ${theme.space[7]} 0 ${theme.space[7]};
`

export const StaffMember = styled(Flex)`
  padding: ${theme.space[4]};
  border-bottom: ${theme.border};

  &:nth-child(odd) {
    border-right: none;

    @media ${theme.mq.small} {
      border-right: ${theme.border};
    }
  }

  .bio-link {
    cursor: pointer;
    text-decoration: underline;
    font-size: calc(${theme.fontSizes[1]} / 1.15);
    display: inline-block;

    &:hover {
      text-decoration: none;
    }
  }

  .team-member__detail {
    flex-direction: column;
    justify-content: space-between;
    margin-left: ${theme.space[4]};
  }
`
