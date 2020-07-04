const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    youtube: './src/Youtube/router.ts',
    facebook: './src/Facebook/index.ts',
  },
  optimization: {
    minimize: false,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  devtool: 'source-map',
};
