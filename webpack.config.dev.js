const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src/app');
const ASSET_DIR = path.resolve(__dirname, 'dist/assets');

const common = merge([
  {
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
        new HtmlWebpackPlugin({
          template: './src/index.html'
        }),
    ],
  ]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([
      common,
    ])
  }

  return merge([
    common,
    plugins: [
      new webpack.NamedModulesPlugin()
    ],

  ])
};
