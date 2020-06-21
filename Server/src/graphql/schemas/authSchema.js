import { 
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

// Define Custom type schema
const Auth = new GraphQLObjectType({
  name: 'Auth',
  fields: {
    userId: {
      type:  new GraphQLNonNull(GraphQLID),
      resolve(auth){
        return  auth.userId
      }
    },
    token: {
      type:  new GraphQLNonNull(GraphQLString),
      resolve(auth){
        return  auth.token
      }
    },
    expiresToken: {
      type:  new GraphQLNonNull(GraphQLString),
      resolve(auth){
        return  auth.expiresToken
      }
    },
    name: {
      type: GraphQLString,
      resolve(auth){
        return auth.name
      }
    }
  }
})

export default Auth
