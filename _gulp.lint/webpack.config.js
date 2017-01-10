// webpack.config.js
var webpack = require('webpack');

module.exports = {
  entry: './src/js/entry.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'index.js'
  }
};
