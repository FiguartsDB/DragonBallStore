const User = (sequilize, DataType) => 
  sequilize.define('User', {
	id: {
	  primaryKey: true,
	  allowNull: false,
	  type: DataType.UUID,
	  defaultValue: sequilize.UUIDV4
	},
	name: {
	  type: DataType.STRING,
	  allowNull: false,
	},
	lastname: {
	  type: DataType.STRING,
	  allowNull: false,
	},
	email: {
	  type: DataType.STRING,
	  allowNull: false,
	  unique: true,
	  validate: {
		len: {
		  args: [6, 50],
		  msg: 'Email address must be between 6 and 50 characters in length'
		},
		isEmail: {
		  msg: 'Email address must be valid'
		}
	  }
	},
	password: {
	  type: DataType.STRING,
	  allowNull: false,
	  validate: {
		len: {
		  args: 6,
		  msg: 'Password must be atleast 3 characters in length'
		}
	  }
	},
	avatar: {
	  type: DataType.STRING,
	  allowNull: true
	}
  })


export default User
