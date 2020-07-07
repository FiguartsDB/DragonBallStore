// Model relations
const Order = {
  foreignKey: {
	name: 'shipingAdressId',
	field: 'shipingAdress_id'
  },
  as: 'orders'
}

const User = {
  foreignKey: {
	name: 'userId',
	field: 'user_id'
  },
  as: 'users'
}

const shipingAdressModel = (sequilize, DataType) => {
  const shipingAdress = sequilize.define('ShipingAdress', {
	id: {
	  primaryKey: true,
	  allowNull: false,
	  type: DataType.UUID,
	  defaultValue: DataType.UUIDV4()
	},
	address: {
	  type: DataType.STRING,
	  allowNull: false
	},
	int: {
	  type: DataType.STRING,
	  allowNull: false
	},
	ext: {
	  type: DataType.STRING,
	  allowNull: true
	},
	cp: {
	  type: DataType.STRING,
	  allowNull: false
	}
  })

  shipingAdress.associate = model => {
	shipingAdress.hasMany(model.Order, Order)
	shipingAdress.belongsTo(model.User, User)
  }

  return shipingAdress
}


export default shipingAdressModel
