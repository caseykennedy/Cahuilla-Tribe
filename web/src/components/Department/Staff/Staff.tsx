// Staff members:

// ___________________________________________________________________

import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Text, Box, Flex } from '../../../elements'

import Overlay from '../../Overlay'
import Bio from '../Bio'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Staff: React.FC<{
  pageContext: DepartmentShape
  mainRef?: React.RefObject<HTMLDivElement>
}> = ({ pageContext, mainRef }) => {
  const data: PeopleShape = useStaticQuery(graphql`
    query PeopleQuery {
      people: allSanityPerson {
        edges {
          node {
            cell
            department
            email
            fax
            id
            image {
              asset {
                fluid(maxWidth: 1080) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            name
            seated
            telephone
            title
            slug {
              current
            }
            _rawBio
            bio {
              _key
              _type
              style
              list
            }
          }
        }
      }
    }
  `)
  const pageDep = pageContext.page.department
  const filteredPeople = data.people.edges.filter(
    person =>
      // tslint:disable-next-line: triple-equals
      pageDep == person.node.department[0] ||
      // tslint:disable-next-line: triple-equals
      pageDep == person.node.department[1]
  )
  // console.log('—————|— People —|—————')
  // console.log(pageDep)
  // console.log(data.people)

  // Set bio context
  const [bio, setBio] = useState(data.people.edges[0].node)
  // Navigation toggle
  const [isModalOpen, setModalOpen] = useState(false)
  const toggleModal = () => setModalOpen(!isModalOpen)
  return (
    <>
      <Overlay
        id="overlay-root"
        root="root"
        isOpen={isModalOpen}
        handleExit={() => setModalOpen(false)}
        mainRef={mainRef}
        className={`nav-bg ${isModalOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        {isModalOpen && <Bio bio={bio} setModalOpen={setModalOpen} />}
      </Overlay>
      <S.Staff>
        {filteredPeople.map(({ node: person }) => (
          <S.StaffMember width={[1, 1 / 2]} key={person.id}>
            <Box width={1 / 3}>
              <Img
                fluid={person.image.asset.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt={person.name}
              />
            </Box>
            <Flex width={2 / 3} className="team-member__detail">
              <Text as="p" fontSize={2} mb={0}>
                {person.name}
              </Text>

              {person.bio && (
                <Box onClick={toggleModal}>
                  <Text
                    fontSize={1}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setBio(person)}
                  >
                    Read Bio
                  </Text>
                </Box>
              )}

              <Text mt={7}>
                {person.title}
                <br />
                {person.seated ? `Seated: ${person.seated}` : null}
              </Text>
            </Flex>
          </S.StaffMember>
        ))}
      </S.Staff>
    </>
  )
}

export default Staff
