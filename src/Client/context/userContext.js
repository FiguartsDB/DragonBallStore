import React, {useState} from 'react'

const Context = React.createContext(false)

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export default Context