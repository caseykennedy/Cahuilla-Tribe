// Department template

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// Elements
import { AnimatedBox } from '../elements'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Department from '../components/Department'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const DepartmentTemplate: React.FC<DepartmentShape> = ({ pageContext }) => {
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
        <Department pageContext={pageContext} />
      </AnimatedBox>
    </Layout>
  )
}

export default DepartmentTemplate

// ___________________________________________________________________
