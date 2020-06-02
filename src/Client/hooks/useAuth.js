import { useState } from 'react'
import { login, singup } from '../Services/Auth'
import { setUserStorage } from '../Utils/Auth'
import { useHistory } from 'react-router-dom'

const useAuth = () => { 
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
    let result
    if (evt.target.name === 'login') 
      result = await login(info)
    else 
      result = await singup(info)
    
    setUserStorage(result)
    history.push('/dashboard')
  }

  return {handleChange, handleSubmit}
}

export default useAuth