const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src/app'),
  assets: path.join(__dirname, 'dist/assets'),
  build: path.join(__dirname, 'dist')
};

// const BUILD_DIR = path.resolve(__dirname, 'dist');
// const APP_DIR = path.resolve(__dirname, 'src/app');
// const ASSET_DIR = path.resolve(__dirname, 'dist/assets');

const common = merge([
  {
    entry: {
        app: PATHS.app + '/index.jsx'
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
    ],
  }
  ]);

module.exports = function(env) {
  if (env === 'production') {
    return merge([
      common,
      parts.clean(PATHS.dist),
      parts.loadPDFFiles(),
      parts.loadJavascript(PATHS.app),
      parts.lintJavaScript({ paths: PATHS.app }),
      parts.extractCSS(),
      parts.compressImages(PATHS.app)
    ]);
  }

  return merge([
    common,
    {
      plugins: [
        new webpack.NamedModulesPlugin()
      ],
    },
    parts.loadPDFFiles(),
    parts.compressImages(PATHS.app),
    parts.loadCSS(),
    parts.devServer({
            host: process.env.HOST,
            port: process.env.PORT
        }),
    parts.loadJavascript(PATHS.app),
    parts.lintJavaScript({
      paths: PATHS.app,
      options: {
        emitWarning: true
      }
    }),
    parts.lintCSS(PATHS.app)
  ]);
};
