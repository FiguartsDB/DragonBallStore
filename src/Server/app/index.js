import  express from 'express'
import cors from 'cors'
import { port } from '../config'



import figuartsRoutes from '../Routes/api/figures'
import viewRoute from '../Routes/Views'

const app = express()

//Middelwares
app.use(cors())
app.use(express.json())

// settin up app
app.set('port', port)


// Routes
app.use('/', viewRoute)
app.use('/api/figuart', figuartsRoutes)

export default app
