import { signToken } from '../../utils/Auth/jwt'
import {
    GraphQLString,
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql'
import auth from '../schemas/authSchema'
import { errorType } from '../../utils/handleGraphErr/handleError'

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
		  try{
            const { model } = context()
            
	        const user = await model.User.create({ ...args })
	        const token = await signToken(user)
          
		    //tokenExpiration in minutes
		    return {
			  userId: user.id,
			  token: token,
			  expireToken: 60,
			  name: `${user.name} ${user.lastname}`
			};

		  }catch(error){
			if(error.message === 'Validation error')
			  throw new Error(errorType.USER_ALREADY_EXISTS)

			throw new Error(errorType.SERVER_ERROR)
			  
		  }
        }
    }
}

export default singupMutation
