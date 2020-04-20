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
  align-items: center;
  justify-content: stretch;

  background: ${theme.colors.secondary};
  padding: 0;

  .title {
    padding: ${theme.space[6]} ${theme.space[4]};
  }

  .image {
    display: flex;
    align-items: center;
    max-height: 260px;
    overflow: hidden;

    border-left: none;
    border-top: ${theme.border};

    @media ${theme.mq.small} {
      border-left: ${theme.border};
      border-top: none;
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
  padding: ${theme.space[7]} ${theme.space[4]};

  background: ${theme.colors.background};
  border-top: ${theme.border};
  border-right: none;

  @media ${theme.mq.sm} {
    border-right: ${theme.border};
  }
`

export const Sidebar = styled(Flex)`
  flex-direction: column;
  position: relative;
  padding: ${theme.space[3]} ${theme.space[4]};
  background: ${theme.colors.background};
  border-top: ${theme.border};

  .decorator {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: 0;

    svg {
      width: 100%;
      fill: ${theme.colors.bloodshot};
    }
  }
`

export const Inner = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  color: ${theme.colors.text};

  h3 {
    font-size: ${theme.fontSizes[5]};
    margin-bottom: 0;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: ${theme.space[4]};

    color: ${theme.colors.text};
    text-transform: uppercase;

    &:hover {
      color: ${theme.colors.background};
      background: ${theme.colors.bloodshot};
    }

    .ico {
      background: ${theme.colors.black};
      padding: ${theme.space[4]};
      display: block;

      svg {
        fill: white;
        width: ${theme.space[5]};
      }
    }
  }
`

export const Team = styled(Flex)`
  flex-wrap: wrap;
  position: relative;
  left: -${theme.space[4]};

  border-top: ${theme.border};
  width: calc(100% + calc(${theme.space[4]} * 2));
  margin: ${theme.space[7]} 0;

  .team-member {
    padding: ${theme.space[4]};
    border-bottom: ${theme.border};

    &:nth-child(odd) {
      border-right: ${theme.border};
    }

    &__detail {
      flex-direction: column;
      justify-content: space-between;
      margin-left: ${theme.space[4]};
    }
  }
`
