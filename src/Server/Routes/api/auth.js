import bcrypt from 'bcrypt'
import { signToken } from '../../utils/Auth/jwt'
import db from '../../database'


const route = require('express').Router()

route.post('/', async (req, res, next) => {
  const { password, email } = req.body
  const user = await db.sequelize.models.User.findOne({ where: { email: email } })
  
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ error: 'User/passsword are incorrect' })
  
  const token = signToken(user)
  res.cookie('_sid', token, { httpOnly: true })
  res.status(200).json({
    message: 'Login success',
    result: { sub: user.id, name: `${user.name} ${user.lastname}` }
  })
  res.end()
})

export default route
