import bodyParser from 'body-parser'
import express from 'express'
import winston from 'winston'
import expressWinston from 'express-winston'
const app = express()

if(process.env.NODE_ENV == 'development'){
  /*webpack dev*/
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpackDevConfigs = require('../webpack.dev');
  var webpack = require('webpack');
  var compiler = webpack(webpackDevConfigs);

  app.use(webpackDevMiddleware(compiler,{
     stats: {colors: true},
     hot: true,
     historyApiFallback: true,
     publicPath: '/assets/'
  }));

  app.use(webpackHotMiddleware(compiler,{
    log: console.log,
    path: '/__webpack_hmr',
  }));
  /*webpack dev*/
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  expressWinston.logger({
      transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        })
      ],
      meta: true, // optional: control whether you want to log the meta data about the request (default to true)
      msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
      expressFormat: true, // Use the default Express/morgan request formatting, with the same colors. Enabling this will override any msg and colorStatus if true. Will only output colors on transports with colorize set to true
      colorStatus: true, // Color the status code, using the Express/morgan color palette (default green, 3XX cyan, 4XX yellow, 5XX red). Will not be recognized if expressFormat is true
      ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
    })
)

export default app
