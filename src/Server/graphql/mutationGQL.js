import { GraphQLObjectType } from 'graphql'
import userMutation from './mutations/userMutation'

const mutationGQL = new GraphQLObjectType({
  name: 'RootMutation',
  description: 'This is root mutationss',
  fields: () => ({
    ...userMutation
  }) 
})


export default mutationGQL
