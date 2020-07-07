const OrderModel = (sequilize, DataType) =>
  sequilize.define('Order', {
	id: {
	  primaryKey: true,
	  allowNull: false,
	  type: DataType.UUID,
	  defaultValue: DataType.UUIDV4()
	},
	figuarts: {
	  type: DataType.ARRAY(DataType.STRING),
	  allowNull: false
	},
	shiping: {
	  type: DataType.JSONB,
	  allowNull: true
	},
	payment: {
	  type: DataType.JSONB,
	  allowNull: true
	},
	total: {
	  type: DataType.DECIMAL(10, 2),
	  allowNull: false
	}
  })

export default OrderModel
