// Account page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { useSpring, config } from 'react-spring'

// @ts-ignore
import { isAuthenticated, login } from '../utils/auth'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Account from '../components/Account'

// Theme
import theme from '../../config/theme'

// ___________________________________________________________________

const AccountPage = () => {
  // Check if authenticated
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  return (
    <Layout>
      <SEO />
      <Account />
    </Layout>
  )
}

export default AccountPage

// ___________________________________________________________________
