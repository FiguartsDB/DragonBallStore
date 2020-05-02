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
	resolve(root, args){
		return [
			{
				id: '1',
				name: 'Edgar',
				lastname: 'Figueroa',
				email: 'edgar.figueora@greeagent.com',
				password: '123',
				validated: false
			},
			{
				id: '2',
				name: 'Nancy',
				lastname: 'De anda',
				email: 'Nancy.de.anda@gmail.com',
				password: '123',
				avatar: 'avatar-url',
				validated: true
			},
			{
				id: '3',
				name: 'Rafael',
				lastname: 'Lopez',
				email: 'rafa@gmail.com',
				password: '101010',
				validated: true
			}
		]
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
	resolve(root, args){
	  return {
		id: '1',
		name: 'graphql',
		lastname: 'edgar',
		email: 'basic graphql',
		password: '123',
		avatar: 'avatar',
		validated: true
	  }
	}
  }
}

export default users
