const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src/app'),
  images: path.join(__dirname, 'src/img'),
  assets: path.join(__dirname, 'dist/assets'),
  build: path.join(__dirname, 'dist')
};

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
      parts.clean(PATHS.build),
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
    parts.loadCSS(PATHS.app),
    parts.loadPDFFiles(),
    parts.loadImages(PATHS.img),
    parts.loadJavascript(PATHS.app),
    parts.devServer({
            host: process.env.HOST,
            port: process.env.PORT
        }),
    parts.lintJavaScript({
      paths: PATHS.app,
      options: {
        emitWarning: true
      }
    }),
    // parts.lintCSS(PATHS.app)
  ]);
};
