// Footer:
// Global site footer

// ___________________________________________________________________

import * as React from 'react'
import { Link } from 'gatsby'

import { Heading, Text, Box } from '../../elements'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const Year = () => {
  return new Date().getFullYear()
}

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <S.Indent>
        <Box className="marker">&copy;{Year()} • All rights</Box>
      </S.Indent>
      <S.Inner>
        <S.Callout width={[1, 1 / 3]}>Careers callout</S.Callout>
        <S.Nav width={[1, 2 / 3]}>
          <ul>
            <Link to="/">Homepage</Link>
            <Link to="/">About our tribe</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Careers</Link>
          </ul>
          <ul>
            <Link to="/">Tribal Admin</Link>
            <Link to="/">Family &amp; Social Services</Link>
            <Link to="/">EPA</Link>
            <Link to="/">Public Works</Link>
            <Link to="/">Cultural</Link>
            <Link to="/">Public Safety</Link>
          </ul>
          <ul>
            <Link to="/">Tribal Council</Link>
            <Link to="/">Economic Development</Link>
            <Link to="/">Cahuilla Gaming Agency</Link>
            <Link to="/">Tribal Enterprises</Link>
          </ul>
          <Box mt={10} width={1}>
            <Text as="p" fontSize={1}>
              Cahuilla Band of Indians, Anza, CA 92539.
            </Text>
          </Box>
        </S.Nav>
      </S.Inner>
    </S.Footer>
  )
}

export default Footer
