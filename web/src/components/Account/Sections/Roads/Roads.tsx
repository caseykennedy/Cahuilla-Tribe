// Roads:

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { Box, Flex, Text } from '../../../../elements'
import Accordion from '../../../Accordion'

import * as S from './styles.scss'
import theme from '../../../../../config/theme'

import BlockContent from '../../../BlockContent'

// ___________________________________________________________________

type QueryShape = {
  allSanityRoadsAndTransport: {
    edges: {
      node: {
        _rawBlockContent: string
        alert: {
          _rawBlockContent: string
          title: string
        }[]
        lead: string
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

const Roads: React.FC = () => {
  const data: QueryShape = useStaticQuery(graphql`
    query RoadsQuery {
      allSanityRoadsAndTransport {
        edges {
          node {
            _rawBlockContent
            alert {
              _rawBlockContent
              title
            }
            lead
          }
        }
      }
    }
  `)
  const roads = data.allSanityRoadsAndTransport.edges[0].node
  return (
    <Accordion
      title="Roads &amp; Transportation"
      fontSize={4}
      bg={theme.colors.background}
      {...AccordionProps}
    >
      <S.Section>
        <Flex className="content">
          <Text as="p" fontSize={3}>
            {roads.lead}
          </Text>

          {roads._rawBlockContent && (
            <BlockContent blocks={roads._rawBlockContent || []} />
          )}

          {roads.alert.map((alert, key) => (
            <Box className="maint-date" key={key}>
              <Text as="p" fontSize={2}>
                {alert.title}
              </Text>
              {alert._rawBlockContent && (
                <BlockContent blocks={alert._rawBlockContent || []} />
              )}
            </Box>
          ))}
        </Flex>
      </S.Section>
    </Accordion>
  )
}

export default Roads
