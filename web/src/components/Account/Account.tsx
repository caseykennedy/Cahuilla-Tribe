// Account:

// ___________________________________________________________________

import React, { useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Router } from '@reach/router'
import { login, logout, isAuthenticated, getProfile } from '../../utils/auth'

import { Text, Heading, Box, Flex } from '../../elements'
import Icon from '../Icons'
import Accordion from '../Accordion'
import ImgMatch from '../ImgMatch'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type FormsQueryShape = {
  allSanityForm: {
    edges: {
      node: {
        edc: boolean
        link: string
        title: string
        id: string
      }
    }[]
  }
}

const AccordionProps = {
  chevronColor: theme.colors.text,
  color: theme.colors.text,
  colorActive: theme.colors.text,
  borderColor: theme.colors.text
}

// ___________________________________________________________________

const FormItems: React.FC = () => {
  const data: FormsQueryShape = useStaticQuery(graphql`
    query FormsQuery {
      allSanityForm(sort: { fields: title, order: ASC }) {
        edges {
          node {
            edc
            link
            title
            id
          }
        }
      }
    }
  `)
  const formQuery = data.allSanityForm.edges
  return (
    <Flex width={[1]} className="content">
      {formQuery.map(({ node: item }) => (
        <S.FormItem href={item.link} target="_blank" key={item.id}>
          <Icon name="document" />
          {item.title}
        </S.FormItem>
      ))}
    </Flex>
  )
}

const Account: React.FC = () => {
  const user = getProfile()
  return (
    <S.AccountPage>
      <S.Aside width={[1, 3 / 10]}>
        <S.User>
          <Heading as="h3">
            Welcome back{user.nickname && `, ${user.nickname}`}
          </Heading>
        </S.User>
        <S.Tools>
          <Box
            px={4}
            py={8}
            bg="secondary"
            color="background"
            style={{ borderTop: theme.border }}
          >
            <Text as="p" fontSize={3}>
              Want alerts and updates?
            </Text>
            <Text as="p" fontSize={1}>
              Text "Cahuilla" to <span className="t-underline">31996</span>
            </Text>
          </Box>
          {!isAuthenticated() ? (
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
          )}
        </S.Tools>
        {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
      </S.Aside>
      <S.Main width={[1, 7 / 10]}>
        {/* <ImgMatch src="pagetitle.jpg" altText="" /> */}
        <Text as="p" fontSize={2} px={4} py={6} mb={0}>
          Welcome to your account. Please find all forms and resources below.
        </Text>

        <Accordion
          title="Forms &amp; Applications"
          fontSize={4}
          bg={theme.colors.background}
          {...AccordionProps}
        >
          <S.Section>
            <FormItems />

            {/* <Box bg="black" width={[1, 2 / 8]} className="image">
              <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
            </Box> */}
          </S.Section>
        </Accordion>

        <Accordion
          title="EDC Docs"
          fontSize={4}
          bg={theme.colors.background}
          {...AccordionProps}
        >
          <S.Section>
            {/* <Box bg="black" width={[1, 2 / 8]} className="image">
              <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
            </Box> */}
          </S.Section>
        </Accordion>

        <Text
          as="a"
          href="https://www.surveymonkey.com/r/LV9F8HP"
          target="_blank"
          fontSize={3}
          bg="black"
          textAlign="center"
          p={6}
          style={{ borderTop: theme.border }}
        >
          take a quick survey
        </Text>

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
                The IRR is comprised of Tribal, BIA, County and State owned
                roads that are within the boundary of the reservation or roads
                that provide access to and from the Reservation. The roads
                program is responsible for grading gravel roads,
                repairing/replacing culverts, and improving surface conditions
                on the Tribal and BIA owned roadways. As of January 2020 we will
                be enacting a new Road Maintenance Program that performs year
                round road maintenance on regularly scheduled days. The
                following is the road maintenance schedule:
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
