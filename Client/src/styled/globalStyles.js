import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body{
	margin: 0;
	padding: 0;
  }

  .error-message{
	background-color: ${props => props.theme.danger};
	border-radius: ${props => props.theme.radius};
	color: ${props => props.theme.white};
	text-align: center;
	flex-basis: 90%;
	margin: 3px .6rem;
	padding: 0.2rem 0;
  }
`
