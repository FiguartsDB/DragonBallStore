import { gql } from 'apollo-boost'

const LOGIN = gql`
  query login($email: String!, $password: String!){
    login(email: $email password: $password){
      userId
      name
      token
    }
  }
` 

export { LOGIN }