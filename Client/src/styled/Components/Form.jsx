import React from 'react'
import styled from 'styled-components'


const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-shadow: 0 .5rem 1.5rem rgba(0,0,0,.4);
  width: 50%;
  margin: auto;
  border-radius: ${props => props.radius};

  & > input {
	border: none;
    background: hsl(0 0% 93%);
	border-radius: ${props => props.radius};
	padding: .4rem 1rem;
	margin: .5rem;
  }
`


export default StyledForm

