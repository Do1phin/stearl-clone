const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: false,
    port: 9000,
    open: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      template: './src/index.html',
    }),
  ],
};
