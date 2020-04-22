// Previous / Next pre-footer

// ___________________________________________________________________

import React, { useState } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import { Text, Heading, Box, Flex } from '../../../elements'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const PrevNext: React.FC<DepartmentShape> = ({ pageContext }) => {
  const page = pageContext.page
  const prev = pageContext.prev
  const next = pageContext.next

  let path
  if (!page.government) {
    path = 'departments'
  } else {
    path = 'government'
  }

  console.log('—————|— Prev / Next —|—————')
  console.log(prev)
  console.log(next)
  return (
    <S.PrevNext width={1}>
      {prev !== null ? (
        <S.Button to={`/${path}/${prev.slug.current}`}>
          {prev.pageTitle}
        </S.Button>
      ) : null}
      {next !== null ? (
        <S.Button to={`/${path}/${next.slug.current}`}>
          {next.pageTitle}
        </S.Button>
      ) : null}
    </S.PrevNext>
  )
}

export default PrevNext

{
  /* <Box className="image" width={[1, 6 / 12]}>
  {page.image !== null ? (
    <Img
      fluid={page.image.asset.fluid}
      objectFit="cover"
      objectPosition="50% 50%"
      alt={page.pageTitle}
    />
  ) : null}
</Box> */
}
