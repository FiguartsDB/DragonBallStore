import React, {useState} from 'react'
import { getLocalStorage } from '../Utils/Auth'
const Context = React.createContext()

const UserContextProvider = ({ children }) => {
  const userInfo = getLocalStorage('sub')
  const [user, setUser] = useState(userInfo)

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export default Context
export { UserContextProvider }