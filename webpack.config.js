// require("dotenv").config();

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'Client/dist'),
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin(),

  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
