// Account:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Router } from '@reach/router'
import { login, logout, isAuthenticated, getProfile } from '../../../utils/auth'

import { Text, Heading, Box, Flex } from '../../../elements'
import Icon from '../../Icons'
import MountainLarge from '../../MountainLarge'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Account: React.FC = () => {
  const user = getProfile()
  return (
    <S.Aside width={[1, 3 / 10]}>
      <S.User>
        <S.WelcomeBox width={[1]}>
          <div className="decorator">
            <MountainLarge />
          </div>
          <div className="inner">
            <Text as="p" color="secondary">You are signed in</Text>
            <Heading as="h3" mt={10} mb={0}>
              Welcome{user.nickname && `, ${user.nickname}`}
            </Heading>
          </div>
        </S.WelcomeBox>

        <Flex width={1} px={4} py={4}>
          <Box as="img" src={user.picture} alt="" width={1 / 4} pr={4} />
          <Text fontSize={1} width={3 / 4}>
            {user.nickname}
            <br />
            {user.email}
            {/* <br />
            {user.updated_at} */}
          </Text>
        </Flex>
      </S.User>
      <S.Tools>
        {/* {JSON.stringify(user, null, 2)} */}
        <Box className="updates">
          <Text as="p" fontSize={3}>
            Want to receive alerts and updates on your phone?
          </Text>
          <Text as="p" fontSize={1} mt={8}>
            Text "Cahuilla" to <span className="t-underline">31996</span>
          </Text>
        </Box>
        {/* {!isAuthenticated() ? (
          <span>log in</span>
        ) : (
          <a
            href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}
          >
            Sign Out
            <div className="ico">
              <Icon name="nextArrow" />
            </div>
          </a>
        )} */}
        <a href="#logout">
          Take a survey
          <div className="ico">
            <Icon name="document" />
          </div>
        </a>
      </S.Tools>
    </S.Aside>
  )
}

export default Account
