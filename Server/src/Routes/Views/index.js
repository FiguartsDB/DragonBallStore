const route = require('express').Router()

route.get('/', (req, res) => {
  res.redirect('/playground')
})


module.exports = route
