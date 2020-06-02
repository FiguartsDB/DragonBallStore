const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');


dotenv.config();
// Bundled files dir.
const DIR_BASE = path.join(__dirname, 'build');
const pathResolve = (route) => path.resolve(__dirname, route);

const API_PORT = process.env.PORT || 3000;

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname, './src/Client/index.js'),
    output: {
        path: DIR_BASE,
        publicPath: '/',
        filename: '[name].js',
    },
    devServer: {
        contentBase: DIR_BASE,
        publicPath: '/',
        historyApiFallback: true, // save history routes
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@pages': pathResolve('./src/Client/pages'),
            '@components': pathResolve('./src/Client/components')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.html/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpg)/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'assets/',
                        publicPath: 'assets',
                        name: '[path][name].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html',
            title: 'DragonBall Store',
            favicon: './public/favicon.ico',
        }),
	  new webpack.EnvironmentPlugin({
		NODE_ENV: process.env.NODE_ENV || 'development',
		API: process.env.API || `http://localhost:${API_PORT}/api`
	  })
    ]
}
