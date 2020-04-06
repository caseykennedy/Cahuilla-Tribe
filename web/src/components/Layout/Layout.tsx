// Layout:
// TODO: create hook for siteMetaData

// ___________________________________________________________________

import React, { useRef } from 'react'
import { ThemeProvider } from 'styled-components'

import Header from '../Header'
import Footer from '../Footer'
import Overlay from '../Header/Overlay'
import { Box } from '../../elements'

import theme from '../../../config/theme'
import GlobalStyles from '../../styles/global'
import * as S from './styles.scss'

// ___________________________________________________________________

type LayoutProps = {
  children: React.ReactNode
  isShowing: boolean
  toggleOverlay: () => void
}

const Layout: React.FC<LayoutProps> = ({
  children,
  isShowing,
  toggleOverlay
}) => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line no-console
  console.log(
    `%c CAHUILLA | Band of Indians `,
    `background: #CF9336; color: #3B745F`
  )
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Wrapper>
        <Header />
        <S.Main ref={mainRef}>{children}</S.Main>
        <Footer />
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Layout
