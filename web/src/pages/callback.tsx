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
  
  return (
    <>
      <p>loading...</p>
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
