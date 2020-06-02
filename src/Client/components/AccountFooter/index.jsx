import React from 'react'
import { Link } from 'react-router-dom'

const AccountFooter = ({ accountText, accountAction, accountPage}) => (
    <div>
      <p>{accountText}</p>
      <Link to={accountPage}>{accountAction}</Link>
    </div>
)


export default AccountFooter