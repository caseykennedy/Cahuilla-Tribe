import React, { useState, useEffect } from 'react'
import { checkSession, silentAuth } from './src/utils/auth'

const SessionCheck = ({ children }) => {
  const [loading, stillLoading] = useState(true)
  useEffect(() => silentAuth(() => stillLoading(false)))

  return loading === false && <>{children}</>
}

export const wrapRootElement = ({ element }) => (
  <SessionCheck>{element}</SessionCheck>
)
