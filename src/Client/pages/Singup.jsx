import React from 'react'

// Components
import FormSingup from '../components/FormSingup'
import AccountFooter from '../components/AccountFooter'

const Singup = () => {
  return (
    <>
      <FormSingup />
      <AccountFooter
        accountText='Are you already have an account?'
        accountAction='login'
        accountPage='/login'
      />
    </>
  )
}

export default Singup