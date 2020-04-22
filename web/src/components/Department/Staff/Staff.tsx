// Department:

// ___________________________________________________________________

import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Text, Box, Flex } from '../../../elements'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Staff: React.FC<DepartmentShape> = ({ pageContext }) => {
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
                  src
                  aspectRatio
                  base64
                  sizes
                  srcSet
                  srcSetWebp
                  srcWebp
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
  const query = data
  const [items, setItems] = useState(query)
  const filterResults = items.people.edges.filter(
    item => item.node.department === 'tribalCouncil'
  )

  console.log('—————|— People —|—————')
  console.log(filterResults)
  console.log(items)

  return (
    <S.Staff>
      {filterResults.map(mate => (
        <S.StaffMember width={[1, 1 / 2]} key={mate.node.id}>
          <Box width={1 / 3}>
            <Img
              fluid={mate.node.image.asset.fluid}
              objectFit="cover"
              objectPosition="50% 50%"
              alt={mate.node.name}
            />
            {/* <ImgMatch src="cahuilla-cactus.jpg" altText={mate.node.name} /> */}
          </Box>
          <Flex width={2 / 3} className="team-member__detail">
            <Text as="p">{mate.node.name}</Text>
            <Text mt={7}>
              {mate.node.title}
              <br />
              {mate.node.seated !== null ? `Seated: ${mate.node.seated}` : null}
            </Text>
          </Flex>
        </S.StaffMember>
      ))}
    </S.Staff>
  )
}

export default Staff