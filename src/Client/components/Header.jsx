import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <ul>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
    </ul>
    <Link to="/login"> Login </Link>
  </header>
)
export default Header;