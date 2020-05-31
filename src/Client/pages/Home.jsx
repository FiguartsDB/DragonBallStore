import React from 'react'
import { useQuery } from '@apollo/react-hooks'

//Queries
import { GET_USERS } from '../api/User'

const Home = () => {
  return (
	<>
	  <h1>Home</h1>
	  <UserData />
	</>
  )
}


const UserData = () => {
  const { loading, error, data } = useQuery(GET_USERS)
  let isLoading = false
  let isError = false

  if(loading) isLoading = <p>Loading ...</p>
  if(error) isError = <p>Error</p>

	return (
	  <>
	  {isLoading && isLoading}
	  {isError && isError}
	  {data && data.getUsers.map( user => (
		  <p key={user.id}>{`${user.name} ${user.lastname}`}</p>
	  ))}
	  </>
	)
}


export default Home; 
