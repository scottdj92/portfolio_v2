const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

exports.clean = function(path) {
    return {
        plugins: [
            new CleanWebpackPlugin([path])
        ]
    };
};

exports.devServer = function(options) {
    return {
        devServer: {
            historyApiFallback: true,
            hot: true,
            hotOnly: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                //multiStep: true
            })
        ]
    }
};

exports.lintJavaScript = function({ paths, options }) {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    loader: 'eslint-loader',
                    options: options
                }
            ]
        }
    }
};

exports.loadJavascript = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: paths,
                    loader: 'babel-loader',
                    query: {
                        //enable caching for performance during dev
                        cacheDirectory: true,
                        presets: ['react', 'es2015']
                    }
                }
            ]
        }
    };
};

exports.lintCSS = function(paths) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    include: paths,
                    enforce: 'pre',
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: function() {
                            return [
                                require('stylelint')({
                                    ignoreFiles: 'node_modules/**/*.css'
                                })
                            ]
                        }
                    }
                }
            ]
        }
    };
};

exports.loadCSS = function(paths) {
    return {
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
                }
            ]
        }
    }
};

exports.extractCSS = function(paths) {
    return {
        plugins: [
            new ExtractTextPlugin({
                filename: 'bundle.css'
            })
        ],
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    include: paths,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'resolve-url-loader', 'sass-loader']
                    })
                }
            ]
        }
    }
};

exports.loadPDFFiles = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.pdf$/,
          include: paths,
          use: 'file-loader'
        }
      ]
    }
  }
};

exports.purifyCSS = function(paths) {
    return {
        plugins: [
            new PurifyCSSPlugin({ paths: paths })
        ]
    }
};

exports.generateSourcemaps = function(type) {
    return {
        devtool: type
    };
};

exports.loadImages = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif)$/,
          include: paths,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },
        {
          test: /\.svg$/,
          include: paths,
          use: ['file-loader', 'svgo-loader']
        }
      ]
    }
  }
};

exports.compressImages = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          include: paths,
          use: [
            {
              loader: 'file-loader'
            },
            {
            loader: 'image-webpack-loader',
            query: {
                gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 7
                }
              }
            }
          ]
        }
      ]
    }
  };
};

exports.extractBundles = function(bundles, options) {
    const entry = {};
    const names = [];

    //set up entries and names
    bundles.forEach(({ name, entries }) => {
        if (entries) {
            entry[name] = entries;
        }
        names.push(name);
    });

    return {
        //define an entry point needed for splitting
        entry,
        plugins: [
            new webpack.optimize.CommonChunkPlugin(
                Object.assign({}, options, {names})
            )
        ]
    };
};
