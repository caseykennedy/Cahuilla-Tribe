// Home:

// ___________________________________________________________________

import React, { useRef } from 'react'

import ImgMatch from '../ImgMatch'

import { Text, Heading, Box, Flex } from '../../elements'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type Props = {}

const Home: React.FC<Props> = () => {
  // Ref <main> to lock body for modal/overlay
  const mainRef = useRef<HTMLDivElement>(null)
  return (
    <S.HomePage>
      <S.WelcomeBox width={[1, 1 / 3]}>
        <Heading as="h2" color="primary" mt={10}>
          Welcome Paxam
        </Heading>
      </S.WelcomeBox>
      <S.ImageBox width={[1, 1 / 3]}>
        <ImgMatch src="joshua-trees.jpg" altText="Southern Cahuilla desert" />
      </S.ImageBox>
      <S.BulletinBox width={[1, 1 / 3]}>
        <Text as="p" color="white">
          The Cahuilla Band of Indians are Mountain Cahuilla (Qawishpa
          Cahuillangnah), one of the original peoples of Southern California.
        </Text>
      </S.BulletinBox>
      <S.ImageBox width={[1, 1 / 3]} className="border--top">
        <ImgMatch src="cahuilla-people.jpg" altText="Southern Cahuilla desert" />
      </S.ImageBox>
      <S.IntroBox width={[1, 2 / 3]}>
        <Text as="p" fontSize={3}>
          The Cahuilla Band of Indians are Mountain Cahuilla (Qawishpa
          Cahuillangnah), one of the original peoples of Southern California.
        </Text>
        <Flex mt={10}>
          <Text as="p">LEARN MORE ABOUT OUR TRIBE</Text>
        </Flex>
      </S.IntroBox>
    </S.HomePage>
  )
}

export default Home
