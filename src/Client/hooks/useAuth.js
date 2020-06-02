import { useContext, useState } from 'react'
import {login, singup} from '../Services/Auth'

// Context
import UserContext from '../context/userContext'

const useAuth = () => { 
  const [info, setInfo] = useState({})
  const { setUser } = useContext(UserContext)

  const handleChange = (evt) => {
    setInfo({
      ...info,
      [evt.target.name]: evt.target.value
    })
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    if (evt.target.name === 'login') {
      const { result } = await login(info)
      setUser(result)
    } else { 
      const { result } = await singup(info)
      setUser(result)
    }
  }

  return {handleChange, handleSubmit}
}

export default useAuth