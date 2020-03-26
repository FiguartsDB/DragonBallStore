const express = require('express')
const { port } = require('../config')

const app = express()

//Middelwares
app.use(express.json())

// settin up app
app.set('port', port)

module.exports = app