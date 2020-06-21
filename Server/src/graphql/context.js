import models from '../database/index'

const graphqlContext = (req, res) => ({
    req,
    res,
    model: models.sequelize.models
})

export default graphqlContext