import React from 'react'
import useAuth from '../../hooks/useAuth'

// Styled components
import Form from '@styledComponents/Form'
import Button from '@styledComponents/Button'

const Login = () => { 
  const { errInfo, handleSubmit, handleChange } = useAuth()
  let errorMessage = null;
  
  if(errInfo) {
	errorMessage = <p className="error-message">{errInfo}</p>
  }

  return (
    <Form onSubmit={handleSubmit} name="login">
	  {errorMessage}
	  <input type="email" name="email" placeholder="email"  onChange={handleChange}/>
      <input type="password" name="password" placeholder="passworda"  onChange={handleChange}/>
	  <Button type="submit" width="100%">Login</Button>
    </Form>
  )
}

export default Login
