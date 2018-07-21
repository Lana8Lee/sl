let path = require('path');
let webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  mode: 'development',
  entry: "./webpack/entry.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './assets/javascripts'),
    publicPath: "./assets/javascripts/"
  },

  module: {

    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['transform-class-properties']
          }
        }
      }
    ]
  },
  // devServer: {
  //   historyApiFallback: true,
  //   contentBase: './',
  //   hot: true
  // },
  plugins: [
    new UglifyJsPlugin()
  ]
};


//== npm run-script build or npm start
