import { signToken } from '../../utils/Auth/jwt'
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
                type: GraphQLBoolean
            }
        },
        async resolve(root, args, context) {
            const { model, res } = context()
            const user = await model.User.create({ ...args })
            const token = signToken(user)
            res.cookie('_sid', token, {httpOnly: true})
            return user
        }
    }
}

export default userMutation
