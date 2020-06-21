import { useState, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useLazyQuery } from '@apollo/react-hooks'
import { setLocalStorage } from '../Utils/Auth'

import { LOGIN } from '../Services/Graphql/Auth'
import { GET_USER } from '../Services/Graphql/User/index'
// Context
import userContext from '../context/userContext'

const useAuth = () => { 
  const { setUser } = useContext(userContext)
  const [info, setInfo] = useState({})
  const [getAuth, { loading, data }] = useLazyQuery(LOGIN);
  const history = useHistory()

  const handleChange = (evt) => {
    setInfo({
      ...info,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    if (evt.target.name === 'login')
      getAuth({ variables: {email: info.email , password: info.password}})
    
    // manage request grapql data
    if (data && (data.login || data.singup)) { 
      const userInfo = data.login || data.singup
      setLocalStorage('sub', userInfo)
      setUser(userInfo)
      history.push('/dashboard')
    }
  }

  return {handleChange, handleSubmit}
}

export default useAuth