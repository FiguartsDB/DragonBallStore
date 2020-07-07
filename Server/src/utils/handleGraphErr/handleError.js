const errorType = {
  USER_PWD_INCORRECT: 'USER_PWD_INCORRECT',
  USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
  SERVER_ERROR: 'SERVER_ERROR'
}

const errorMessage = {
  USER_PWD_INCORRECT: {
	message: 'User / password are incorrect.',
	statusCode: 401
  },
  USER_ALREADY_EXISTS: {
	message: 'User is already exists.',
	statusCode: 403
  },
  SERVER_ERROR: {
	message: 'Server error.',
	statusCode: 500
  }
}


// Get Error messate type
const getError = errorName => errorMessage[errorName]

export default getError
export { errorType }
