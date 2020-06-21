const User = (sequilize, DataType) => 
  sequilize.define('Figuart', {
	id: {
	  primaryKey: true,
	  allowNull: false,
	  type: DataType.UUID,
	  defaultValue: DataType.UUIDV4()
	},
	name: {
	  type: DataType.STRING,
	  allowNull: false,
	},
	picture: {
	  type: DataType.STRING,
	  allowNull: true
	},
	inStore: {
	  type: DataType.INTEGER,
	  allowNull: true
	}
  })


export default User
