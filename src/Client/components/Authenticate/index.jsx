import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Utils
import { getUserToken } from '../../Utils/Auth'

const AuthComponent = (props) => { 
  const history = useHistory()

  useEffect(() => { 
    if (!getUserToken())
      history.push('/')
  }, []);

  return (
    <>
      {props.children}
    </>
  )
}

export default AuthComponent