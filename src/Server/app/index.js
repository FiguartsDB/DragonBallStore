const express = require('express')
const { port } = require('../config')
const figuartsRoutes = require('../Routes/api/figures')
const viewRoute = require('../Routes/Views')

const app = express()

//Middelwares
app.use(express.json())

// settin up app
app.set('port', port)


// Routes
app.use('/', viewRoute)
app.use('/api/figuart', figuartsRoutes)

module.exports = app
