// Enterprises

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import ImgMatch from '../ImgMatch'
import Icon from '../Icons'
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
            <Box />
            <Box width={1}>
              <Heading as="h2" color="primary" px={4} mt={10} mb={6}>
                Cahuilla
                <br />
                Casino
              </Heading>
              <Text as="a" href="//cahuillacasinohotel.com/" target="_blank">
                visit the website
                <div className="ico">
                  <Icon name="document" />
                </div>
              </Text>
            </Box>
          </div>
        </S.EnterpriseBox>
        <S.Enterprise width={[1, 1 / 2]}>
          <ImgMatch src="cahuilla-casino.jpg" altText="Cahuilla Casino Hotel" />
        </S.Enterprise>
      </Flex>
      <Flex width={1} flexDirection={['row', 'row-reverse']} flexWrap="wrap">
        <S.EnterpriseBox
          bg="secondary"
          width={[1, 1 / 2]}
          className="mountain-sky"
        >
          <div className="inner">
            <Box />
            <Box width={1}>
              <Heading as="h2" color="primary" px={4} mt={10} mb={6}>
                Mountain Sky Travel Center
              </Heading>
              <Text
                as="a"
                href="//cahuillacasinohotel.com/travel-center/"
                target="_blank"
              >
                visit the website
                <div className="ico">
                  <Icon name="document" />
                </div>
              </Text>
            </Box>
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
