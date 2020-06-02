import express from 'express'
import cookieParser from 'cookie-parser'
import graphqlHTTP from 'express-graphql'
import { default as expressPlayground} from 'graphql-playground-middleware-express'
import cors from 'cors'
import { port, env } from '../config'
import schema from '../graphql'
import context from '../graphql/context'
import Auth from '../Routes/api/auth'
import viewRoute from '../Routes/Views'

const app = express()

//Middelwares
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// settin up app
app.set('port', port)

// Routes
app.use('/', viewRoute)
app.use('/auth', Auth)

// Grapghql 
app.use('/api', graphqlHTTP( (req, res) => ({
    schema,
    context: () => context(req, res)
  })
))

// Graphql playgrond
if(!env)
app.get('/playground', expressPlayground({ endpoint: '/api' }));

export default app
