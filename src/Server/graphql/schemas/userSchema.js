import { 
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLID
  } from 'graphql'

// Mutation definition
export const userInput = new GraphQLInputObjectType({
  name: 'userIntpu',
  fields: {
	name: { type: new GraphQLNonNull(GraphQLString) },
	lastname: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },	
    password: { type: new GraphQLNonNull(GraphQLString) },
    avatar: { type: GraphQLString },
    validated: { type: new GraphQLNonNull(GraphQLBoolean) }
  }
})


// Define Custom type schema
const User = new GraphQLObjectType({
    name: 'user',
    fields: {
      id: {
        type: new GraphQLNonNull(GraphQLID),
        resolve(user){
          return  user.id
        }
      },
      name: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(user){
          return user.name
        }
      },
      lastname: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(user){
          return user.lastname
        }
      },
      email: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(user){
          return user.email
        }
      },	
      password: {
        type: new GraphQLNonNull(GraphQLString),
        resolve(user){
          return user.password
        }
      },
      avatar: {
        type: GraphQLString,
        resolve(user){
          return user.avatar
        }
      },
      validated: {
        type: new GraphQLNonNull(GraphQLBoolean),
        resolve(user){
          return user.validated
        }
      }
    }
})

export default User
