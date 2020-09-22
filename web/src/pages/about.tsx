// About page

// ___________________________________________________________________

import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import About from '../components/About'

import theme from '../../config/theme'

// ___________________________________________________________________

const AboutPage = () => {
  return (
    <Layout>
      <SEO
        pathname="/about"
        title="About the Cahuilla Band of Indians"
        desc="The Mission of the Cahuilla Tribal Administration is to bring about a better way of life for Cahuilla people, Tribal People, and the surrounding Communities by protecting and exercising self-governing rights."
        individual={true}
      />
      <About />
    </Layout>
  )
}

export default AboutPage
