const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'ReactCookieBanner',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  target: 'node',
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
  ],
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
};
