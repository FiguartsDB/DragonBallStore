import React from 'react'
import { useQuery } from '@apollo/react-hooks'

//Queries
import { GET_USERS } from '../api/User'

const Home = () => {
  return (
	<>
	  <h1>Home</h1>
	  <UserData userId={3}/>
	</>
  )
}


const UserData = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USERS, {
	variables: { userId: 3}
  })
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
	  <h2>Indivbidual usr</h2>
	  {data && (
		<div>
		  <p>{`${data.getUser.name} ${data.getUser.lastname}`}</p>
		  <p>{data.getUser.email}</p>
		  <p>{data.getUser.avatar}</p>
		</div>
	  )}
	  </>
	)
}


export default Home; 
