var express = require('express');
var path = require('path');
var app = express();

var DIST_DIR = path.resolve(__dirname + '/../dist');
app.set('port', (process.env.PORT || 5000));

/*
************************************************************************
* Development
* It doesn't use the /dist folder's files, all the files sits in memory
************************************************************************
*/
if(process.env.NODE_ENV === 'development'){
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpackDevConfigs = require('./webpack.dev');
  var webpack = require('webpack');

  var compiler = webpack(webpackDevConfigs);
  var SRC_DIR = path.resolve(__dirname + '/../src/');

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

  app.get('*', function(req, res) {
    res.sendFile(SRC_DIR + '/index.html');
  });
}

/*
************************************************************************
* Production
************************************************************************
*/
if(process.env.NODE_ENV === 'production'){
  app.use('/assets/', express.static(DIST_DIR + '/assets'));

  app.get('*', function(req, res) {
    res.sendFile(DIST_DIR + '/index.html');
  });
}

/*
************************************************************************
* Server listens
************************************************************************
*/
app.listen(app.get('port'), function() {
  console.log('Listening port ' + app.get('port'));
  console.log('You are in ' + process.env.NODE_ENV + ' environment');
});
