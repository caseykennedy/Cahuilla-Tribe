// LayoutMinimal:
// TODO: create hook for siteMetaData

// ___________________________________________________________________

import React, { useRef } from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'

import theme from '../../../config/theme'
import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'

// ___________________________________________________________________

type LayoutProps = {
  children: React.ReactNode
  isShowing?: boolean
  toggleOverlay?: () => void
}

const LayoutMinimal: React.FC<LayoutProps> = ({ children }) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line no-console
  console.log(
    `%c Site by CaseyKennedy.me `,
    `background: darkgoldenrod; color: #000000`
  )
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Wrapper>
        <S.Main ref={mainRef}>{children}</S.Main>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default LayoutMinimal
