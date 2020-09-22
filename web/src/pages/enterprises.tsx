// Enterprise page

// ___________________________________________________________________

import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Enterprises from '../components/Enterprises'

import theme from '../../config/theme'

// ___________________________________________________________________

const EnterprisePage = () => {
  return (
    <Layout>
      <SEO />
      <Enterprises />
    </Layout>
  )
}

export default EnterprisePage
