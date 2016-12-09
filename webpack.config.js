var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/app');
var ASSET_DIR = path.resolve(__dirname, 'dist/assets');

var config = {
    context: __dirname + '/src',
    entry: {
        app: APP_DIR + '/index.jsx'
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.css', '.js', '.jsx', '.scss']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: APP_DIR,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            {
                test: /\.(jpg|png|svg)$/i,
                exclude: [/node_modules/],
                loaders: [
                    'file-loader?name=assets/[name]/[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            // {
            //     test: /\.(jpg|png)$/,
            //     exclude: [/node_modules/],
            //     loader: 'file-loader?name=assets/[name].[ext]'
            // },
            // {
            //     test: /\.svg$/,
            //     exclude: [/node_modules/],
            //     loader: 'file-loader?name=assets/[name].[ext]'
            // },
            {
                test: /\.json$/,
                exclude: [/node_modules/],
                loader: 'json-loader?name=assets/[name].[ext]'
            }
        ]
    }
};

module.exports = config;
