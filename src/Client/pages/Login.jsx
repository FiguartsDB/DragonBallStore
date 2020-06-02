import React from 'react'

// Components
import FormLogin from '../components/FormLogin'
import AccountFooter from '../components/AccountFooter'

const Login = () => {
  return (
    <>
      <FormLogin />
      <AccountFooter
        accountText='do not you still have an account'
        accountAction='Sing up'
        accountPage='/singup'
      />
    </>
  )
}

export default Login