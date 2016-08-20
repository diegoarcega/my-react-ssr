var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname, 'src');

var CONFIG = {
  entry: {
    app: SRC_DIR + '/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: '[name].js',
    publicPath: '/assets/'
  },
  resolve: {
    root: [
      SRC_DIR,
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      include: SRC_DIR,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      loaders: [
        'style',
        'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        'resolve-url',
        'sass'
      ]
    } {
      test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  devtool: 'source-map'
}

module.exports = CONFIG;
