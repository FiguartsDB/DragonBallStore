import React from 'react'
import useAuth from '../../hooks/useAuth'

const Login = () => { 
  const { handleSubmit, handleChange } = useAuth()
  
  return (
    <form onSubmit={handleSubmit} name="login">
      <input type="email" name="email" onChange={handleChange}/>
      <input type="password" name="password" onChange={handleChange}/>
      <input type="submit" value="Login" />
    </form>
  )
}

export default Login