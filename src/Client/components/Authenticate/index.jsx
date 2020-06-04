import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// Context
import userContext from '../../context/userContext'

const AuthComponent = (props) => { 
  const { user } = useContext(userContext)
  const history = useHistory()

  useEffect(() => { 
    if (!user)
      history.push('/')
  }, []);

  return (
    <>
      {props.children}
    </>
  )
}

export default AuthComponent