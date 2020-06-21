import { signToken } from '../../utils/Auth/jwt'
import {
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql'
import auth from '../schemas/authSchema'

const singupMutation = {
    singup: {
        type: auth,
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
          const { model } = context()
            
          const user = await model.User.create({ ...args })
          const token = await signToken(user)
          
          res.cookie('_sid', token, { expire: 400000 + Date.now() })
          //tokenExpiration in minutes
          return {
            userId: user.id,
            expireToken: 60,
            name: `${user.name} ${user.lastname}`
          };
        }
    }
}

export default singupMutation
