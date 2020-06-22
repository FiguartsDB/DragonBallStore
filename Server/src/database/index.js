import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

import {db} from '../config'

const models = {}

const options = {
  host: db.host,
  dialect: db.dialect || 'postgres',
  define: {
	underscored: true
  }
}

const sequelize = new Sequelize(db.name, db.user, db.pwd, options)

// Get model entities
const direntities = path.resolve(__dirname, 'entities')
fs.readdirSync(direntities)
  .filter(file => file.slice(-3) === '.js' )
  .forEach(file => {
    const model = sequelize.import(path.join(direntities, file))
    models[model] = model
  });

// Associate Entities
Object.keys(models).forEach( modelName => {
  if('associate' in models[modelName])
	  models[modelName].associate(models)
})

models.sequelize = sequelize



export default models
