// Account page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

import { isAuthenticated, login } from '../utils/auth'

// Hooks
import useContentYaml from '../hooks/useContentYaml'
import useOverlay from '../hooks/useOverlay'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Account from '../components/Account'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const AccountPage = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  // Overlay toggle
  const { isShowing, toggleOverlay } = useOverlay()
  const data = useContentYaml()
  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <Layout isShowing={isShowing} toggleOverlay={toggleOverlay}>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <Account />
      </AnimatedBox>
    </Layout>
  )
}

export default AccountPage

// ___________________________________________________________________
