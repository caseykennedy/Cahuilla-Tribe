// Home page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Hooks
import useContentYaml from '../hooks/useContentYaml'
import useOverlay from '../hooks/useOverlay'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Home from '../components/Home'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const IndexPage = () => {
  // Overlay toggle
  const {isShowing, toggleOverlay} = useOverlay()
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
        <Home />
      </AnimatedBox>
    </Layout>
  )
}

export default IndexPage

// ___________________________________________________________________
