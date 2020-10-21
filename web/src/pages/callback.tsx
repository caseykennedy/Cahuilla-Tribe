// Callback page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'

// @ts-ignore
import { login, handleAuthentication } from '../utils/auth'

// ___________________________________________________________________

const CallbackPage = () => {
  // Handle authentication
  handleAuthentication()

  return <p>loading...</p>
}

export default CallbackPage
