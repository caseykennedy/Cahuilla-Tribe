// Account:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Router } from '@reach/router'
import { login, logout, isAuthenticated, getProfile } from '../../utils/auth'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {}

const Account: React.FC<Props> = () => {
  const user = getProfile()
  return (
    <S.HomePage>
      <S.WelcomeBox width={[1, 1 / 3]}>
        <Heading as="h2" color="primary" mt={10}>
          Account
        </Heading>
        <nav>
          {!isAuthenticated() ? <span>log in</span> : (
            <a
              href="#logout"
              onClick={e => {
                logout()
                e.preventDefault()
              }}
            >
              Log Out
            </a>
          )}
        </nav>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </S.WelcomeBox>
    </S.HomePage>
  )
}

export default Account
