// Enterprises

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import ImgMatch from '../ImgMatch'
import MountainLarge from '../MountainLarge'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const Enterprises: React.FC = () => {
  return (
    <S.Enterprises>
      <Flex width={1} flexWrap="wrap">
        <S.EnterpriseBox bg="bloodshot" width={[1, 1 / 2]}>
          <div className="decorator">
            <MountainLarge />
          </div>
          <div className="inner">
            <Text as="p">Cahuilla Enterprises</Text>
            <Heading as="h2" color="primary" mt={10}>
              Cahuilla
              <br />
              Casino
            </Heading>
          </div>
        </S.EnterpriseBox>
        <S.Enterprise width={[1, 1 / 2]}>
          <ImgMatch src="cahuilla-casino.jpg" altText="Cahuilla Casino Hotel" />
        </S.Enterprise>
      </Flex>
      <Flex width={1} flexDirection={['row', 'row-reverse']} flexWrap="wrap">
        <S.EnterpriseBox bg="black" width={[1, 1 / 2]} className="mountain-sky">
          <div className="inner">
            <Text as="p">Cahuilla Enterprises</Text>
            <Heading as="h2" color="primary" mt={10}>
              Mountain Sky Travel Center
            </Heading>
          </div>
        </S.EnterpriseBox>
        <S.Enterprise width={[1, 1 / 2]}>
          <ImgMatch
            src="mountain-sky-travel-center.png"
            altText="Mountain Sky Travel Center"
          />
        </S.Enterprise>
      </Flex>
    </S.Enterprises>
  )
}

export default Enterprises
