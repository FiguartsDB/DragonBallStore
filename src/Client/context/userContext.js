import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { getLocalStorage } from '../Utils/Auth'
import { GET_USER } from '../Services/Graphql/User'
const Context = React.createContext()

const UserContextProvider = ({ children }) => {
  const [getUser, { loading, data }] = useLazyQuery(GET_USER);
  const userInfo = getLocalStorage('sub')
  const [user, setUser] = useState(userInfo)

  useEffect(() => { 
    if (user && (user.userId || user.id)) {
      const id = user.userId || user.id
      getUser({ variables: { userId: id } })
      
      if (data && data.getUser)
        setUser(data.getUser)
    }
  }, [data, user])

  return (
    <Context.Provider value={{ user, setUser }}>
      {children}
    </Context.Provider>
  )
}

export default Context
export { UserContextProvider }