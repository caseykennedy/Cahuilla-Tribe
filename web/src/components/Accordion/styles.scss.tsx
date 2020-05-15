// Accordion Styles:

// ___________________________________________________________________

// Core
import styled from 'styled-components'
import { darken } from 'polished'

import Icon from '../Icons'

// Theme
import theme from '../../../config/theme'

// Elements
import { Box, Flex } from '../../elements'

// Begin Styles
// ___________________________________________________________________

// export const AccordionContainer = styled.div<{ chevronColor: string }>`

export const AccordionContainer = styled(Box)`
  width: 100%;
  position: relative;
  border-top: ${theme.border};

  &:first-child {
    border-top: none;
  }
`

export const AccordionInner = styled.div`
  display: flex;
  flex-direction: column;

  .rotate {
    transform: rotate(90deg);
  }
`

export const AccordionToggle = styled(Box)<{ bg: string, colorActive: string, color: string }>`
  align-items: center;
  background: ${p => p.bg};
  color: ${p => p.color};
  cursor: pointer;

  display: flex;
  border: none;
  outline: none;
  padding: ${theme.space[8]} ${theme.space[4]};
  transition: background-color 0.6s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    color: ${p => p.colorActive};
    background: ${p => p.bg && darken(.08, p.bg)};
  }

  &.active {
    color: ${p => p.colorActive};
  }
`

export const AccordionContent = styled(Box)<{ borderColor: string }>`
  overflow: hidden;
  transition: max-height 0.3s ease;
  /* border-bottom: 2px solid ${p => p.borderColor}; */
`

export const Carat = styled(Icon)<{ chevronColor: string }>`
  margin-left: auto;
  transition: transform 0.3s ease;

  svg {
    fill: ${p => p.chevronColor};
    width: 3rem;
  }
`

// ___________________________________________________________________ Styles
