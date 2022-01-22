const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const path = require('path')

const DIR_BASE = path.join(__dirname, 'build');
const PORT = process.env.CLIENT_PORT || 8080

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
		host: '0.0.0.0',
		port: PORT,
        contentBase: DIR_BASE,
        publicPath: '/',
        historyApiFallback: true, // save history routes
    }
})
