import { GraphQLObjectType } from 'graphql'
import User from './queriesGQL/userGQL'

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the root query!',
  fields: () => ({
    ...User
  })
})
