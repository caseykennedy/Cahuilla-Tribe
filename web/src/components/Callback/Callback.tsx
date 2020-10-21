// Callback Page:

// ___________________________________________________________________

import React from 'react'
import { Link } from 'gatsby'

import { Heading } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Callback = () => {
  return (
    <S.CallbackPage>
      <S.WelcomeBox width={[1, 1 / 3]}>
        <Heading as="h2" color="primary" mt={10}>
          Callback
        </Heading>
        <nav>
          <Link to="/account">My Account</Link>{' '}
        </nav>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      </S.WelcomeBox>
    </S.CallbackPage>
  )
}

export default Callback
