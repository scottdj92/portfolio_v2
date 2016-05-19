var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeModules = path.join(__dirname, 'node_modules');

//import external packages to be bundled
//require('foundation-sites');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    sassLoader: {
        includePaths: [nodeModules],
    },
    resolve: {
        root: path.resolve(__dirname),
        modulesDirectories:[path.resolve(__dirname), 'node_modules'],
        extensions: [],
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: APP_DIR,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

module.exports = config;
