import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks';

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


const ADD_USER = `
mutation addUser($name: String! $lastname: String! $email: String! $password: String! $avatar: String!){
  createUser(name: $name lastname: $lastname email: $email password: $password avatar: $avatar){
	name
    lastname
    email
    avatar
    validated
  }
}`


export {
  GET_USERS,
  ADD_USER
}
