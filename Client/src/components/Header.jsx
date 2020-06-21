import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import userContext from '../context/userContext'

const excludeItems = ['/singup', '/login']

const Header = () => { 
  const [menuItem, setMenuItem] = useState(false)
  const { user } = useContext(userContext)
  const location = useLocation()
  let $ul = null
  let $link = null

  // UseEffect to check location for show items or not
  useEffect(() =>
    excludeItems.includes(location.pathname) ? setMenuItem(false) : setMenuItem(true),
    [location.pathname])
    
  if (menuItem) { 
    if (!user)
      $link = <li><Link to="/login"> Login </Link></li>
    
    $ul = <>
      <li>item 1</li>
      <li>item 2</li>
      <li>item 3</li>
      {user && <li>{user.name}</li>}
    </>
  }

  status = <li>hello</li>
  return (
    <header>
      <Link to="/"> Home </Link>
      <ul>
        {$ul}
        {$link}
      </ul>
    </header>
  )
}
export default Header;