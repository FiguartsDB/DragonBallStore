import Cryptr from 'cryptr'

const cryptr = new Cryptr('myTotalySecretKey')

// Model relations
const Order = {
  foreignKey: {
	name: 'paymentId',
	field: 'payment_id'
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

const PaymentCard = (sequilize, DataType) => {
  const Payment = sequilize.define('PaymentCard', {
	id: {
	  primaryKey: true,
	  allowNull: false,
	  type: DataType.UUID,
	  defaultValue: DataType.UUIDV4()
	},
	name: {
	  type: DataType.STRING,
	  allowNull: false
	},
	card: {
	  type: DataType.STRING(16),
	  allowNull: false
	},
	expires: {
	  type: DataType.DATEONLY,
	  allowNull: false
	},
	cvv: {
	  type: DataType.STRING(3),
	  allowNull: false
	}
  },
  {
	hooks: {
	  beforeCreate: cardInfo => {
		cardInfo.name = cryptr.encrypt(cardInfo.name)
		cardInfo.card = cryptr.encrypt(cardInfo.card)
		cardInfo.cvv = cryptr.encrypt(cardInfo.cvv)
	  }
	}
  })

  // Associate foreign keys
  Payment.associate = model => {
	Payment.hasMany(model.Order, Order)
	Payment.belongsTo(model.User, User)
  }

  return Payment
}

export default PaymentCard
