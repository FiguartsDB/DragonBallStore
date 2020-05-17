import { gql } from 'apollo-boost'

const GET_USERS = gql`
query getUsers($userId: ID!){
  getUsers{
	id
	name
	lastname
  }

  getUser(id: $userId){
	name
	lastname
	avatar
	email
  }
}
` 


export {
  GET_USERS,
}
