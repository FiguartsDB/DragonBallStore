import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql'
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
			const { model, req } = context()
			
			if (!req.isAuth)
				throw new Error('Unauthenticated!');
			
			return model.User.findAll()
	}
  },
	getUser: {
		
	type: User,
	args: {
	  id: {
			name: 'id',
			type: new GraphQLNonNull(GraphQLID)
		}
	},
	async resolve(root, args, context){
		const { model, req } = context()

		if (!req.isAuth)
			throw new Error('Unauthenticated!');
		console.log(req)
		return model.User.findOne({ where: { id: args.id } })
	}
  }
}

export default users
