import React from 'react'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
  background-color: ${({theme}) => theme.white};
  color: ${({theme}) => theme.primary};
  font-size: .7rem;
  padding: .2rem .7rem;
  margin: ${props => props.margin};
  width: ${props => props.width};
  border: 1px solid ${({theme}) => theme.primary};
  border-raduis: 4px;
  cursor: pointer;

  ${(props) => props.primary && css`
	background-color: ${props.theme.primary};
	color: ${props.theme.white};
	box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.4);
  `}

  &:hover{
	transform: scale(1.1);
	transition: all .5s ease;
  }
`

const Button = ({width, primary, children}) => 
  <StyledButton 
	primary={primary}
	width={width}
  >
	{children}
  </StyledButton>

StyledButton.defaultProps = {
  primary: false,
  margin: '1rem',
  width: '70px'
}

export default Button
