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
  const pageDep = pageContext.page.department

  // Set bio context
  const [bio, setBio] = useState(pageContext.page.staff[0])
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
        className={`${isModalOpen ? 'nav-bg--open' : 'nav-bg--closed'}`}
      >
        {isModalOpen && <Bio bio={bio} setModalOpen={setModalOpen} />}
      </Overlay>
      <S.Staff>
        {pageContext.page.staff.map(person => (
          <S.StaffMember width={[1, 1 / 2]} key={person.id}>
            <Box width={1 / 3}>
              {person.image && (
                <Img
                  fluid={person.image.asset.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={person.name}
                />
              )}
            </Box>
            <Flex width={2 / 3} className="team-member__detail">
              <Text as="p" fontSize={2} mb={0}>
                {person.name && person.name}
              </Text>

              {person.bio && (
                <Box onClick={toggleModal}>
                  <Text className="bio-link" onClick={() => setBio(person)}>
                    Read Bio
                  </Text>
                </Box>
              )}

              <Text mt={7}>
                {person.title && person.title}
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
