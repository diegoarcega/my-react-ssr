var path = require('path');
var webpack = require('webpack');

var SRC_DIR = path.resolve(__dirname + '/../src');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        SRC_DIR + '/app.js',
        SRC_DIR + '/shell.js',

    ],
    output: {
        path: "/",
        filename: '[name].js',
        publicPath: '/assets/'
    },
    resolve: {
        root:[
            SRC_DIR,
            path.resolve(__dirname, '/../node_modules')
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, include: SRC_DIR, loader: 'babel-loader' },
            // { test: /\.(css|scss)$/, loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]', 'sass'] },
             { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    },
    plugins:[
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            '__DEV__': true,
            'process.env': {
              'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.NoErrorsPlugin()
    ],
    devtool: 'source-map'
}
