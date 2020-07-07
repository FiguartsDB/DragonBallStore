const route = require('express').Router()

route.get('/', (req, res) => {
  debugger
  res.redirect('/playground')
})


module.exports = route
