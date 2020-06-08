import { GraphQLObjectType } from 'graphql'
import userMutation from './mutations/userMutation'
import Singup from './mutations/AuthMutation'

const mutationGQL = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'This is root mutationss',
  fields: () => ({
    ...userMutation,
    ...Singup
  }) 
})


export default mutationGQL
