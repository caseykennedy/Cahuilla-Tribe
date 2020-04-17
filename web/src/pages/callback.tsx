// Callback page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

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
    <Layout>
      <SEO />
      <AnimatedBox style={pageAnimation}>
        <Callback />
      </AnimatedBox>
    </Layout>
  )
}

export default CallbackPage

// ___________________________________________________________________
