// Callback page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'
import { useSpring, config } from 'react-spring'

import { login, logout, isAuthenticated, getProfile } from '../utils/auth'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Callback from '../components/Callback'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const CallbackPage = () => {
  // Page animation
  const pageAnimation = useSpring({
    config: config.molasses,
    delay: 0,
    from: { transform: theme.transform.matrix.from },
    to: { transform: theme.transform.matrix.to }
  })
  return (
    <>
      <p>Callback</p>
      <nav>
        <Link to="/">Home</Link> <Link to="/account/">My Account</Link>{' '}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
    </>
  )
}

export default CallbackPage

// ___________________________________________________________________
