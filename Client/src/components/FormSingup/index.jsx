import React from 'react'
import useAuth from '../../hooks/useAuth'

const SignUp = () => { 
  const { handleSubmit, handleChange} = useAuth()

  return (
    <form onSubmit={handleSubmit} name="singup">
      <input type="text" name="name" placeholder="name" onChange={handleChange} />
      <input type="text" name="lastname" placeholder="lastname" onChange={handleChange} />
      <input type="email" name="email" placeholder="email" onChange={handleChange} />
      <input type="password" name="password" placeholder="password" onChange={handleChange} />
      <input type="submit" value="Singup" />
    </form>
  )
}

export default SignUp