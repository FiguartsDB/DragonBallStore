import bcrypt from 'bcrypt'
import { GraphQLNonNull, GraphQLString } from 'graphql'
import { signToken } from '../../utils/Auth/jwt'
import auth from '../schemas/authSchema'
import { response } from 'express/lib/express'
import { errorType  } from '../../utils/handleGraphErr/handleError'

/**
  * @description Define graphql queries and their resolvers
  * @field getCourses [Course]
  * @field getCourse(id: ID): Course
  * */
const login = {
  login: {
    type: auth,
    args: {
      email: {
        name: 'email',
        type: new GraphQLNonNull(GraphQLString)
      },
      password: {
        name: 'password',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    async resolve(root, args, context){
      const { model, res, req } = context()
      
      const user = await model.User.findOne({ where: { email: args.email } })

      if (!user) 
        throw new Error(errorType.USER_PWD_INCORRECT);
      
      const isEqual = await bcrypt.compare(args.password, user.password);
      if (!isEqual) 
        throw new Error(errorType.USER_PWD_INCORRECT);
        

      const token = await signToken(user)
          
      res.cookie('token', token, { expire: 400000 + Date.now() })
      //tokenExpiration in minutes
      return {
        userId: user.id,
        token: token,
        expireToken: 60,
        name: `${user.name} ${user.lastname}`
      };
    }
  }
}

export default login
