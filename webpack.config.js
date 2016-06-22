var path = require('path');


var SRC_DIR = path.resolve(__dirname, 'src');

var CONFIG = {
    entry: SRC_DIR + '/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    resolve: {
        root:[
            SRC_DIR,
            path.resolve(__dirname, 'node_modules')
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel', query:{ presets:['es2015','react'], plugins:['transform-object-rest-spread'] } },
            { test: /\.(css|scss)$/, loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:5]', 'sass'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.jpg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
        ]
    },

    devServer: {
        contentBase: './src',
        hot: true
    },
    devtool: 'source-map'
}

module.exports = CONFIG;
