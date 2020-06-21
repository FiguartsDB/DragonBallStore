import { GraphQLObjectType } from 'graphql'
import User from './queriesGQL/userGQL'
import Login from './queriesGQL/loginGQL'

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the root query!',
  fields: () => ({
    ...User,
    ...Login
  })
})
