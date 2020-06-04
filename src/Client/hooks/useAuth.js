import { useState, useContext } from 'react'
import { login, singup } from '../Services/Auth'
import { useHistory } from 'react-router-dom'

import { setLocalStorage } from '../Utils/Auth'

// Context
import userContext from '../context/userContext'

const useAuth = () => { 
  const { setUser } = useContext(userContext)
  const [info, setInfo] = useState({})
  const history = useHistory()

  const handleChange = (evt) => {
    setInfo({
      ...info,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    let userInfo
    if (evt.target.name === 'login') 
      userInfo = await login(info)
    else 
      userInfo = await singup(info)
    
    setLocalStorage('sub', userInfo.result.info)
    setUser(userInfo.result.info)
    history.push('/dashboard')
  }

  return {handleChange, handleSubmit}
}

export default useAuth