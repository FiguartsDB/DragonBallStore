const route = require('express').Router()

route.get('/', (req, res) => {
  res.send('Figuarts list')
})

route.get('/goku', (req, res) => {
  console.log(req.saluda)
  res.json({status: 200, result: "Hola soy goku"})
})


route.post('/', (req, res) => {
  res.json({status: 200, message: 'figure created'})
})

module.exports = route
