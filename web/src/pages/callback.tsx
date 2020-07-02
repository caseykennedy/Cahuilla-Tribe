// Callback page

// ___________________________________________________________________

// Libraries
import React from 'react'
import { Link } from 'gatsby'

// @ts-ignore
import { login, isAuthenticated } from '../utils/auth'

// ___________________________________________________________________

const CallbackPage = () => {
  // Check if authenticated
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }
  return (
    <>
      <p>Redirecting...</p>
      {/* <nav>
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
      </nav> */}
    </>
  )
}

export default CallbackPage
