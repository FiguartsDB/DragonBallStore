import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props => props.theme.primary)};

  &:hover{
	font-weight: bold;
  }
`

const CustomLink = ({to, children}) => <StyledLink to={to}>{children}</StyledLink>

export default CustomLink
