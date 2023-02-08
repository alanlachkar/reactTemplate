const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');
require('webpack-dev-server');

require('dotenv').config();

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval', // Recommended choice for development builds with maximum performance.
  devServer: {
    client: {
      overlay: {
        errors: true,
        warnings: false
      }
    },
    port: process.env.HTTP_PORT,
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
});
