const path = require('path');
const { merge } = require('webpack-merge');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  module: {},
  optimization: {
    minimize: true,
    minimizer: [
      // Minimize js files
      new TerserPlugin({
        parallel: true
      }),
      // Minimize css files
      new CssMinimizerPlugin()
    ]
  }
});
