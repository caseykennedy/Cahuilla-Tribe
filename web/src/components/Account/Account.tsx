// Account:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Aside from './Aside'
import FormsApplications from './Sections/FormsApplications'
import EdcDocs from './Sections/EdcDocs'
import Roads from './Sections/Roads'

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
          <Text as="p" fontSize={1} color="background" mb={0}>
            Your forms and resources:
          </Text>
        </Box>
        {/* <Text as="p" fontSize={2} px={4} py={6} mb={0}>
          Welcome to your account. Please find all forms and resources below.
        </Text> */}

        <FormsApplications />

        <EdcDocs />

        <Roads />

        <Accordion
          title="Email Directory"
          fontSize={4}
          bg={theme.colors.background}
          {...AccordionProps}
        >
          <S.Section>
            <Flex width={[1]} className="content">
              <Text as="p" fontSize={3}>
                Incoming.
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
