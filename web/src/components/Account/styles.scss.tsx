// Account Styles:

// ___________________________________________________________________

import styled from 'styled-components'
import { darken, lighten } from 'polished'

import { Box, Flex, Heading } from '../../elements'

import theme from '../../../config/theme'

// ___________________________________________________________________

export const AccountPage = styled(Flex)`
  flex-wrap: wrap;
  width: 100%;
  border-left: none;

  @media ${theme.mq.small} {
  }
`

export const Aside = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  background: ${darken(0.03, `${theme.colors.background}`)};
  border-right: ${theme.border};
  /* padding: ${theme.space[4]}; */

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${theme.space[4]};

    border-top: ${theme.border};
    color: ${theme.colors.text};
    text-transform: uppercase;

    &:hover {
      background: ${theme.colors.primary};
    }

    .ico {
      background: ${theme.colors.primary};
      border-left: ${theme.border};
      padding: ${theme.space[3]};
      display: block;

      @media ${theme.mq.small} {
        padding: ${theme.space[4]};
      }

      svg {
        fill: ${theme.colors.black};
        width: ${theme.space[5]};
      }
    }
  }
`

export const User = styled(Flex)`
  flex-direction: column;
  padding: ${theme.space[6]} ${theme.space[4]};
`

export const Tools = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;
`

export const ImageBox = styled(Flex)`
  justify-content: stretch;
  border-right: ${theme.border};

  &.border {
    &--top {
      border-top: ${theme.border};
    }
  }
`

export const Main = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;

  background: ${theme.colors.background};
`

export const Section = styled(Flex)`
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;

  .content {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: ${theme.border};
    border-left: 0;
    padding: ${theme.space[4]};

    @media ${theme.mq.small} {
      /* border-left: ${theme.border}; */
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

export const FormItem = styled.a`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  border-bottom: 1px solid ${darken (0.15, `${theme.colors.background}`)};
  padding: ${theme.space[4]} 0;

  color: ${theme.colors.text};
  font-size: ${theme.fontSizes[1]};

  width: 100%;

  @media ${theme.mq.small} {
    width: calc(50% - ${theme.space[4]});
  }

  &:nth-child(odd) {
    margin-right: ${theme.space[4]};
  }

  span {
    margin-right: ${theme.space[3]};

    svg {
      width: ${theme.space[4]};
      fill: ${theme.colors.tertiary};
    }
  }
`
