import models from '../database/index'

const graphqlContext = (req, res) => { 
    const { _sid } = req.cookies;
    return {
        res,
        token: _sid,
        model: models.sequelize.models
    }
}

export default graphqlContext