const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['babel-polyfill', './index.js'],
    indexWorker: ['babel-polyfill', './indexWorker.js'],
    'assets/assetsWorker': ['babel-polyfill', './workers/assetsWorker.js']
  },
  output: {
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin([
      {
        from: './index.html',
        to: './',
        toType: 'dir'
      },
      {
        from: '../assets',
        to: './assets',
        toType: 'dir'
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: [path.join(__dirname, '/dist'), path.join(__dirname, '/dist/assets')],
    https: true,
  }
};
