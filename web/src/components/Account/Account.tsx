// Account:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Aside from './Aside'
import FormsApplications from './Sections/FormsApplications'
import EdcDocs from './Sections/EdcDocs'

import { Text, Heading, Box, Flex } from '../../elements'
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

const Account: React.FC = () => {
  return (
    <S.AccountPage>
      <Aside />
      <S.Main width={[1, 7 / 10]}>
        {/* <ImgMatch src="pagetitle.jpg" altText="" /> */}
        <Box width={1} pt={10} pb={4} px={4} bg="black">
          <Text as="p" fontSize={2} color="background" mb={0}>
            Please find all forms and resources below.
          </Text>
        </Box>
        {/* <Text as="p" fontSize={2} px={4} py={6} mb={0}>
          Welcome to your account. Please find all forms and resources below.
        </Text> */}

        <FormsApplications />

        <EdcDocs />

        <Accordion
          title="Roads &amp; Transportation"
          fontSize={4}
          bg={theme.colors.background}
          {...AccordionProps}
        >
          <S.Section>
            <Flex width={[1]} className="content">
              <Text as="p">
                This program is responsible for maintaining and updating the
                Indian Reservation Roads inventory (IRR), which is submitted to
                the BIA in order to receive funding for Tribal and BIA roads.
              </Text>
              <Text as="p">
                The IRR is comprised of Tribal, BIA, County and State owned
                roads that are within the boundary of the reservation or roads
                that provide access to and from the Reservation. The roads
                program is responsible for grading gravel roads,
                repairing/replacing culverts, and improving surface conditions
                on the Tribal and BIA owned roadways.
              </Text>
              <Text as="p">
                As of January 2020 we will be enacting a new Road Maintenance
                Program that performs year round road maintenance on regularly
                scheduled days. The following is the road maintenance schedule:
              </Text>
              <Text as="p" fontSize={2}>
                1st Tues, Weds &amp; Thurs of every month
              </Text>
              <Text as="p">
                Santos &amp; Cienga Truck Trail 1st Wednesday of the month Via
                Rios, Candelaria Rd, Rock Rd 1st Thursday of the month Complete
                east reservation.
              </Text>
            </Flex>

            {/* <Box bg="black" width={[1, 2 / 8]} className="image">
              <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
            </Box> */}
          </S.Section>
        </Accordion>

        <Accordion
          title="Email Directory"
          fontSize={4}
          bg={theme.colors.background}
          {...AccordionProps}
        >
          <S.Section>
            <Flex width={[1]} className="content">
              <Text as="p" fontSize={3}>
                The Cahuilla Band of Indians are Mountain Cahuilla.
              </Text>
            </Flex>

            {/* <Box bg="black" width={[1, 2 / 8]} className="image">
              <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
            </Box> */}
          </S.Section>
        </Accordion>
      </S.Main>
    </S.AccountPage>
  )
}

export default Account
