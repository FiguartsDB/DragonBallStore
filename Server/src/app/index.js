import express from 'express'
import cookieParser from 'cookie-parser'
import graphqlHTTP from 'express-graphql'
import { default as expressPlayground} from 'graphql-playground-middleware-express'
import cors from 'cors'
import auth from '../middleware/auth'
import { port, env } from '../config'
import schema from '../graphql'
import context from '../graphql/context'
import viewRoute from '../Routes/Views'
import parseError from '../utils/handleGraphErr/handleError'

const app = express()

//Middelwares
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(auth())

// settin up app
app.set('port', port)

// Routes
app.use('/', viewRoute)

// Grapghql 
app.use('/api', graphqlHTTP( (req, res) => ({
    schema,
	customFormatErrorFn: error => ({...parseError(error.message)}),
    context: () => context(req, res)
  })
))

// Graphql playgrond
if(!env)
  app.get('/playground', expressPlayground({ endpoint: '/api' }));

export default app
