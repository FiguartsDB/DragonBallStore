const route = require('express').Router()

route.get('/', (req, res) => {
  res.send('Hola esta es la vista inicial')
})


module.exports = route
