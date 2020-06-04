import { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks';

// Context
import userContext from '../context/userContext'

//Graphql queries
import { GET_USER } from '../Services/Graphql/User'

const useUser = () => { 
  const { setUser } = useContext(userContext)
  const { loading, error, data } = useQuery(GET_USER, {
      variables: { userId: user.sub }
  })
  
  console.log(data, GET_USER, user, error)
  setUser(data)

  return {loading, error}
}

export default useUser