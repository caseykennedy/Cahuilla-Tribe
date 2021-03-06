// Authentication service
// TODO: convert to ts

import auth0 from 'auth0-js'
import { navigateTo } from 'gatsby-link'

export const isBrowser = typeof window !== 'undefined'

const tokens = {
  idToken: false,
  accessToken: false
}

let user = {}

export const isAuthenticated = () => {
  return tokens.idToken !== false
}

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.GATSBY_AUTH0_DOMAIN,
      clientID: process.env.GATSBY_AUTH0_CLIENTID,
      redirectUri: process.env.GATSBY_AUTH0_CALLBACK,
      useRefreshTokens: true,
      responseType: 'token id_token',
      scope: 'openid profile email'
    })
  : {}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err) {
    if (err.error === 'login_required') {
      login()
    }
  }
  // if (err) {
  //   navigateTo('/')
  //   cb()
  //   return
  // }
  if (authResult && authResult.accessToken && authResult.idToken) {
    tokens.idToken = authResult.idToken
    tokens.accessToken = authResult.accessToken

    auth.client.userInfo(tokens.accessToken, (_err, userProfile) => {
      user = userProfile
      window.localStorage.setItem('isLoggedIn', true)

      navigateTo('/account')
      cb()
    })
  }
}

export const silentAuth = callback => {
  if (!isAuthenticated()) return callback()
  auth.checkSession({}, setSession(callback))

  const protectedRoutes = [`/account`, `/callback`]
  const isProtectedRoute = protectedRoutes
    .map(route => window.location.pathname.includes(route))
    .some(route => route)
  if (isProtectedRoute) {
    auth.checkSession({}, setSession(callback))
  }
}

export const checkSession = callback => {
  const isLoggedIn = window.localStorage.getItem('isLoggedIn')
  if (isLoggedIn === 'false' || isLoggedIn === null) {
    callback()
  }

  const protectedRoutes = [`/account`, `/callback`]
  const isProtectedRoute = protectedRoutes
    .map(route => window.location.pathname.includes(route))
    .some(route => route)
  if (isProtectedRoute) {
    auth.checkSession({}, setSession(callback))
  }
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }
  auth.parseHash(setSession())
}

export const getProfile = () => user

export const logout = () => {
  tokens.accessToken = false
  tokens.idToken = false
  user = {}
  window.localStorage.setItem('isLoggedIn', false)

  auth.logout({
    returnTo: window.location.origin
  })
}
