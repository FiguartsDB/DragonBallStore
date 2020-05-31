import { gql } from 'apollo-boost'

const GET_USERS = gql`
{
 getUsers{
    id
    name
    lastname
  }
}
` 

const GET_USER = gql`
query getUser($usserId: ID!){
  getUser(id: $userId){
    name
    lastname
    avatar
    email
  }
}
`

const ADD_USER = `
mutation addUser(
  $name: String!
  $lastname: String! 
  $email: String! 
  $password: String! 
  $avatar: String!){
    createUser(
      name: $name 
      lastname: $lastname 
      email: $email 
      password: $password 
      avatar: $avatar){
        name
        lastname
        email
        avatar
        validated
    }
}`


export {
  GET_USERS,
  GET_USER,
  ADD_USER
}
