import { GraphQLSchema  } from 'graphql'
import queryGQL from './queryGQL'
import mutationGQL from './mutationGQL'

export default new GraphQLSchema({
  query: queryGQL,
  mutation: mutationGQL
})


