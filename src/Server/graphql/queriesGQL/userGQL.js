import { GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql'
import { isTokenValid } from '../../utils/Auth/jwt'
import User from '../schemas/userSchema'

/**
  * @description Define graphql queries and their resolvers
  * @field getCourses [Course]
  * @field getCourse(id: ID): Course
  * */
const users = {
  getUsers: {
	type: new GraphQLList(User),
		async resolve(root, args, context) {
			const { model, token } = context()
			const { error } = await isTokenValid(token)
			if (error) {
				throw new Error(error);
			}
			
			return model.User.findAll()
	}
  },
  getUser: {
	type: User,
	args: {
	  id: {
		name: 'id',
		type: GraphQLID
		}
	},
	async resolve(root, args, context){
		const { model, token } = context()
		const { error } = await isTokenValid(token)
		if (error) 
			throw new Error(error);
		
		return model.User.findOne({ where: { id: args.id } })
	}
  }
}

export default users
