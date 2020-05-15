// About

// ___________________________________________________________________

import React, { useRef } from 'react'
import { Link } from 'gatsby'

import { Text, Heading, Box, Flex } from '../../elements'
import ImgMatch from '../ImgMatch'
import PageTitle from '../PageTitle'
import Main from '../Main'
import Accordion from '../Accordion'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text
}

const About: React.FC = () => {
  return (
    <S.About>
      <Box bg="background" width={1}>
        <Accordion
          title="About Us"
          bg={theme.colors.tertiary}
          {...AccordionProps}
        >
          <S.Careers id="careers">
            <Flex width={[1, 6 / 8]} className="content">
              <Text as="p" fontSize={3}>
                The Cahuilla Band of Indians are Mountain Cahuilla (Qawishpa
                Cahuillangnah), one of the original peoples of Southern
                California. The Mountain Cahuilla lived in the high mountain
                valleys and canyons, running up from the Coachella Valley, San
                Gorgonio Pass, and San Jacinto Mountains region of Southern
                California.
              </Text>
              <Text as="p">
                Cahuilla history in stories and songs tells how the Cahuilla
                were given these lands as their homeland since the beginning of
                time by their Creator. The Cahuilla reservation of approximately
                20,000 acres of Trust Land was established in 1875 and is
                located near Anza, California in what is now western Riverside
                County.
              </Text>
            </Flex>

            <Box bg="black" width={[1, 2 / 8]} className="image">
              <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
            </Box>
          </S.Careers>
        </Accordion>
        <Accordion
          title="Our Mission"
          bg={theme.colors.royaldank}
          {...AccordionProps}
        >
          <S.Contact id="careers">
            <Flex width={[1, 5 / 8]} className="content">
              <Text as="p" fontSize={3}>
                The Mission of the Cahuilla Tribal Administration is to bring
                about a better way of life for Cahuilla people, Tribal People,
                and the surrounding Communities by protecting and exercising
                self-governing rights.
              </Text>
              <Text as="p">
                The Cahuilla Band of Indians believes that it must function for
                the greater benefit of the largest possible number People.
              </Text>
            </Flex>

            <Box bg="black" width={[1, 3 / 8]} className="image">
              <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
            </Box>
          </S.Contact>
        </Accordion>
        <Accordion
          title="Our Values"
          bg={theme.colors.primary}
          {...AccordionProps}
        >
          <S.Careers id="contact">
            <Flex width={[1, 2 / 3]} className="content">
              <Flex width={1} flexWrap="wrap">
                <Text as="ul">
                  <li>
                    We are interdependent. We trust one another and work as a
                    team toward our common goals. We recognize that each of us
                    has an equally important role in the community, and that we
                    are stronger together than as individuals.
                  </li>
                  <li>
                    We are resilient. We look to the future with steadfast
                    optimism, hope and faith in Our People. We adapt to change
                    with persistence and determination. We engage in creative
                    solutions and endure adversity with courage.
                  </li>
                  <li>
                    We are accountable. We are ultimately responsible for
                    fulfilling our mission and serving Our People. We are
                    reliable, work with integrity and lead by example. We honor
                    our obligations and correct our mistakes.
                  </li>
                  <li>
                    We are respectful. We treat one another with dignity and
                    kindness. We value and embrace our diversity, respect
                    ourselves and understand boundaries. We approach each
                    experience with gratitude and humility.
                  </li>
                </Text>
              </Flex>
            </Flex>

            <Box bg="black" width={[1, 1 / 3]} className="image">
              <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
            </Box>
          </S.Careers>
        </Accordion>
        <Accordion
          title="A Sovereign Tribe"
          bg={theme.colors.quaternary}
          {...AccordionProps}
        >
          <S.Contact id="careers">
            <Flex width={[1, 5 / 8]} className="content">
              <Text as="p" fontSize={3}>
                The Cahuilla Band of Indians exercises its authority as a
                sovereign nation in order to provide for the welfare of its
                community of Members and future generations. The Tribal
                Government consists of the General Council and an elected five
                Member Tribal Council who represents Tribal matters.
              </Text>
              <Text as="p">
                The Tribe seeks economic self- sufficiency in order to support
                social and economic well-being of its Tribal Members. Some of
                the programs that have been implemented include a Tribal
                Library, Cultural classes, Scholarship, Fire Prevention,
                Environmental Protection, and Inter-Tribal Sports. Cahuilla
                operates a Casino and Mountain Sky Travel Center located of
                Highway 371 that provides some income to the programs and
                services Cahuilla offers. Stock raising and cattle ranching is a
                traditional enterprise on the reservation that some Members have
                continued in their families for decades.
              </Text>
            </Flex>

            <Box bg="black" width={[1, 3 / 8]} className="image">
              <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
            </Box>
          </S.Contact>
        </Accordion>
      </Box>
    </S.About>
  )
}

export default About
