import {
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql'
import user from '../schemas/userSchema'

const userMutation = {
    createUser: {
        type: user,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString)
            },
            lastname: {
                type: new GraphQLNonNull(GraphQLString)
            },
            email: {
                type: new GraphQLNonNull(GraphQLString)
            },
            password: {
                type: new GraphQLNonNull(GraphQLString)
            },
            avatar: {
                type: GraphQLString
            },
            validated: {
                type: new GraphQLNonNull(GraphQLBoolean)
            }
        },
        resolve(root, args) { 
            return {
                statusCode: 200,
                message: "User creaded succesfull",
                result: args
            }
        }
    }
}

export default userMutation
