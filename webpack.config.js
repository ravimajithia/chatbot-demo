const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@chat': path.resolve(__dirname, 'src/components/chat')
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    })
  ],
  entry: {
    dist: './src/app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3000,
    open: true
  },
  stats: {
    colors: true,
    warnings: false
  },
  devtool: 'eval-cheap-module-source-map'
}
