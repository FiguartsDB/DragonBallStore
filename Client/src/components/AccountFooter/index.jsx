import React from 'react'

//Styled Components
import Link from '@styledComponents/Link'
import FormFooter from '@styledComponents/FormFooter'

const AccountFooter = ({ accountText, accountAction, accountPage}) => (
    <FormFooter>
      <p>{accountText}</p>
      <Link to={accountPage}>{accountAction}</Link>
    </FormFooter>
)


export default AccountFooter
