var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeModules = path.join(__dirname, 'node_modules');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/app');
var ASSET_DIR = path.resolve(__dirname, 'dist/assets');

var config = {
    context: __dirname + '/src',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        APP_DIR + '/index.jsx',
    ],
    output: {
        path: BUILD_DIR,
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        //modulesDirectories: [nodeModules],
        extensions: ['', '.css', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: APP_DIR,
                loader: 'react-hot!babel'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(png|jpg)$/,
                exclude: [/node_modules/],
                loader: 'file-loader?name=assets/[name].[ext]'
            },
            {
                test: /\.svg$/,
                exclude: [/node_modules/],
                loader: 'file-loader?name=assets/[name].[ext]'
            }
        ]
    }
};

module.exports = config;
