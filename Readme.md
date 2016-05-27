## Getting Started
1) Run `npm install`

2) You now have all the packages

3) Run `npm start` to see the project.
    * You run `npm run dev` to do development work

4) Open up localhost:8080, and you should see an index directory, point it to the `dist` directory and it should fire the webpack dev server with HMR

## Things to Know
 * There are a lot of commands in `package.json`
 * Reading them over to determine which one you want before starting is beneficial
 * I did not declare `HotModuleReplacement()` in the `plugins` object, because I use webpack's CLI rather than the Node API to configure the dev server to use hot-loader. THEY ARE MUTUALLY EXCLUSIVE.

## Webpack Configuration
We'll walk through my webpack configuration (because the Internet has conflicting information on how to create one)

```javascript
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nodeModules = path.join(__dirname, 'node_modules');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/app');
var ASSET_DIR = path.resolve(__dirname, 'dist/assets');
```
Here we declare all of our dependencies, plugins, and directories. This is important later on in the project.

```javascript
var config = {
    context: __dirname + '/src',
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        publicPath: '/dist',
        filename: 'bundle.js'
    }
```
* We establish the context of our application, which is the `/src/` folder. Webpack will look in this folder for all of our source files.
* `entry` dictates what file should be ran when running the dev server.
* `output` dictates where the bundled files will go.

```javascript
plugins: [
    new ExtractTextPlugin('bundle.css')
],
resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.css', '.js']
}
```
* We declare our plugins and resolve the node_modules directories here.
* ExtractTextPlugin will allow us to bundle all of our CSS into one file, named `bundle.css`

```javascript
module: {
    loaders: [
        {
            test: /\.jsx$/,
            include: APP_DIR,
            loaders: ['react-hot', 'babel']
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
```
This one is kind of a doozy, but we'll go through it.

```javascript
{
    test: /\.jsx$/,
    include: APP_DIR,
    loaders: ['react-hot', 'babel']
},
```
We'll test for all files within our application directory that have the extension `.jsx` and load them through the babel loader, then we plug them into the React hot loader.

```javascript
{
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
}
```
Load all .css files and bundle them into `bundle.css`. This is useful for importing CSS frameworks that are not written in sass

```javascript
{
    test: /\.scss$/,
    exclude: [/node_modules/],
    loader: ExtractTextPlugin.extract('css!sass')
}
```
Run all files with the extension `.scss` and load them through the CSS loader. This will also fire the CSS loader, and bundle the specified files within `bundle.css`

```javascript
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
```
Load all images/svg and place them in the `/dist/assets/` folder. It's important here that we referenced the `context` object earlier in our config. It will append that path to the `name` argument here and output the files in that directory.
