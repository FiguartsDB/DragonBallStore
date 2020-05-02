import  express from 'express'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'
import { port } from '../config'
import schema from '../graphql'
import figuartsRoutes from '../Routes/api/figures'
import viewRoute from '../Routes/Views'

const app = express()

//Middelwares
app.use(cors())
app.use(express.json())

app.use('/graphbatch', graphqlHTTP({
  schema,
  pretty: true,
  graphiql: true
}))

// settin up app
app.set('port', port)


app.use('/', viewRoute)
app.use('/api/figuart', figuartsRoutes)

export default app
