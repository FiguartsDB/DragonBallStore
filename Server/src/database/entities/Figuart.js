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
	price: {
	  type: DataType.DECIMAL(10, 2),
	  allowNull: false,
	  defaultValue: 0.00
	},
	inStore: {
	  type: DataType.INTEGER,
	  allowNull: true
	},
	status: {
	  type: DataType.BOOLEAN,
	  allowNull: true,
	  defaultValue: true
	}
  })


export default User
