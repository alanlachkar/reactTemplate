const path = require('path');
// Webpack plugins imports
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        exclude: [/node_modules/],
        include: [path.resolve(__dirname, 'src')],
        test: /\.(ts|tsx|js)$/,
        // Always necessary after the migration into webpack v5 ?
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json']
        },
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { modules: { localIdentName: '[name]_[local]_[hash:base64:5]' } }
          }
        ]
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        // TODO Check the best loader for pictures or icons or url-loader ?
        loader: 'file-loader',
        options: {
          name: 'assets/images/[name].[ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        generator: {
          filename: 'assets/fonts/[name].[ext]'
        }
      }
    ]
  },
  resolve: {
    // Always necessary ?
    extensions: ['.ts', '.tsx', '.js', '.json']
    // fallback: {
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html'),
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    })
  ],

  output: {
    filename: '[name].bundle.js', // This option determines the name of each output bundle.
    path: path.resolve(__dirname, 'build'),
    clean: true // Clean the output directory before emit.
  }
};
